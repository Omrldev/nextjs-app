'use client'

import { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const handlerIncrement = () => {
    setCounter(prevCount => prevCount + 1);
  }

  const handlerDecrement = () => {
    setCounter(prevCount => prevCount - 1);
  }


  <div>
    <div className="">
      <button onClick={handlerDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handlerIncrement}>+</button>
    </div>
  </div>;
};

export default Home
