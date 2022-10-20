import React from "react";
import { useSelector } from "react-redux";

function App() {
  const mystate = useSelector((state) => state.changeNumber);
  return (
    <>
      <div className="quantity">
        <span>{mystate}</span>
      </div>
    </>
  );
}

export default App;
