'use client';

import Image from 'next/image';
import { ExternalLink, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/lib/constants';

/**
 * LinkedIn Profile Card Component
 * Migrated from Django achievements.html template
 */
export default function LinkedInCard() {
  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden max-w-sm mx-auto lg:mx-0">
      {/* Banner */}
      <div
        className="h-32 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://static.licdn.com/aero-v1/sc/h/5q92mjc5c51bjlwaj3rs9aa82')",
        }}
      >
        {/* Profile Picture */}
        <div className="absolute -bottom-12 left-4">
          <Image
            src="https://media.licdn.com/dms/image/v2/C5103AQEeFqPZw3tssg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1572867943112?e=2147483647&v=beta&t=hmIQ2mp8mDywRdzkVV3KwxBVg1J1U6beUrAj0VNxcf0"
            alt="Sagar Shah LinkedIn"
            width={104}
            height={104}
            className="rounded-full border-4 border-white shadow-lg object-cover"
            unoptimized
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 px-6 pb-6">
        <h2 className="text-xl font-bold text-neutral-800">Sagar Shah</h2>
        <p className="text-sm text-neutral-600 mt-1">
          Greater Sydney Area ·{' '}
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-linkedin hover:underline"
          >
            Contact Info
          </a>
        </p>
        <p className="text-sm text-neutral-500 mt-2">
          5K followers · 500+ connections
        </p>

        {/* Mutual Connections */}
        <div className="flex -space-x-2 mt-4">
          <Image
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Connection"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            unoptimized
          />
          <Image
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Connection"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            unoptimized
          />
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Connection"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-2 border-white object-cover"
            unoptimized
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            href={SOCIAL_LINKS.linkedin}
            external
            variant="linkedin"
            size="sm"
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Profile
          </Button>
          <Button
            href={`${SOCIAL_LINKS.linkedin}?msgOverlay=true`}
            external
            variant="outline"
            size="sm"
            className="flex-1 border-linkedin text-linkedin hover:bg-linkedin hover:text-white"
          >
            <Send className="w-4 h-4 mr-2" />
            Message
          </Button>
        </div>
      </div>
    </div>
  );
}
