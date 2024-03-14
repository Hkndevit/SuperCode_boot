import "./TodoList.css"
import TodoItem from "../TodoItem/TodoItem"


// WIR RUFEN IN DIESER FUNKTION UNSERE ARRAY AUF UND ÜBERTRAGEN DIESE IN UNSERE TODOITEM
const TodoList = () => {

    // ARRAY ABRUFEN
    const articleArray = [
       "Buy Grocerys", "Send Email", "Finish Assigment", "Write Blog", "Back Cake"
    ];
    // ARRAY RETURNEN UND IN TODOITEM ÜBERGEBEN
    return (
        <section>
            <h1>My Todos</h1>
            <div>
                {articleArray.map((item, index) => (
                       <TodoItem 
                       todo={item}
                       key={index} />
                ))}
            </div>
        </section>
    );
};

export default TodoList;