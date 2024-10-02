import React from "react";
import { CountContext } from "../../context/countContext";
import classNames from "classnames";

const ContentGame = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { countPoints, setCountPoints, setIsCheck, setNextNumber, isCheck } =
    React.useContext(CountContext);
  const handleRestartTime = () => {
    setTime(0);
    setIsCheck([]);
    const array = Array.from({ length: Number(value) }, (_, i) => i + 1);
    setCountPoints(array);
    setNextNumber(1);
    setIsRunning(true);
  };

  React.useEffect(() => {
    if (isCheck.length === countPoints.length && countPoints.length > 0) {
      setIsRunning(false);
    }
  }, [isCheck, countPoints]);

  React.useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else if (!isRunning) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <form className="w-full space-y-2">
      <div className="grid grid-cols-5">
        <label>Points: </label>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="border px-1"
          placeholder="Enter points"
        />
      </div>
      <div className="grid grid-cols-5">
        <span className="font-sans text-base">Time:</span>
        <span
          className={classNames("font-sans text-lg", {
            "text-green-600":
              isCheck.length === countPoints.length && countPoints.length > 0,
          })}
        >
          {time.toFixed(2)}
        </span>
      </div>
      <button
        type="button"
        onClick={handleRestartTime}
        className="border px-5 py-2 bg-red-500 text-white font-sans rounded-md hover:opacity-85"
      >
        Restart
      </button>
    </form>
  );
};

export default ContentGame;
