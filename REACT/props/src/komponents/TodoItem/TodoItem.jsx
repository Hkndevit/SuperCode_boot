import "./TodoItem.css"

// ARRAY MIT PROPS EMPFANGEN IN DIVS GEPACKT UND MIT RETURN MIT ABGERUFEN
const TodoItem = (props) => {
    return (
        <div>
        <li>{props.todo}</li>
        </div>
    );
};

export default TodoItem;