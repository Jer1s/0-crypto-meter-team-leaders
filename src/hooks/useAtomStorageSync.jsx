import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import searchHistoryAtom from 'recoils/searchHistory/searchHistoryAtom';

const useAtomStorageSync = () => {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryAtom);

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem('searchHistory');
    if (storedSearchHistory !== null && searchHistory.length === 0) {
      // localStorage에 저장된 searchHistory를 비어있는 Atom에 저장
      setSearchHistory(JSON.parse(storedSearchHistory));
    } else {
      // Atom 값을 localStorage에 저장
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }
  }, [searchHistory, setSearchHistory]);
};

export default useAtomStorageSync;
