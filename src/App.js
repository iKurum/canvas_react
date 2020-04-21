import React from 'react';
import Canvas from './pages/Canvas';
import Header from './pages/Header';
import CanvasContext from './utils/SetContext';
import css from './assets/css/App.module.css';
import Init from './utils/CanvasInit';

function App() {
  const [option, setOption] = Init();
  return (
    <div className={css.App}>
      <CanvasContext.Provider value={[option, setOption]}>
        <Header />
        <Canvas />
      </CanvasContext.Provider>
    </div>
  );
}

export default App;
