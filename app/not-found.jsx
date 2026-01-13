import Link from 'next/link';
import Button from '@/components/ui/Button';

/**
 * 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
