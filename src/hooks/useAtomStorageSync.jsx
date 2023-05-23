import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';

const useAtomStorageSync = () => {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryAtom);

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem('searchHistory');
    if (storedSearchHistory !== null && searchHistory.length === 0) {
      const parsedSearchHistory = JSON.parse(storedSearchHistory);
      // Atom 값이 변경되지 않은 경우에만 업데이트
      if (JSON.stringify(parsedSearchHistory) !== JSON.stringify(searchHistory)) {
        setSearchHistory(parsedSearchHistory);
      }
    } else {
      // Atom 값을 localStorage에 저장
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }, [searchHistory, setSearchHistory]);
};

export default useAtomStorageSync;