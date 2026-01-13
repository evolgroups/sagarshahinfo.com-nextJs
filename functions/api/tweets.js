/**
 * Cloudflare Pages Function - Twitter Feed Handler
 * Handles GET requests to /api/tweets
 * 
 * Note: twitter-api-v2 package needs to be bundled with your deployment
 */

// Since we can't use twitter-api-v2 directly in Cloudflare Functions without bundling,
// we'll use the Twitter API v2 directly with fetch

// Simple in-memory cache (will reset on each cold start)
let cachedTweets = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

/**
 * Fetch tweets using Twitter API v2 directly
 */
async function fetchTwitterFeed(username, bearerToken) {
  // Get user by username
  const userUrl = `https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url,public_metrics,description,verified`;
  const userResponse = await fetch(userUrl, {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
    },
  });

  if (!userResponse.ok) {
    throw new Error('Failed to fetch user data');
  }

  const userData = await userResponse.json();
  const user = userData.data;

  if (!user) {
    throw new Error(`User @${username} not found`);
  }

  // Get user's tweets
  const tweetsUrl = `https://api.twitter.com/2/users/${user.id}/tweets?max_results=10&exclude=retweets,replies&tweet.fields=created_at,public_metrics,entities&expansions=attachments.media_keys&media.fields=url,preview_image_url,type`;
  const tweetsResponse = await fetch(tweetsUrl, {
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
    },
  });

  if (!tweetsResponse.ok) {
    throw new Error('Failed to fetch tweets');
  }

  const tweetsData = await tweetsResponse.json();

  // Format tweets
  const tweets = tweetsData.data?.map((tweet) => {
    const mediaKeys = tweet.attachments?.media_keys || [];
    const media = tweetsData.includes?.media?.find((m) => mediaKeys.includes(m.media_key));

    return {
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at,
      metrics: tweet.public_metrics,
      media_url: media?.url || media?.preview_image_url || null,
      tweet_url: `https://twitter.com/${username}/status/${tweet.id}`,
    };
  }) || [];

  // Format profile
  const profile = {
    id: user.id,
    name: user.name,
    username: user.username,
    description: user.description,
    profile_image_url: user.profile_image_url?.replace('_normal', '_400x400'),
    verified: user.verified,
    followers_count: user.public_metrics?.followers_count,
    following_count: user.public_metrics?.following_count,
    tweet_count: user.public_metrics?.tweet_count,
  };

  return { profile, tweets };
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

/**
 * Cloudflare Pages Function Handler for GET requests
 */
export async function onRequestGet(context) {
  try {
    // Check cache
    const now = Date.now();
    if (cachedTweets && now - cacheTimestamp < CACHE_DURATION) {
      return new Response(
        JSON.stringify({
          success: true,
          ...cachedTweets,
          cached: true,
          cacheAge: Math.round((now - cacheTimestamp) / 1000 / 60),
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
          },
        }
      );
    }

    // Get credentials from environment
    const bearerToken = context.env.TWITTER_BEARER_TOKEN;
    const username = context.env.TWITTER_USERNAME || 'sagarshah07';

    if (!bearerToken) {
      // Return fallback if not configured
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Twitter API not configured',
          tweets: getFallbackTweets(),
          profile: getFallbackProfile(),
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=3600',
          },
        }
      );
    }

    // Fetch fresh data
    const data = await fetchTwitterFeed(username, bearerToken);

    // Update cache
    cachedTweets = data;
    cacheTimestamp = now;

    return new Response(
      JSON.stringify({
        success: true,
        ...data,
        cached: false,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      }
    );
  } catch (error) {
    console.error('Twitter API Error:', error);

    // Return fallback on error
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to fetch tweets',
        tweets: getFallbackTweets(),
        profile: getFallbackProfile(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300',
        },
      }
    );
  }
}
