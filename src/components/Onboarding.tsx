import React from 'react';

interface OnboardingProps {
  onStart: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 px-4 text-main">
        나랑 가장 잘 맞는 대선 후보는 누구일까?
      </h1>
      <img
        src="/assets/onboarding.png"
        alt="투표 고민 이미지"
        className="w-64 h-auto mb-6"
      />
      <p className="text-sub mb-2 px-4">
        총 11개의 질문에 예/아니오로 답해보세요.
      </p>
      <p className="text-sub mb-6 px-4">
        누굴 뽑을지 모르겠다고요? 당신과 가장 잘 맞는 후보를 알려드립니다.
      </p>
      <button
        onClick={onStart}
        className="bg-primary hover:bg-primaryHover text-white py-3 px-6 rounded-lg shadow-md text-lg"
      >
        테스트 시작하기
      </button>
      <p className="text-sm text-gray-500 mt-4 px-4">
        6월 3일은 대선 투표일입니다. 미래를 위해 투표하세요!
      </p>
    </div>
  );
} 