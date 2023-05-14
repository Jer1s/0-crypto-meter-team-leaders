import React, { useEffect } from 'react';
import kakaotalk from 'assets/kakaotalk.png';
import logo from 'assets/logo.png';

const KAKAO_JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_SHARE_JAVASCRIPT_KEY;

const KakaoShareButton = () => {
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(KAKAO_JAVASCRIPT_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: 'Cryptometer',
          description: '#Cryptometer',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            webUrl: window.location.href,
            mobileWebUrl: window.location.href,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          // 카카오톡 웹이서 보기
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          // 카카오톡 모바일에서 보기
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    createKakaoButton();
  }, []);

  return (
    <button type="button" id="kakao-link-btn">
      <img src={kakaotalk} alt="kakao-share-icon" />
    </button>
  );
};
export default KakaoShareButton;
