/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react';
import moment from 'moment';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';

import useFetch from 'hooks/useFetch';
import { useRecoilValue } from 'recoil';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import CategoryButtonChipContainer from './CategoryButtonChipContainer';

const containerStyle = css`
  max-width: 91rem;
  min-height: 35.1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const tooltipStyle = css`
  width: 10rem;
  height: 3.7rem;
  padding: 0.3rem 0.7rem;
  margin: 0;
  background: var(--tooltip-background);
  border-radius: 0.8rem;
  color: var(--white);

  & p:first-of-type {
    margin: 0;
    font-size: 1.2rem;
    color: var(--gray6);
    width: 10rem;
    height: 1.4rem;
    padding: 0;
  }

  & p:last-of-type {
    margin: 0;
    font-size: 1.4rem;
    color: var(--white);
    width: 8.3rem;
    height: 1.8rem;
    padding: 0;
  }
`;

const chartScale = [{ term: 'max', dx: 55, interval: 3.4 }, { term: '365', dx: 50, interval: 3.43 }, { term: '30', dx: 40, interval: 3.4 }, { term: '7', dx: 50, interval: 3.7 }, { term: '1', dx: 60, interval: 3.6 }];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { filteredDate, price } = payload[0].payload;
    return (
      <div css={tooltipStyle}>
        <p>{filteredDate}</p>
        <p>{`₩${parseInt(price.toFixed(0)).toLocaleString()}`}</p>
      </div>
    );
  }
};

const CoinChart = () => {
  const data = useRecoilValue(scenarioDataAtom);
  const { isSkyrocketed } = data.output;
  const [selectedTerm, setSelectedTerm] = useState({ text: '전체', term: 'max' });
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=krw&days=${selectedTerm.term}`;
  const { data: coinPriceList, loading, error } = useFetch(url);

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

  const convertCoinNestedArrayToObject = coinPriceList?.prices?.map((item) => {
    return {
      date: fomattingTerm(item[0]),
      price: item[1],
      filteredDate: moment(item[0]).format('YYYY년 M월 D일'),
    };
  });

  // Y축 레이블 포맷 함수
  const formatYAxisLabel = (value) => {
    if (value >= 10000) {
      return `${value / 10000}만`;
    }
    return `${value}원`;
  };

  const calculatingChartScale = () => {
    const applyScale = chartScale.find((scale) => { return scale.term === selectedTerm.term; });
    return {
      dx: applyScale.dx,
      interval: applyScale.interval,
    };
  };

  return (
    <div css={containerStyle}>
      <CategoryButtonChipContainer
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <AreaChart
        data={convertCoinNestedArrayToObject}
        width={910}
        height={299}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={isSkyrocketed ? 'var(--chart-green)' : 'var(--primary-red'} stopOpacity={1} />
            <stop offset="95%" stopColor={isSkyrocketed ? 'var(--chart-green)' : 'var(--primary-red'} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal vertical={false} />
        <XAxis
          dataKey="date"
          tickSize={0}
          // dx={chartScaleInfo.dx}
          dx={40}
          dy={20}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 14 }}
          interval={(convertCoinNestedArrayToObject?.length / 3.35) >> 0}
        />
        <YAxis
          // y축 값에 있는 줄 삭제
          dataKey="price"
          axisLine={false}
          tickCount={7}
          tickFormatter={formatYAxisLabel}
          tickLine={false}
          dx={-12}
          tick={{ fontSize: 14 }}
        />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="price"
          stroke={isSkyrocketed ? 'var(--primary)' : 'var(--primary-red)'}
          fill="url(#gradient)"
          fillOpacity={1}
        />
      </AreaChart>
    </div>
  );
};

export default CoinChart;
