import React from 'react';
import type { Question } from '../questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: boolean) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="w-full bg-white">
      <div className="mb-4 px-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
          {question.theme}
        </span>
      </div>
      
      <h2 className="text-xl font-bold mb-8 text-gray-800 px-4">
        {question.text}
      </h2>

      <div className="flex justify-center space-x-4 px-4">
        <button
          onClick={() => onAnswer(true)}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          동의
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
        >
          비동의
        </button>
      </div>
    </div>
  );
}; 