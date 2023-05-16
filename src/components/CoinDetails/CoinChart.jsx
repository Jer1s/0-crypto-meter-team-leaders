/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState, useEffect } from 'react';
import moment from 'moment';
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';

import CategoryButtonChipContainer from './CategoryButtonChipContainer';

const containerStyle = css`
  max-width: 91rem;
  min-height: 35.1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const chartScale = [{ term: 'max', dx: 55, interval: 3.4 }, { term: '365', dx: 50, interval: 3.43 }, { term: '30', dx: 40, interval: 3.4 }, { term: '7', dx: 50, interval: 3.7 }, { term: '1', dx: 60, interval: 3.6 }];

const CoinChart = () => {
  const [selectedTerm, setSelectedTerm] = useState({ text: '전체', term: 'max' });
  const [coinPriceList, setCoinPirceList] = useState([]);

  // ohlc는 coin chart 컴포넌트에서만 사용한다.
  // scenarioData에서 받은 coinType과 localeCurrencyAtom 있는 localeCurrency를 이용한다.
  // https://api.coingecko.com/api/v3/coins/{coinType}}/ohlc?vs_currency={localeCurrency}&days={일자}

  const getCoinList = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=krw&days=${selectedTerm.term}`);
    const data = await response.json();
    setCoinPirceList(data);
  };

  useEffect(() => { getCoinList(); }, [selectedTerm]);

  const fomattingTerm = (date) => {
    if (selectedTerm.term === 'max' || selectedTerm.term === '365') {
      return moment(date).format('YYYY년 M월');
    } if (selectedTerm.term === '30' || selectedTerm.term === '7') {
      return moment(date).format('M월 D일');
    }
    const meridiem = moment(date).format('A');
    const hour = moment(date).format('h');
    return `${meridiem === 'AM' ? '오전' : '오후'} ${hour}시`;
  };

  const convertCoinNestedArrayToObject = coinPriceList.map((item) => {
    // ChartDetail 버튼에 따른 x축 포멧 변경
    // 7, 30일은 MM월 DD일
    // 1일은 hh시 별

    // 1만원, 10만원, 100만원, 1000만원 단위는 item[1] / 10,000 + '만원'
    // 1만원 이하는 item[1] + '원'

    return {
      // date: moment(item[0]).format('YYYY년 M월'),
      // date: moment(item[0]).format('h시'),
      date: fomattingTerm(item[0]),
      price: item[1],
    };
  });

  // Y축 레이블 포맷 함수
  const formatYAxisLabel = (value) => {
    if (value >= 10000) {
      return `${value / 10000}만`;
    }
    return `${value}만원`;
  };

  const calculatingChartScale = () => {
    const applyScale = chartScale.find((scale) => { return scale.term === selectedTerm.term; });
    return {
      dx: applyScale.dx,
      interval: applyScale.interval,
    };
  };

  const temp = calculatingChartScale();

  return (
    <div css={containerStyle}>
      <CategoryButtonChipContainer
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <ResponsiveContainer width={910} height={300}>
        <AreaChart data={convertCoinNestedArrayToObject}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#B9E7D0" stopOpacity={1} />
              <stop offset="95%" stopColor="#B9E7D0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal vertical={false} />
          <XAxis
            dataKey="date"
            tickSize={0}
            dx={temp.dx}
            dy={20}
            // x축 데이터 간격 설정
            interval={parseInt(convertCoinNestedArrayToObject.length / temp.interval)}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            // y축 값에 있는 줄 삭제
            dataKey="price"
            axisLine={false}
            tickCount={7}
            tickFormatter={formatYAxisLabel}
            tickSize={0}
            dx={-12}
            label={{
              position: 'insideLeft',
            }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#00A661"
            fill="url(#gradient)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
