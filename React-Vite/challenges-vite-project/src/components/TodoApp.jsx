import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
export function TodoApp() {
    const [todos, setTodos] = React.useState([]);

    const handleNewTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm onNewTodo={handleNewTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;
