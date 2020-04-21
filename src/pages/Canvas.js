import React, { createRef, useEffect, useContext, useCallback } from 'react';
import CanvasContext from '../utils/SetContext';
import CanvasPar from '../utils/CanvasFun';
import '../assets/css/Canvas.module.css';

const Canvas = () => {
  const [option, setOption] = useContext(CanvasContext);
  let canvasArr = [];
  const canvasRef = createRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight * 0.9;
    for (let i = 0; i < option.number; i++) {
      canvasArr.push(new CanvasPar(
        canvas.width,
        canvas.height,
        canvas,
        option,
        setOption));
    };
  }, [canvasRef, canvasArr, option, setOption]);

  useEffect(() => {
    loop();
  });

  //循环动画
  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return
    };
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < canvasArr.length; i++) {
      canvasArr[i].update();
      canvasArr[i].draw();
    }
    window.requestAnimationFrame(loop);
  }, [canvasRef, canvasArr]);

  return (
    <canvas ref={canvasRef}>您的浏览器不支持canvas，请更换浏览器.</canvas>
  );
};

export default Canvas;