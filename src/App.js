/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

import {
  SpeedometerWrapper,
  InternalCircle,
  CurrentSpeedTicks,
  Ticks,
  SpeedDisplayWrapper,
  SpeedNumber,
  SpeedUnits,
} from './components/styles.js';

document.body.style = 'background: black;';

const range = (start, count) => Array.apply(0, Array(count))
  .map((element, index) => index + start);

const App = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds === 220) {
        clearInterval(myInterval);
      }

      if (seconds >= 0 && seconds < 220) {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <SpeedometerWrapper>
        {range(0, 220).map(
          (angle) => <CurrentSpeedTicks angle={`${(angle - 20)}deg`} isPastSpeed={angle <= seconds} />,
        )}
        <InternalCircle>
          {range(-10, 110).map(
            (angle) => <Ticks isMajorTick={angle % 10 === 0} angle={`${angle * 2}deg`} />,
          )}
          <SpeedDisplayWrapper>
            <SpeedNumber>{seconds}</SpeedNumber>
            <SpeedUnits>km/h</SpeedUnits>
          </SpeedDisplayWrapper>
        </InternalCircle>
      </SpeedometerWrapper>
    </div>
  );
};

export default App;
