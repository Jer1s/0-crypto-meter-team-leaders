import kakaotalk from 'assets/kakaotalk.svg';
import useKakaoShare from 'hooks/useKakaoShare';

const KAKAO_JAVASCRIPT_KEY = process.env.VITE_KAKAO_SHARE_JAVASCRIPT_KEY;

const KakaoShareButton = () => {
  const containerId = useKakaoShare('#kakao-link-btn', KAKAO_JAVASCRIPT_KEY);
  return (
    <button type="button" id={containerId}>
      <img src={kakaotalk} alt="Kakao Share Icon" />
    </button>
  );
};
export default KakaoShareButton;
