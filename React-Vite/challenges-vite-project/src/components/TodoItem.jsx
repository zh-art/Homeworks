import PropTypes from 'prop-types'; 
 export function TodoItem({ todo, onDelete }) {
    const handleDelete = () => {
        onDelete(todo.id); 
    
    };

    return <li>
    {todo}
    {todo.text}  
    <button onClick={handleDelete}>Eliminar</button></li>;
}

TodoItem.propTypes = {
    todo: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};



