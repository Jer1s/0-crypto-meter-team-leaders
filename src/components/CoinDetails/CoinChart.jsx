/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import { useRecoilValue } from 'recoil';
import useResponsiveView from 'hooks/useResponsiveView';
import scenarioDataAtom from 'recoils/scenarioData/scenarioDataAtom';
import { useQuery } from '@tanstack/react-query';
import useInitialTerm from 'hooks/useInitialTerm';
import CategoryButtonChipContainer from './CategoryButtonChipContainer';

const PRO_API_KEY = import.meta.env.VITE_X_CG_PRO_API_KEY;

const containerStyle = css`
  max-width: 91rem;
  height: 35.1rem;
  min-height: 35.1rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (max-width: 767px) {
    align-items: start;

  }
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

// eslint-disable-next-line consistent-return
const CustomTooltip = ({ active, payload }) => {
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
  let viewportType = useResponsiveView();
  if (viewportType === 'Desktop') {
    viewportType = 3.2;
  } else if (viewportType === 'Tablet') {
    viewportType = 3.55;
  } else if (viewportType === 'Mobile') {
    viewportType = 3.4;
  } else {
    viewportType = 4;
  }

  const data = useRecoilValue(scenarioDataAtom);
  const [selectedTerm, setSelectedTerm] = useInitialTerm(data);
  const { input, output } = data;
  const { cryptoId } = input;
  const { isSkyrocketed } = output;

  const getChart = async () => {
    const response = await fetch(`https://pro-api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=krw&days=${selectedTerm.term}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-cg-pro-api-key': PRO_API_KEY,
      },
    });
    return response.json();
  };
  const { data: coinPriceList } = useQuery(['chart', cryptoId, selectedTerm.term], getChart, {
    keepPreviousData: true,
  });

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

  const convertCoinNestedArrayToObject = useCallback(coinPriceList?.prices?.map((item) => {
    return {
      date: fomattingTerm(item[0]),
      price: item[1],
      filteredDate: moment(item[0]).format('YYYY년 M월 D일'),
    };
  }), [coinPriceList]);

  // Y축 레이블 포맷 함수
  const formatYAxisLabel = (value) => {
    if (value >= 10000) {
      return `${value / 10000}만`;
    }
    return `${value}원`;
  };

  return (
    <div css={containerStyle}>
      <CategoryButtonChipContainer
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <ResponsiveContainer>
        <AreaChart
          data={convertCoinNestedArrayToObject}
          width={910}
          height={299}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
          className="chart"
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
            // eslint-disable-next-line no-nested-ternary
            dx={viewportType === 'Desktop' ? 40 : viewportType === 'Tablet' ? 40 : 20}
            dy={10}
            axisLine={false}
            tickLine={false}
            // eslint-disable-next-line no-nested-ternary
            tick={viewportType === 'Desktop' ? { fontSize: 14 } : viewportType === 'Tablet' ? { fontSize: 14 } : { fontSize: 10 }}
            interval={(convertCoinNestedArrayToObject?.length / viewportType) >> 0}
            domain={['auto', 'auto']}
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
      </ResponsiveContainer>
    </div>
  );
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};

export default CoinChart;
