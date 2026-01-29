interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'score';
  showLabel?: boolean;
  className?: string;
}

const ProgressBar = ({ value, max = 100, variant = 'default', showLabel = false, className = '' }: ProgressBarProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    default: 'bg-violet-core',
    success: 'bg-neon-mint',
    score: 'bg-gradient-to-r from-violet-core to-electric-blue',
  };

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-soft-grey">Progress</span>
          <span className="text-frost-white font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-2 bg-deep-navy rounded-full overflow-hidden border border-border-grey">
        <div
          className={`h-full rounded-full transition-all duration-300 ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
