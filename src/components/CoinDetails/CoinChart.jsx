import React from 'react';
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

import bitcoin from './bitcoin';

const CoinChart = () => {
  const temp = bitcoin.map((item, index) => {
    return {
      name: moment(item[0]).format('yyyy년 MM월'),
      price: item[1],
    };
  });

  const abc = Math.ceil(temp.length / 4);

  // Y축 레이블 포맷 함수
  const formatYAxisLabel = (value) => {
    return `${value / 100000}원`;
  };

  return (
    <ResponsiveContainer width={910} height={299}>
      <AreaChart data={temp}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#B9E7D0" stopOpacity={1} />
            <stop offset="95%" stopColor="#B9E7D0" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal vertical={false} />
        <XAxis dataKey="name" interval={abc} />
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
  );
};

export default CoinChart;
