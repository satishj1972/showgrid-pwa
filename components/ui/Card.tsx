import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glow';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-deep-navy border border-border-grey',
      elevated: 'bg-deep-navy border border-border-grey shadow-lg shadow-black/20',
      glow: 'bg-deep-navy border border-violet-core/30 shadow-lg shadow-violet-core/10',
    };

    return (
      <div
        ref={ref}
        className={`rounded-xl p-4 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
