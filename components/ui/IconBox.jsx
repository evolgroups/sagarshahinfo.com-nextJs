import { cn } from '@/lib/utils';

/**
 * Reusable Icon Box component for service cards
 */
export default function IconBox({
  children,
  bgColor = '#EBF8FF',
  color = '#84d5ff',
  size = 'md',
  className,
}) {
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-14 h-14 text-2xl',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl flex-shrink-0',
        sizes[size],
        className
      )}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </div>
  );
}
