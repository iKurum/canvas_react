import React, { useContext } from 'react';
import { CanvasContext } from '../../utils/SetContext';
import css from '../../assets/css/Nav.module.css';

function Animat() {
  const [option, setOption] = useContext(CanvasContext);

  return (
    <>
      <p>animat :
          <label className={css.label_animat}>
          <input
            type="radio"
            name="animat"
            value="无序"
            onChange={e => {
              setOption({
                ...option,
                animation: {
                  ...option.animation,
                  animat: e.target.value
                }
              });
            }} />
              无序
          </label>
        <label className={css.label_animat}>
          <input
            name="animat"
            type="radio"
            value="定格"
            onChange={e => {
              setOption({
                ...option,
                animation: {
                  ...option.animation,
                  animat: e.target.value
                }
              });
            }} />
              定格
          </label>
      </p>
      <p>num :
          <label>
          <input
            type="range"
            min="1"
            max="100"
            className={css.num_range}
            defaultValue={option.animation.number}
            onChange={e => {
              setOption({
                ...option,
                animation: {
                  ...option.animation,
                  number: parseInt(e.target.value)
                }
              });
            }} />
        </label>
      </p>
      <p>radius :
          <label className={css.label_flex}>
          <span>半径：</span>
          <input
            type="range"
            min="1"
            max="100"
            defaultValue={option.radius}
            onChange={e => {
              setOption({
                ...option,
                radius: parseInt(e.target.value)
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>幅度：</span>
          <input
            type="range"
            min="0"
            max="20"
            defaultValue={option.variantRadius}
            onChange={e => {
              setOption({
                ...option,
                variantRadius: parseInt(e.target.value)
              });
            }} />
        </label>
      </p>
      {
        option.animation.animat === '定格'
          ?
          ''
          :
          <p>speed :
            <label className={css.label_flex}>
              <span>速度：</span>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue={option.animation.speed}
                onChange={e => {
                  setOption({
                    ...option,
                    animation: {
                      ...option.animation,
                      speed: parseInt(e.target.value)
                    }
                  });
                }} />
            </label>
            <label className={css.label_flex}>
              <span>幅度：</span>
              <input
                type="range"
                min="0"
                max="10"
                defaultValue={option.animation.variantSpeed}
                onChange={e => {
                  setOption({
                    ...option,
                    animation: {
                      ...option.animation,
                      variantSpeed: parseInt(e.target.value)
                    }
                  });
                }} />
            </label>
          </p>
      }
      <p>line :
          <label className={css.label_flex}>
          <span>粗细：</span>
          <input
            type="range"
            min="0"
            max="5"
            defaultValue={option.animation.lineWidth}
            onChange={e => {
              setOption({
                ...option,
                animation: {
                  ...option.animation,
                  lineWidth: parseInt(e.target.value)
                }
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>距离：</span>
          <input
            type="range"
            min="0"
            max="500"
            step="100"
            defaultValue={option.animation.minDistance}
            onChange={e => {
              setOption({
                ...option,
                animation: {
                  ...option.animation,
                  minDistance: parseInt(e.target.value)
                }
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>颜色：</span>
          <input
            type="color"
            defaultValue="#ffffff"
            onChange={e => {
              setOption({
                ...option,
                lineColor: e.target.value
              });
            }} />
        </label>
      </p>
      <p>color :
            <label className={css.label_flex}>
          <span>增加：</span>
          <input
            type="color"
            onChange={e => {
              setOption({
                ...option,
                color: option.color.add(e.target.value)
              });
            }} />
        </label>
        {
          Array.from(option.color).map((v, i) => {
            return (
              <span
                key={i}
                className={css.colorBox}
                style={{ backgroundColor: v }}
                onClick={() => {
                  option.color.delete(v);
                  setOption({
                    ...option,
                    color: option.color
                  });
                }}
              >
              </span>
            )
          })
        }
      </p>
    </>
  );
};

export default Animat;