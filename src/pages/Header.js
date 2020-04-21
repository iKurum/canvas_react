import React, { useContext } from 'react';
import CanvasContext from '../utils/SetContext';

function Header() {
  const [option, setOption] = useContext(CanvasContext);

  return (
    <header>
      <p>
        Canvas
        </p>
      <p>
        <label>number:
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
        <label>radius:
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
    </header>
  );
};

export default Header;