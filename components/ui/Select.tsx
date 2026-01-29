import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-soft-grey mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`w-full px-4 py-3 min-h-[44px] bg-deep-navy border border-border-grey rounded-lg text-frost-white focus:outline-none focus:border-violet-core focus:ring-1 focus:ring-violet-core transition-colors appearance-none cursor-pointer ${error ? 'border-hyper-pink' : ''} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-hyper-pink">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
