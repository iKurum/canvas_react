import React, { useContext } from 'react';
import { CanvasContext } from '../utils/SetContext';
import Animat from './nav/Animat';
import Text from './nav/Text';
import css from '../assets/css/Header.module.css';

function Header() {
  const [option, setOption] = useContext(CanvasContext);

  function navList() {
    switch (option.nav) {
      case 'animat':
        return <Animat />;
      case 'text':
        return <Text />;
      default:
        return
    }
  }

  return (
    <header>
      <p className={css.title}>Canvas</p>
      <div>
        <span className={css.navList}>类型：</span>
        <select
          onChange={e => {
            setOption({
              ...option,
              nav: e.target.value
            });
          }}
        >
          <option value="text">Text</option>
          <option value="animat">Animat</option>
        </select>
      </div>
      <nav>
        <div>{navList()}</div>
      </nav>
    </header>
  );
};

export default Header;