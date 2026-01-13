import { cn } from '@/lib/utils';

/**
 * Reusable Card component with optional hover effects
 */
export default function Card({
  children,
  className,
  hover = true,
  padding = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-card transition-all duration-300',
        hover && 'hover:shadow-card-hover hover:-translate-y-1',
        padding && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Header
export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

// Card Body
export function CardBody({ children, className, ...props }) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}

// Card Footer
export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn('mt-4 pt-4 border-t', className)} {...props}>
      {children}
    </div>
  );
}
