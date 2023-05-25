import { useEffect, useState } from 'react';

const useInitialTerm = (data) => {
  const [selectedTerm, setSelectedTerm] = useState({ text: '전체', term: 'max' });
  const { input, output } = data;
  const [initialValue, setInitialValue] = useState({});
  useEffect(() => {
    const inputDate = new Date(input.date.year, input.date.month - 1, input.date.day).getTime();
    const outputDate = new Date(output.date.year, output.date.month - 1, output.date.day).getTime();
    const timeDiff = parseInt((outputDate - inputDate) / 1000 / 60 / 60); // 단위 시간

    switch (true) {
      case (timeDiff >= 1 && timeDiff <= 24):
        // 1시간 이상
        setInitialValue({ text: '1일', term: '1' });
        break;
      case (timeDiff > 24 && timeDiff < 168):
        // 1일(24시간) 이상, 1주일 미만
        setInitialValue({ text: '1주', term: '7' });
        break;
      case (timeDiff >= 168 && timeDiff < 720):
        // 1주일 이상, 1달 미만
        setInitialValue({ text: '1개월', term: '30' });
        break;
      case (timeDiff >= 720 && timeDiff < 8760):
        // 1달 이상, 1년 미만
        setInitialValue({ text: '1년', term: '365' });
        break;
      default:
        // 1년 이상
        setInitialValue({ text: '전체', term: 'max' });
        break;
    }
    setSelectedTerm(initialValue);
  }, []);

  return [selectedTerm, setSelectedTerm];
};

export default useInitialTerm;
