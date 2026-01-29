interface BadgeProps {
  variant?: 'live' | 'open' | 'closed' | 'soon' | 'default';
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ variant = 'default', children, className = '' }: BadgeProps) => {
  const variants = {
    live: 'bg-neon-mint/20 text-neon-mint border-neon-mint/30',
    open: 'bg-electric-blue/20 text-electric-blue border-electric-blue/30',
    closed: 'bg-soft-grey/20 text-soft-grey border-soft-grey/30',
    soon: 'bg-pulse-gold/20 text-pulse-gold border-pulse-gold/30',
    default: 'bg-violet-core/20 text-violet-core border-violet-core/30',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {variant === 'live' && (
        <span className="w-1.5 h-1.5 bg-neon-mint rounded-full mr-1.5 animate-pulse" />
      )}
      {children}
    </span>
  );
};

export default Badge;
