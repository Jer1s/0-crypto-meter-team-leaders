/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';
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
import localeCurrencyAtom from 'recoils/localeCurrency/localeCurrencyAtom';
import exchangeRateSelector from 'recoils/exchangeRate/exchangeRateSelector';
import CategoryButtonChipContainer from './CategoryButtonChipContainer';

const PRO_API_KEY = import.meta.env.VITE_X_CG_PRO_API_KEY;
const PRO_BASE_URL = import.meta.env.VITE_PRO_BASE_URL;

const termList = [{ text: '전체', term: 'max' }, { text: '1년', term: '365' }, { text: '1개월', term: '30' }, { text: '1주', term: '7' }, { text: '1일', term: '1' }];
const typeList = [{ text: '코인 가격', term: 'prices' }, { text: '시가총액', term: 'market_caps' }, { text: '총 거래량', term: 'total_volumes' }];

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

const chipContainerStyle = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 549px) {
    flex-wrap: wrap;
    div:nth-of-type(1) button {
      margin-bottom: 0
    }
  }
  
`;

const tooltipStyle = css`
  min-width: 10rem;
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
    const { filteredDate, price, localeCurrency } = payload[0].payload;
    let coinSign = '';
    if (localeCurrency === 'KRW') {
      coinSign = '₩';
    } else if (localeCurrency === 'USD') {
      coinSign = '$';
    } else if (localeCurrency === 'JPY') {
      coinSign = '￥';
    } else if (localeCurrency === 'CNY') {
      coinSign = '元';
    } else if (localeCurrency === 'EUR') {
      coinSign = '€';
    }
    return (
      <div css={tooltipStyle}>
        <p>{filteredDate}</p>
        <p>
          {coinSign}
          {parseInt(price.toFixed(0)).toLocaleString()}
        </p>
      </div>
    );
  }
};

const CoinChart = () => {
  let viewportType = useResponsiveView();
  if (viewportType === 'Desktop') {
    viewportType = 3.2;
  } else if (viewportType === 'Tablet') {
    viewportType = 3.2;
  } else if (viewportType === 'Mobile') {
    viewportType = 3.4;
  } else {
    viewportType = 4;
  }
  const localeCurrency = useRecoilValue(localeCurrencyAtom);
  const data = useRecoilValue(scenarioDataAtom);
  const exchangeRate = useRecoilValue(exchangeRateSelector);
  const [selectedTerm, setSelectedTerm] = useInitialTerm(data);
  const [selectedType, setSelectedType] = useState({ text: '코인 가격', term: 'prices' });
  const { input, output } = data;
  const { cryptoId, pastPrice } = input;
  const { price } = output;
  const isSkyrocketed = Number.isNaN(price[localeCurrency] - pastPrice[localeCurrency])
    ? null
    : price[localeCurrency] - pastPrice[localeCurrency] > 0;

  const getChart = async () => {
    const response = await fetch(`${PRO_BASE_URL}/coins/${cryptoId}/market_chart?vs_currency=usd&days=${selectedTerm.term}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-cg-pro-api-key': PRO_API_KEY,
      },
    });
    return response.json();
  };

  const { data: coinPriceList = { prices: [] } } = useQuery(['chart', cryptoId, selectedTerm.term], getChart, {
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

  const type = selectedType.term || 'prices';

  // Y축 레이블 포맷 함수
  const formatYAxisLabel = (value) => {
    if (value >= 1000000000000) {
      return `${value / 1000000000000}조`;
    }
    if (value >= 100000000) {
      return `${value / 100000000}억`;
    }
    if (value >= 10000) {
      return `${value / 10000}만`;
    }
    return `${value}원`;
  };

  const convertCoinNestedArrayToObject = (coinPriceList[type]?.map((item) => {
    return {
      date: fomattingTerm(item[0]),
      price: exchangeRate(item[1], localeCurrency),
      filteredDate: moment(item[0]).format('YYYY년 M월 D일'),
      localeCurrency,
    };
  }));

  return (
    <div css={containerStyle}>
      <div css={chipContainerStyle}>
        <CategoryButtonChipContainer
          selected={selectedType}
          setSelected={setSelectedType}
          list={typeList}
          width="8rem"
        />
        <CategoryButtonChipContainer
          selected={selectedTerm}
          setSelected={setSelectedTerm}
          list={termList}
          width="4.4rem"
        />
      </div>
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
              <stop offset="5%" stopColor={isSkyrocketed === null ? 'var(--gray5)' : isSkyrocketed ? 'var(--chart-green)' : 'var(--primary-red'} stopOpacity={1} />
              <stop offset="95%" stopColor={isSkyrocketed === null ? 'var(--gray5)' : isSkyrocketed ? 'var(--chart-green)' : 'var(--primary-red'} stopOpacity={0} />
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
            stroke={isSkyrocketed === null ? 'var(--gray5)' : isSkyrocketed ? 'var(--chart-green)' : 'var(--primary-red'}
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
