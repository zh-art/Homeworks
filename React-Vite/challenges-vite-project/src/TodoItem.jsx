import PropTypes from 'prop-types'; 
 export function TodoItem({ todo }) {
    return <li>{todo}</li>;
}

TodoItem.propTypes = {
    todo: PropTypes.string.isRequired
};
