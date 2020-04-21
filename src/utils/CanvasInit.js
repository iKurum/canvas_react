import { useState } from 'react';

export default function Init() {

  const [option, setOption] = useState({
    color: new Set(['green', '#66ccff', '#ffffff']),
    number: 10,
    radius: 10,
    variantRadius: 10,
    speed: 1,
    variantSpeed: 1,
    w: 0,
    h: 0
  });

  return [option, setOption];
};