import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-soft-grey mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 min-h-[44px] bg-deep-navy border border-border-grey rounded-lg text-frost-white placeholder-soft-grey/50 focus:outline-none focus:border-violet-core focus:ring-1 focus:ring-violet-core transition-colors ${error ? 'border-hyper-pink' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-hyper-pink">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
