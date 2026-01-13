import { cn } from '@/lib/utils';

/**
 * Premium Button component with gradient variants
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  external,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-button hover:shadow-button-hover hover:scale-105 focus:ring-primary-500',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-neutral-900',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-neutral-900',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-neutral-900 focus:ring-white',
    ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
    'ghost-white': 'text-white hover:bg-white/10 focus:ring-white',
    accent: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-glow-accent hover:scale-105 focus:ring-amber-500',
    gradient: 'bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 text-white shadow-button hover:shadow-button-hover hover:scale-105 focus:ring-purple-500',
    glass: 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 focus:ring-white',
    twitter: 'bg-twitter text-white hover:bg-twitter/90 focus:ring-twitter',
    linkedin: 'bg-linkedin text-white hover:bg-linkedin/90 focus:ring-linkedin',
    facebook: 'bg-facebook text-white hover:bg-facebook/90 focus:ring-facebook',
    instagram: 'bg-instagram text-white hover:bg-instagram/90 focus:ring-instagram',
    white: 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg hover:shadow-xl hover:scale-105 focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const linkProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...linkProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
