import { useState } from "react"

// eslint-disable-next-line react/prop-types
const FirstApp = ({ value }) => {
    
    const [counter, setCounter] = useState(value)
    
    const handleAdd = () => {
        setCounter ( counter + 1 );
    }

    const handleSubsstract = () => {
        setCounter ( counter - 1 );
    }

    const handleReset = () => {
        setCounter(0);
    }

    return (
        <>
        <h1> Counter </h1>
        <span> { counter } </span>
        <button onClick={ () => handleAdd() }> +1 </button>
        <button onClick={ () => handleSubsstract() }> -1 </button>
        <button onClick={ () => handleReset() }> Reset </button>
        </>
    )

}

export default FirstApp;