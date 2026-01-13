import { cn } from '@/lib/utils';

/**
 * Premium Section Heading component with gradient text option
 */
export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = true,
  badge,
  className,
  titleClassName,
  subtitleClassName,
}) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {badge && (
        <div className={cn('inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full mb-6', centered && 'mx-auto')}>
          <span className="w-2 h-2 bg-primary-500 rounded-full" />
          <span className="text-sm font-medium text-primary-700">{badge}</span>
        </div>
      )}
      <h2 
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
          gradient ? 'gradient-text' : 'text-neutral-900',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-neutral-500 text-lg leading-relaxed max-w-3xl',
            centered && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
