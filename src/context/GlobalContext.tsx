import React from "react";

interface IGlobalContext {
  todos: ITodo[];
  addTodo: (name: string, customStyle?: undefined) => void;
  removeTodo: (removeTodoId: number) => void;
  toggleTodo: (toggleId: number) => void;
}

export const GlobalContext = React.createContext<IGlobalContext>({
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
  todos: [],
});
