import React, { CSSProperties, useContext, useState } from "react";
import { defaults } from "../config/constants";
import { GlobalContext } from "../context/GlobalContext";

interface TodoProps {
  children?: React.ReactNode;
  todos: ITodo[];
}

const TodoApp: React.FC<TodoProps> = ({ todos }) => {
  return (
    <>
      <div className="todo-list">
        {todos.map((todo) => {
          return <SingleTodo key={todo.id} todo={todo} />;
        })}
      </div>
    </>
  );
};
export default TodoApp;

const SingleTodo: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const globalContext = useContext(GlobalContext);
  const [background, setBackground] = useState(
    todo.customStyle?.background || defaults.DEFAULT_TODO_BG
  );

  const mouseOverHandler = (color: string) => {
    setBackground(color);
  };

  const mouseLeaveHandler = () => {
    setBackground(todo.customStyle?.background || defaults.DEFAULT_TODO_BG);
  };

  return (
    <div
      className="todo"
      style={{
        background,
        border: todo.customStyle?.border || defaults.DEFAULT_TODO_BORDER,
      }}
      onMouseOver={
        todo.customStyle?.hoverColor
          ? () => mouseOverHandler(todo.customStyle!.hoverColor!)
          : undefined
      }
      onMouseLeave={
        todo.customStyle?.hoverColor ? () => mouseLeaveHandler() : undefined
      }
    >
      <span>{todo.name}</span>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          globalContext.toggleTodo(todo.id);
        }}
      />
    </div>
  );
};
