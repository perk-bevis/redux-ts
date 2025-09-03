import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../slices/todoSlice";

type Props = {};

const TodoList = (props: Props) => {
    const todos = useSelector((state: any) => state.todos.todos);
    const [todoName,setTodoName] = useState("")
    // dispatch action để lưu todo vô store khi đó sẽ lưu 1 công việc
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        if(!todoName) return
        dispatch(addTodo(todoName))
        setTodoName('')
    }
    return (
        <div>
            <h3>My todos: {todos.length}</h3>
            {todos.length === 0 ? (
                <p>No Todos</p>
            ) : (
                <>
                    <ul>
                        {todos.map((todo: any ,index) => (
                            <li key={index}>{todo.text}</li>
                        ))}
                    </ul>
                </>
            )}

            <div>
                <input type="text"
                name=""
                id="" 
                onChange={(e) => setTodoName(e.target.value)}
                value={todoName}
                />
                <button onClick={handleAddTodo}>add todo</button>
            </div>
        </div>
    );

}

export default TodoList