import React, { useContext } from 'react';
import { CanvasContext } from '../../utils/SetContext';
import css from '../../assets/css/Nav.module.css';

function Text() {
  const [option, setOption] = useContext(CanvasContext);

  return (
    <>
      <p>text :
          <label>
          <input
            type="text"
            className={css.text}
            defaultValue={option.text.text}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  text: e.target.value
                }
              });
            }} />
        </label>
      </p>
      <p>size :
          <label>
          <input
            type="range"
            min="50"
            max="300"
            className={css.num_range}
            defaultValue={option.text.size}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  size: parseInt(e.target.value)
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
      <p>grid :
          <label className={css.label_flex}>
          <span>x ：</span>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue={option.text.grid.x}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  grid: {
                    ...option.text.grid,
                    x: parseInt(e.target.value)
                  }
                }
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>y ：</span>
          <input
            type="range"
            min="1"
            max="10"
            defaultValue={option.text.grid.y}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  grid: {
                    ...option.text.grid,
                    y: parseInt(e.target.value)
                  }
                }
              });
            }} />
        </label>
      </p>
      <p>shadow :
        <label className={css.label_flex}>
          <span>blur：</span>
          <input
            type="range"
            min="0"
            max="10"
            defaultValue={option.text.shadow.blur}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  shadow: {
                    ...option.text.shadow,
                    blur: e.target.value
                  }
                }
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>x &ensp;&ensp;：</span>
          <input
            type="range"
            min="-100"
            max="100"
            defaultValue={option.text.shadow.offsetX}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  shadow: {
                    ...option.text.shadow,
                    offsetX: e.target.value
                  }
                }
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>y &ensp;&ensp;：</span>
          <input
            type="range"
            min="-100"
            max="100"
            defaultValue={option.text.shadow.offsetY}
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  shadow: {
                    ...option.text.shadow,
                    offsetY: e.target.value
                  }
                }
              });
            }} />
        </label>
        <label className={css.label_flex}>
          <span>颜色：</span>
          <input
            type="color"
            onChange={e => {
              setOption({
                ...option,
                text: {
                  ...option.text,
                  shadow: {
                    ...option.text.shadow,
                    color: e.target.value
                  }
                }
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

export default Text;