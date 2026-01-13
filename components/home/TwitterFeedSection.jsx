'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Twitter, ExternalLink, Heart, Repeat2, MessageCircle, ArrowRight, Calendar, Users, Loader2, RefreshCw } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS, SOCIAL_MEDIA_STATS } from '@/lib/constants';

/**
 * Twitter/X Feed Section - Fetches real tweets from API
 * Falls back to static data if API fails
 */

// Fallback tweets when API fails
const FALLBACK_TWEETS = [
  {
    id: '1',
    text: "Building businesses across continents isn't just about expansion—it's about creating impact. Proud of what we've achieved with Evol Group! 🚀",
    created_at: new Date().toISOString(),
    metrics: { like_count: 245, retweet_count: 42 },
    tweet_url: 'https://twitter.com/sagarshah07',
  },
  {
    id: '2',
    text: "Immigration opens doors, technology builds bridges, and entrepreneurship creates opportunities. That's been my journey for 20+ years.",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    metrics: { like_count: 312, retweet_count: 67 },
    tweet_url: 'https://twitter.com/sagarshah07',
  },
  {
    id: '3',
    text: 'The best investment you can make is in people—your team, your clients, your community. Everything else follows.',
    created_at: new Date(Date.now() - 172800000).toISOString(),
    metrics: { like_count: 189, retweet_count: 38 },
    tweet_url: 'https://twitter.com/sagarshah07',
  },
];

const FALLBACK_PROFILE = {
  name: 'Sagar Shah',
  username: 'sagarshah07',
  description: 'Founder & CEO of Evol Group | Serial Entrepreneur | Immigration Expert | Helping businesses scale across India, Australia & UAE 🌏',
  profile_image_url: '/images/Logo_SS-14.png',
  followers_count: 7500,
  following_count: 500,
  tweet_count: 1200,
};

