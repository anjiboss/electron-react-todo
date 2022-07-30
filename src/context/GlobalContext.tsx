import React from "react";

interface IGlobalContext {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  removeTodo: (removeTodoId: number) => void;
  toggleTodo: (toggleId: number) => void;
}

export const GlobalContext = React.createContext<IGlobalContext>({
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
  todos: [],
});
