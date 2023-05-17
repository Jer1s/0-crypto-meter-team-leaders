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

import useFetch from 'hooks/useFetch';
import CategoryButtonChipContainer from './CategoryButtonChipContainer';
import bitcoin from './TermList/bitcoin';

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
  // const [coinPriceList, setCoinPirceList] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=krw&days=${selectedTerm.term}`;
  const { data: coinPriceList, loading, error } = useFetch(url);
  // const coinPriceList = bitcoin;

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

  const convertCoinNestedArrayToObject = coinPriceList?.map((item) => {
    return {
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

  const chartScaleInfo = calculatingChartScale();

  return (
    <div css={containerStyle}>
      <CategoryButtonChipContainer
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <div css={{ width: '93.1rem', height: '30rem' }}>
        <ResponsiveContainer>
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
              dx={chartScaleInfo.dx}
              dy={20}
              // x축 데이터 간격 설정
              interval={convertCoinNestedArrayToObject && parseInt(convertCoinNestedArrayToObject.length / chartScaleInfo.interval)}
              // interval={convertCoinNestedArrayToObject && convertCoinNestedArrayToObject.length / 3.3 >> 0}
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
    </div>
  );
};

export default CoinChart;
