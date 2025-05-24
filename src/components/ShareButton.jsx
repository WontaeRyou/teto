export default function ShareButton() {
  // 실제 카카오톡 연동은 추후 구현
  const handleShare = () => {
    alert('카카오톡 공유 기능은 추후 지원됩니다.');
  };
  return (
    <button className="w-full py-2 bg-yellow-400 rounded font-bold" onClick={handleShare}>
      카카오톡 공유
    </button>
  );
} 