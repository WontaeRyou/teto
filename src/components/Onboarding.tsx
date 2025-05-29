import React, { useEffect } from 'react';

interface OnboardingProps {
  onStart: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onStart }) => {
  useEffect(() => {
    // 광고 스크립트 동적 삽입
    const script = document.createElement('script');
    script.src = 'https://ads-partners.coupang.com/g.js';
    script.async = true;
    script.onload = () => {
      const w = window as any;
      if (w.PartnersCoupang && w.PartnersCoupang.G) {
        new w.PartnersCoupang.G({
          id: 869262,
          template: 'carousel',
          trackingCode: 'AF6260974',
          width: '320',
          height: '90',
          tsource: '',
          target: 'coupang-partner-ad'
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
      {/* 광고 컨테이너 */}
      <div className="w-full mt-0 px-4" style={{ maxWidth: '100vw' }}>
        <div id="coupang-partner-ad" className="w-full h-full" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 px-4 text-main">
        운명의 6월 3일, 당신의 선택은?
      </h1>
      <img
        src="/assets/onboarding.png"
        alt="투표 고민 이미지"
        className="w-64 h-auto mb-6"
      />
      <p className="text-sub mb-2 px-4">
        나는 어떤 정치인을 지지할까? 당신의 생각을 알아보세요.
      </p>
      <p className="text-sub mb-6 px-4">
        누굴 뽑을지 모르겠다고요? 당신과 가장 잘 맞는 후보를 알려드립니다.
      </p>
      <button
        onClick={onStart}
        className="bg-primary hover:bg-primaryHover text-white py-3 px-6 rounded-lg shadow-md text-lg transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        테스트 시작하기
      </button>
      <p className="text-sm text-gray-500 mt-4 px-4">
        6월 3일은 대선 투표일입니다. 미래를 위해 투표하세요!
      </p>
    </div>
  );
}; 