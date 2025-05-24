import React from 'react';
import { calcResult } from '../utils/calcResult';

interface ResultProps {
  answers: boolean[];
  onRestart: () => void;
}

export const Result: React.FC<ResultProps> = ({ answers, onRestart }) => {
  const results = calcResult(answers);
  const topCandidate = results[0];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        당신과 가장 잘 맞는 대선 후보는
      </h2>
      
      <div className="mb-8 flex flex-col items-center">
        <div className="text-3xl font-bold text-center text-blue-600 mb-2">
          {topCandidate.name}
        </div>
        <div className="text-center text-gray-600 mb-2">
          {topCandidate.percentage}% 일치
        </div>
        <img
          src={`/assets/candidates/${topCandidate.name}.jpg`}
          alt={topCandidate.name}
          className="w-40 h-40 object-cover rounded-full shadow-md"
        />
      </div>

      <div className="space-y-4 mb-8">
        {results.map((candidate) => (
          <div key={candidate.name} className="flex items-center">
            <div className="w-24 font-medium">{candidate.name}</div>
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded-full">
                <div
                  className="h-4 bg-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${candidate.percentage}%` }}
                />
              </div>
            </div>
            <div className="w-16 text-right text-sm text-gray-600">
              {candidate.percentage}%
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}; 