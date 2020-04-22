import { useState } from 'react';

export default function Init() {

  const [option, setOption] = useState({
    color: new Set(['#008000', '#66ccff']),
    number: 20,
    radius: 1,
    variantRadius: 10,
    speed: 1,
    variantSpeed: 1,
    lineColor: '#ffffff',
    lineWidth: 1,
    minDistance: 200,
    animat: '无序',
    w: window.innerWidth - 202,
    h: window.innerHeight - 2
  });

  return [option, setOption];
};