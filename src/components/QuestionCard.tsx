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
        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-blue-100 rounded-full">
          {question.theme}
        </span>
      </div>
      
      <h2 className="text-xl font-bold mb-8 text-main px-4">
        {question.text}
      </h2>

      <div className="flex justify-center space-x-4 px-4">
        <button
          onClick={() => onAnswer(true)}
          className="px-8 py-3 bg-primary hover:bg-primaryHover text-white rounded-lg shadow-md transition-colors text-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          동의
        </button>
        <button
          onClick={() => onAnswer(false)}
          className="px-8 py-3 bg-gray-200 text-main rounded-lg hover:bg-gray-300 transition-colors text-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
        >
          비동의
        </button>
      </div>
    </div>
  );
}; 