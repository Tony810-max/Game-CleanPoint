import React from "react";
import { CountContext } from "../../context/countContext";
import classNames from "classnames";

const AppearNumber = () => {
  const { countPoints, isCheck, setIsCheck, setNextNumber, nextNumber } =
    React.useContext(CountContext);

  return (
    <div className="relative w-full h-screen">
      {countPoints?.length > 0 &&
        countPoints.map((number) => (
          <p
            className={classNames(
              "absolute w-10 h-10 border rounded-full flex items-center justify-center hover:opacity-70 hover:cursor-pointer",
              {
                hidden: isCheck.includes(number),
                "pointer-events-none opacity-50": number !== nextNumber,
              }
            )}
            key={number}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
            onClick={() => {
              setIsCheck((prev) => [...prev, number]);
              setNextNumber((prev) => prev + 1);
            }}
          >
            {number}
          </p>
        ))}
    </div>
  );
};

export default AppearNumber;
