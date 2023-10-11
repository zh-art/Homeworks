import { useState } from "react";

const tittle = "DS3";

// eslint-disable-next-line react/prop-types
const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubsstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div>
        <h1>{tittle}</h1>
        <h1> Counter </h1>
        <span> 10 </span>
      </div>
      <div>
        <span>
          <b>Este es el counter de los useState: {counter} </b>
        </span>
      </div>
      <div>
        <button onClick={() => handleAdd()}> +1 </button>
        <button onClick={() => handleSubsstract()}> -1 </button>
        <button onClick={() => handleReset()}> Reset </button>
      </div>
    </>
  );
};

export default FirstApp;
