import PropTypes from 'prop-types'; 
import React from 'react';
 export function TodoForm({ onNewTodo }) {
    const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            onNewTodo(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

TodoForm.propTypes = {
    onNewTodo: PropTypes.func.isRequired
};