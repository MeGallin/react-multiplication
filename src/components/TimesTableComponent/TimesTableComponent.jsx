import { useState } from 'react';

import './TimesTableComponent.scss';

export const TimesTableComponent = () => {
  const [value, setValue] = useState(null);
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);

  //Note: Array.from({ length: 10 }, (v, i) => i + 1)
  const vertical = Array.from({ length: 12 }, (v, i) => i + 1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const horizontal = Array.from({ length: 16 }, (v, i) => i + 1);

  const board = [];
  for (let i = 0; i < horizontal.length; i++) {
    for (let j = 0; j < vertical.length; j++) {
      board.push(
        <div className={`child`} onMouseOver={(e) => handleValue(e)}>
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

  const isPrime = (value) => {
    for (let i = 2, s = Math.sqrt(value); i <= s; i++)
      if (value % i === 0) return false;
    return value > 1;
  };

  const squareRoot = (number) => {
    for (var i = 0; i * i <= number; i++) {
      if (i * i === number) return i;
    }
  };

  return (
    <div className="times-table__wrapper">
      <div className="parent">
        {board}
        <div
          className={'cursor ' + (isPrime(value) ? 'cursor__prime__hover' : '')}
          style={{
            top: cursorX + 'px',
            left: cursorY + 'px',
          }}
        >
          {value}

          {isPrime(value) ? (
            <div className="cursor__prime">PRIME NUMBER</div>
          ) : null}
          {squareRoot(value) !== undefined ? (
            <div>
              &#8730; {value} = {squareRoot(value)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
