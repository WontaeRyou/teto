import React from 'react';
import { questions } from '../questions';

interface ProgressBarProps {
  currentQuestion: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion }) => {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentTheme = questions[currentQuestion]?.theme || '';

  return (
    <div className="w-full mb-8 mt-4 px-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">
          {currentQuestion + 1} / {questions.length}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {currentTheme}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}; 