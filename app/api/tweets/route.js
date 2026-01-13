import { TwitterApi } from 'twitter-api-v2';
import { NextResponse } from 'next/server';

// Cache tweets for 1 hour to avoid rate limits
let cachedTweets = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * GET /api/tweets
 * Fetches recent tweets from @sagarshah07
 * Caches results for 1 hour to avoid Twitter API rate limits
 */
export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cachedTweets && now - cacheTimestamp < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        tweets: cachedTweets,
        cached: true,
        cacheAge: Math.round((now - cacheTimestamp) / 1000 / 60), // minutes
      });
    }

    // Validate environment variables
    const apiKey = process.env.TWITTER_API_KEY;
    const apiSecret = process.env.TWITTER_API_SECRET;
    const accessToken = process.env.TWITTER_ACCESS_TOKEN;
    const accessSecret = process.env.TWITTER_ACCESS_SECRET;
    const username = process.env.TWITTER_USERNAME || 'sagarshah07';

    if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
      return NextResponse.json(
        {
          success: false,
          error: 'Twitter API not configured',
          tweets: getFallbackTweets(),
        },
        { status: 200 }
      );
    }

    // Initialize Twitter client with OAuth 1.0a (User Context)
    const client = new TwitterApi({
      appKey: apiKey,
      appSecret: apiSecret,
      accessToken: accessToken,
      accessSecret: accessSecret,
    });

    // Use read-only client
    const roClient = client.readOnly;

    // Get user ID first
    const user = await roClient.v2.userByUsername(username, {
      'user.fields': ['profile_image_url', 'public_metrics', 'description', 'verified'],
    });

    if (!user.data) {
      throw new Error(`User @${username} not found`);
    }

    // Fetch user's tweets
    const timeline = await roClient.v2.userTimeline(user.data.id, {
      max_results: 10,
      exclude: ['retweets', 'replies'],
      'tweet.fields': ['created_at', 'public_metrics', 'entities'],
      expansions: ['attachments.media_keys'],
      'media.fields': ['url', 'preview_image_url', 'type'],
    });

    // Format tweets for frontend
    const tweets = timeline.data.data?.map((tweet) => {
      const mediaKeys = tweet.attachments?.media_keys || [];
      const media = timeline.includes?.media?.find((m) => mediaKeys.includes(m.media_key));

      return {
        id: tweet.id,
        text: tweet.text,
        created_at: tweet.created_at,
        metrics: tweet.public_metrics,
        media_url: media?.url || media?.preview_image_url || null,
        tweet_url: `https://twitter.com/${username}/status/${tweet.id}`,
      };
    }) || [];

    // Get user profile data
    const profile = {
      id: user.data.id,
      name: user.data.name,
      username: user.data.username,
      description: user.data.description,
      profile_image_url: user.data.profile_image_url?.replace('_normal', '_400x400'),
      verified: user.data.verified,
      followers_count: user.data.public_metrics?.followers_count,
      following_count: user.data.public_metrics?.following_count,
      tweet_count: user.data.public_metrics?.tweet_count,
    };

    // Update cache
    cachedTweets = { profile, tweets };
    cacheTimestamp = now;

    return NextResponse.json({
      success: true,
      ...cachedTweets,
      cached: false,
    });
  } catch (error) {
    console.error('Twitter API Error:', error);

    // Return fallback data on error
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to fetch tweets',
      tweets: getFallbackTweets(),
      profile: getFallbackProfile(),
    });
  }
}

/**
 * Fallback tweets when API fails
 */
function getFallbackTweets() {
  return [
    {
      id: '1',
      text: "Building businesses across continents isn't just about expansion—it's about creating impact. Proud of what we've achieved with Evol Group! 🚀",
      created_at: new Date().toISOString(),
      metrics: { like_count: 245, retweet_count: 42, reply_count: 12 },
      tweet_url: 'https://twitter.com/sagarshah07',
    },
    {
      id: '2',
      text: "Immigration opens doors, technology builds bridges, and entrepreneurship creates opportunities. That's been my journey for 20+ years.",
      created_at: new Date(Date.now() - 86400000).toISOString(),
      metrics: { like_count: 312, retweet_count: 67, reply_count: 23 },
      tweet_url: 'https://twitter.com/sagarshah07',
    },
    {
      id: '3',
      text: 'The best investment you can make is in people—your team, your clients, your community. Everything else follows.',
      created_at: new Date(Date.now() - 172800000).toISOString(),
      metrics: { like_count: 189, retweet_count: 38, reply_count: 8 },
      tweet_url: 'https://twitter.com/sagarshah07',
    },
  ];
}

/**
 * Fallback profile when API fails
 */
function getFallbackProfile() {
  return {
    name: 'Sagar Shah',
    username: 'sagarshah07',
    description:
      'Founder & CEO of Evol Group | Serial Entrepreneur | Immigration Expert | Helping businesses scale across India, Australia & UAE',
    profile_image_url: '/images/Logo_SS-14.png',
    verified: false,
    followers_count: 7500,
    following_count: 500,
    tweet_count: 1200,
  };
}
