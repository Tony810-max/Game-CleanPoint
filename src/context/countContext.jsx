import React from "react";

export const CountContext = React.createContext({
  count: 0,
  setCountPoints: () => {},
});

export const CountProvider = ({ children }) => {
  const [isCheck, setIsCheck] = React.useState([]);
  const [nextNumber, setNextNumber] = React.useState(1);
  const [countPoints, setCountPoints] = React.useState([]);
  const [positions, setPositions] = React.useState([]);

  const context = {
    countPoints,
    setCountPoints,
    isCheck,
    setIsCheck,
    nextNumber,
    setNextNumber,
    positions,
    setPositions,
  };
  return (
    <CountContext.Provider value={context}>{children}</CountContext.Provider>
  );
};
