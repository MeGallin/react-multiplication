import { useState } from 'react';

import './TimesTableComponent.scss';

export const TimesTableComponent = () => {
  const [value, setValue] = useState(null);
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);

  //Note: Array.from({ length: 10 }, (v, i) => i + 1)
  const vertical = Array.from({ length: 12 }, (v, i) => i + 1);
  const horizontal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let board = [];
  for (let i = 0; i < horizontal.length; i++) {
    for (let j = 0; j < vertical.length; j++) {
      board.push(
        <div className="child" onMouseOver={(e) => handleValue(e)}>
          {horizontal[i] * vertical[j]}
        </div>,
      );
    }
  }

  const handleValue = (e) => {
    setValue(Number(e.target.innerHTML));
    setCursorX(e.clientY);
    setCursorY(e.clientX);
  };

  return (
    <div className="times-table__wrapper">
      <div className="parent">
        {board}
        <div
          className="cursor"
          style={{
            top: cursorX + 'px',
            left: cursorY + 'px',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};
