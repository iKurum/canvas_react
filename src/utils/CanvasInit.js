import { useState } from 'react';

export default function Init() {

  const [option, setOption] = useState({
    nav: 'text',
    w: window.innerWidth - 202,
    h: window.innerHeight - 2,
    color: new Set(['#008000', '#66ccff']),
    radius: 1,
    variantRadius: 10,
    animation: {
      number: 20,
      speed: 1,
      variantSpeed: 1,
      lineColor: '#ffffff',
      lineWidth: 1,
      minDistance: 200,
      animat: '无序',
    },
    text: {
      text: 'Hello Canvas',
      isParticle: true,
      x: (window.innerWidth - 202) / 2,
      y: (window.innerHeight - 2) / 2,
      grid: {
        x: 10,
        y: 10
      },
      size: 100,
      placement: []
    }
  });

  return [option, setOption];
};