import React, { useEffect, useState } from 'react';

interface OnboardingProps {
  onStart: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onStart }) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);
  const [scriptStatus, setScriptStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    // 쿠팡 파트너스 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://ads-partners.coupang.com/g.js';
    script.async = true;
    
    script.onload = () => {
      setScriptStatus('loaded');
      const adScript = document.createElement('script');
      adScript.text = `
        try {
          new PartnersCoupang.G({
            "id": 869262,
            "template": "carousel",
            "trackingCode": "AF6260974",
            "width": "320",
            "height": "90",
            "tsource": ""
          });
          window.dispatchEvent(new Event('coupangAdLoaded'));
        } catch (error) {
          window.dispatchEvent(new Event('coupangAdError'));
        }
      `;
      document.body.appendChild(adScript);
    };

    script.onerror = (error) => {
      setScriptStatus('error');
      setAdError(true);
    };

    // 광고 로드 이벤트 리스너
    const handleAdLoaded = () => setAdLoaded(true);
    const handleAdError = () => setAdError(true);

    window.addEventListener('coupangAdLoaded', handleAdLoaded);
    window.addEventListener('coupangAdError', handleAdError);

    document.body.appendChild(script);

    // 컴포넌트 언마운트 시 정리
    return () => {
      document.body.removeChild(script);
      window.removeEventListener('coupangAdLoaded', handleAdLoaded);
      window.removeEventListener('coupangAdError', handleAdError);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
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
      <div className="w-full mt-4 px-4" style={{ maxWidth: '100vw' }}>
        <div id="coupang-partner-ad" className="w-full h-full">
          {scriptStatus === 'loading' && (
            <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm">광고 로딩 중...</p>
            </div>
          )}
          {scriptStatus === 'error' && (
            <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm">광고를 불러올 수 없습니다</p>
            </div>
          )}
          {scriptStatus === 'loaded' && !adLoaded && !adError && (
            <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm">광고 초기화 중...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 