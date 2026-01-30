'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';

interface RatingWidgetProps {
  onSubmit: (score: number) => void;
  isSubmitting?: boolean;
  disabled?: boolean;
  className?: string;
}

const RatingWidget = ({ onSubmit, isSubmitting = false, disabled = false, className = '' }: RatingWidgetProps) => {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = () => {
    if (selectedScore !== null) {
      if (!confirmed) {
        setConfirmed(true);
      } else {
        onSubmit(selectedScore);
      }
    }
  };

  const handleReset = () => {
    setSelectedScore(null);
    setConfirmed(false);
  };

  return (
    <div className={`bg-deep-navy border border-border-grey rounded-xl p-4 ${className}`}>
      <h4 className="font-sora font-semibold text-frost-white mb-3 text-center">
        {confirmed ? 'Confirm your rating' : 'Rate this performance'}
      </h4>

      {!confirmed ? (
        <>
          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
              <button
                key={score}
                onClick={() => setSelectedScore(score)}
                disabled={disabled}
                className={`w-9 h-9 rounded-lg font-semibold text-sm transition-all ${
                  selectedScore === score
                    ? 'bg-violet-core text-frost-white shadow-lg shadow-violet-core/30'
                    : 'bg-carbon-black border border-border-grey text-soft-grey hover:border-violet-core hover:text-frost-white'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {score}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-xs text-soft-grey mb-4">
            <span>Needs Work</span>
            <span>Outstanding</span>
          </div>
        </>
      ) : (
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-core/20 border-2 border-violet-core mb-2">
            <span className="text-3xl font-sora font-bold text-violet-core">{selectedScore}</span>
          </div>
          <p className="text-soft-grey text-sm">You rated this performance {selectedScore}/10</p>
        </div>
      )}

      <div className="flex gap-3">
        {confirmed && (
          <Button variant="ghost" onClick={handleReset} className="flex-1">
            Change
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={selectedScore === null || disabled}
          isLoading={isSubmitting}
          className="flex-1"
        >
          {confirmed ? 'Submit Rating' : 'Continue'}
        </Button>
      </div>
    </div>
  );
};

export default RatingWidget;
