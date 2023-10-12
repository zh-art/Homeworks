import PropTypes from 'prop-types'; 
import { TodoItem } from './TodoItem';
export function TodoList({ todos }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired
};