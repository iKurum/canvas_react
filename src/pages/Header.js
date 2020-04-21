import React, { useContext } from 'react';
import CanvasContext from '../utils/SetContext';
import css from '../assets/css/Header.module.css';

function Header() {
  const [option, setOption] = useContext(CanvasContext);

  return (
    <header>
      <p className={css.title}>Canvas</p>
      <div>
        <p>
          <label>number :
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={option.number}
              onChange={e => {
                setOption({
                  ...option,
                  number: parseInt(e.target.value)
                });
              }} />
          </label>
        </p>
        <p>
          <label>radius :
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
        </p>
        <p>
          <label>color :
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
      </div>
    </header>
  );
};

export default Header;