import React, { useState, createRef, useEffect, useContext, useCallback } from 'react';
import CanvasContext from '../utils/SetContext';
import { CanvasPar, linePoint } from '../utils/CanvasFun';
import css from '../assets/css/Canvas.module.css';

const Canvas = () => {
  const [bg, setBg] = useState(false);
  const [option, setOption] = useContext(CanvasContext);
  let canvasArr = [];
  const canvasRef = createRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = option.w;
    canvas.height = option.h;
    for (let i = 0; i < option.number; i++) {
      canvasArr.push(new CanvasPar(canvas, option));
    };
  }, [canvasRef, canvasArr, option]);

  useEffect(() => {
    loop();
    window.addEventListener('resize', () => {
      winResize()
    }, false)
  });

  //监听窗口大小
  function winResize() {
    const canvas = canvasRef.current;
    if (!canvas) {
      return
    };
    let t;
    clearTimeout(t);
    t = setTimeout(() => {
      setOption({
        ...option,
        w: window.innerWidth - 202,
        h: window.innerHeight - 2
      });
    }, 200);
  }

  //循环动画
  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return
    };
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 动画循环
    for (let i = 0; i < canvasArr.length; i++) {
      switch (option.animat) {
        case '无序':
          canvasArr[i].update();
          break;
        default:
          break;
      };
      canvasArr[i].draw();
    }
    // 连线循环
    for (let i = 0; i < canvasArr.length; i++) {
      linePoint(canvasArr[i], canvasArr, option, ctx)
    }
    // 动画
    window.requestAnimationFrame(loop);
  }, [canvasRef, canvasArr, option]);

  return (
    <>
      <div className={css.switchBtn}>
        <input
          type="checkbox"
          className={css.hiddenCheckbox}
          name=""
          value=""
          onChange={e => {
            setBg(e.target.checked);
          }}
        />
        <span className={css.switchArea}></span>
        <span className={css.switchToggle}></span>
      </div>
      <canvas
        ref={canvasRef}
        style={{ backgroundColor: bg ? '#fafafa' : '#282c34' }}
      >
        您的浏览器不支持canvas，请更换浏览器.
    </canvas>
    </>
  );
};

export default Canvas;