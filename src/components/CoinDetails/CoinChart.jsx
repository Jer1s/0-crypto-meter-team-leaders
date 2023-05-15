/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React, { useState } from 'react';
import moment from 'moment';
import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  Label,
} from 'recharts';

import bitcoin from './bitcoin';
import CategoryButtonChipContainer from './CategoryButtonChipContainer';

const containerStyle = css`
  max-width: 91rem;
  height: 35.1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-bottom: 8rem;
`;

const CoinChart = () => {
  const [selectedTerm, setSelectedTerm] = useState('전체');

  // ohlc는 coin chart 컴포넌트에서만 사용한다.
  // scenarioData에서 받은 coinType과 localeCurrencyAtom 있는 localeCurrency를 이용한다.
  // https://api.coingecko.com/api/v3/coins/{coinType}}/ohlc?vs_currency={localeCurrency}&days={일자}

  const convertCoinNestedArrayToObject = bitcoin.map((item, index) => {
    // ChartDetail 버튼에 따른 x축 포멧 변경
    // 7, 30일은 MM월 DD일
    // 1일은 hh시 별

    // 1만원, 10만원, 100만원, 1000만원 단위는 item[1] / 10,000 + '만원'
    // 1만원 이하는 item[1] + '원'
    return {
      date: moment(item[0]).format('YYYY년 M월'),
      price: item[1],
    };
  });

  // Y축 레이블 포맷 함수
  const formatYAxisLabel = (value) => {
    return `${value / 10000}만원`;
  };

  return (
    <div css={containerStyle}>
      <CategoryButtonChipContainer
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <ResponsiveContainer width={910}>
        <AreaChart data={convertCoinNestedArrayToObject} margin={{ left: 20 }}>
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
            dx={50}
            dy={10}
            // x축 데이터 간격 설정
            interval={parseInt(convertCoinNestedArrayToObject.length / 3.42)}
          />
          <YAxis
            // y축 값에 있는 줄 삭제
            axisLine={false}
            tickCount={7}
            tickFormatter={formatYAxisLabel}
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