export default function TwitterFeedSection() {
  const [tweets, setTweets] = useState(FALLBACK_TWEETS);
  const [profile, setProfile] = useState(FALLBACK_PROFILE);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTweets = async (showRefresh = false) => {
    try {
      if (showRefresh) setIsRefreshing(true);
      else setIsLoading(true);
      
      const response = await fetch('/api/tweets');
      const data = await response.json();

      if (data.tweets && data.tweets.length > 0) {
        setTweets(data.tweets);
      }
      if (data.profile) {
        setProfile(data.profile);
      }
      if (!data.success) {
        setError(data.error);
      } else {
        setError(null);
      }
    } catch (err) {
      console.error('Failed to fetch tweets:', err);
      setError('Failed to load tweets');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <section id="twitter-feed" className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <AnimatedSection animation="fade-in-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-100 rounded-full mb-4">
                <Twitter className="w-4 h-4 text-sky-500" />
                <span className="text-sm font-medium text-sky-700">Latest Updates</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                <span className="gradient-text">What I'm Sharing</span>
              </h2>
              <p className="text-neutral-500 text-lg">Stay connected with my latest thoughts and updates on X</p>
            </div>

            <Button
              href={SOCIAL_LINKS.twitter}
              external
              variant="twitter"
              className="flex items-center gap-2"
            >
              <Twitter className="w-4 h-4" />
              Follow @sagarshah07
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Card */}
          <AnimatedSection animation="fade-in-up" delay={100} className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-card border border-neutral-100 overflow-hidden">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-8">
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white/20 overflow-hidden">
                    <Image
                      src={profile.profile_image_url || '/images/Logo_SS-14.png'}
                      alt={profile.name || 'Sagar Shah'}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                      unoptimized={profile.profile_image_url?.startsWith('http')}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-2xl">{profile.name || 'Sagar Shah'}</h3>
                      {profile.verified && (
                        <svg className="w-5 h-5 text-sky-200" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sky-100 text-lg">@{profile.username || 'sagarshah07'}</p>
                  </div>
                  <div className="hidden sm:block">
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors shadow-lg"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                
                {/* Bio */}
                <p className="mt-5 text-white/90 text-base leading-relaxed">
                  {profile.description || 'Founder & CEO of Evol Group | Serial Entrepreneur | Immigration Expert | Helping businesses scale across India, Australia & UAE 🌏'}
                </p>
                
                {/* Stats */}
                <div className="flex gap-6 mt-5">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-white">
                      {formatNumber(profile.followers_count)}
                    </span>
                    <span className="text-sky-100 text-sm">Followers</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-white">
                      {formatNumber(profile.tweet_count)}
                    </span>
                    <span className="text-sky-100 text-sm">Posts</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-white">
                      {formatNumber(profile.following_count)}
                    </span>
                    <span className="text-sky-100 text-sm">Following</span>
                  </div>
                </div>
              </div>

              {/* Tweets */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-neutral-800 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-sky-500" />
                    Latest Posts
                  </h4>
                  <button
                    onClick={() => fetchTweets(true)}
                    disabled={isRefreshing}
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors disabled:opacity-50"
                    title="Refresh tweets"
                  >
                    <RefreshCw className={`w-4 h-4 text-neutral-500 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {tweets.slice(0, 5).map((tweet) => (
                      <a
                        key={tweet.id}
                        href={tweet.tweet_url || SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-neutral-50 hover:bg-sky-50 rounded-2xl transition-colors group"
                      >
                        <p className="text-neutral-700 group-hover:text-neutral-800 leading-relaxed">
                          {tweet.text}
                        </p>
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-200">
                          <div className="flex items-center gap-4 text-sm text-neutral-500">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {tweet.metrics?.like_count || 0}
                            </span>
                            <span className="flex items-center gap-1">
                              <Repeat2 className="w-4 h-4" />
                              {tweet.metrics?.retweet_count || 0}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-sm text-neutral-400">
                            <Calendar className="w-4 h-4" />
                            {formatDate(tweet.created_at)}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {/* View More Link */}
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 py-3 text-sky-600 hover:text-sky-700 font-semibold group"
                >
                  View all posts on X
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Side Info Cards */}
          <AnimatedSection animation="fade-in-up" delay={200} className="space-y-6">
            {/* Quick Stats Card - Calculated from tweets */}
            <div className="bg-white rounded-3xl shadow-card border border-neutral-100 p-6">
              <h4 className="font-bold text-lg text-neutral-800 mb-4 flex items-center gap-2">
                <Twitter className="w-5 h-5 text-sky-500" />
                Engagement
              </h4>
              <div className="space-y-4">
                <StatItem 
                  icon={Heart} 
                  label="Total Likes" 
                  value={formatNumber(tweets.reduce((sum, t) => sum + (t.metrics?.like_count || 0), 0))} 
                  color="text-red-500" 
                />
                <StatItem 
                  icon={Repeat2} 
                  label="Retweets" 
                  value={formatNumber(tweets.reduce((sum, t) => sum + (t.metrics?.retweet_count || 0), 0))} 
                  color="text-green-500" 
                />
                <StatItem 
                  icon={Users} 
                  label="Followers" 
                  value={formatNumber(profile.followers_count)} 
                  color="text-sky-500" 
                />
              </div>
            </div>

            {/* Topics Card */}
            <div className="bg-white rounded-3xl shadow-card border border-neutral-100 p-6">
              <h4 className="font-bold text-lg text-neutral-800 mb-4">Topics I Share</h4>
              <div className="flex flex-wrap gap-2">
                {['Entrepreneurship', 'Technology', 'Immigration', 'Startups', 'FinTech', 'AI', 'Business', 'Innovation'].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 bg-neutral-100 hover:bg-sky-100 text-neutral-700 hover:text-sky-700 rounded-full text-sm font-medium transition-colors cursor-default"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Join the Conversation</h4>
              <p className="text-sky-100 text-sm mb-4">
                Follow me on X for daily insights on business, technology, and entrepreneurship.
              </p>
              <Button
                href={SOCIAL_LINKS.twitter}
                external
                variant="white"
                className="w-full"
              >
                Follow Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
      <div className="flex items-center gap-3">
        <Icon className={`w-5 h-5 ${color}`} />
        <span className="text-neutral-600">{label}</span>
      </div>
      <span className="font-semibold text-neutral-800">{value}</span>
    </div>
  );
}

/**
 * Format large numbers (e.g., 7500 -> 7.5K)
 */
function formatNumber(num) {
  if (!num) return '0';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

/**
 * Format date to readable string (e.g., "Jan 12, 2026")
 */
function formatDate(dateString) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}
