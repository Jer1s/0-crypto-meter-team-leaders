import { useCallback, useEffect } from 'react';

const useKakaoShare = (containerId, key) => {
  const createShareButton = useCallback(() => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(key);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: containerId,
        objectType: 'feed',
        content: {
          title: 'Cryptometer',
          description: '화성 갈끄니까!!!',
          imageUrl:
            'https://tago.kr/images/sub/TG300-D02_img01.png',
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
          // 카카오톡 웹에서 보기
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
  }, [containerId, key]);

  useEffect(() => {
    createShareButton();
  }, [createShareButton]);

  // #kakao-link-btn과 같은 id에서 '#'제거 과정
  const idToArray = containerId.split('');
  idToArray.shift();
  const IdToString = idToArray.join('');
  return IdToString;
};

export default useKakaoShare;
