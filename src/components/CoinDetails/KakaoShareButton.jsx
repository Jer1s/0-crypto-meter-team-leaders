import React from 'react';
import kakaotalk from 'assets/kakaotalk.png';
import useKakaoShare from 'hooks/useKakaoShare';

const KAKAO_JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_SHARE_JAVASCRIPT_KEY;

const KakaoShareButton = () => {
  const containerId = useKakaoShare('#kakao-link-btn', KAKAO_JAVASCRIPT_KEY);
  return (
    <button type="button" id={containerId}>
      <img src={kakaotalk} alt="Kakao Share Icon" />
    </button>
  );
};
export default KakaoShareButton;
