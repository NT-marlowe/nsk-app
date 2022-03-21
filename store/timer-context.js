import { createContext, useState } from 'react';

const TimerContext = createContext({
  seconds: 0,
  setSeconds: () => {},
  timerIsOn: false,
  setTimerIsOn: () => {},
});

export const TimerContextProvider = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [timerIsOn, setTimerIsOn] = useState(false);

  const context = {
    seconds: seconds,
    setSeconds: setSeconds,
    timerIsOn: timerIsOn,
    setTimerIsOn: setTimerIsOn,
  };

  return (
    <TimerContext.Provider value={context}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
