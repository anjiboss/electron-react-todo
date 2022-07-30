import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface TodoProps {
  children?: React.ReactNode;
  todos: ITodo[];
}

const TodoApp: React.FC<TodoProps> = ({ todos }) => {
  const globalContext = useContext(GlobalContext);

  return (
    <>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <span>{todo.name}</span>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => {
                globalContext.toggleTodo(todo.id);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default TodoApp;
