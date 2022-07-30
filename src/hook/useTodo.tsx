import React from "react";

interface Props {}

export const useTodo = (
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  const addTodo = (newTodo: Todo) => {
    setTodo((prev) => [...prev, newTodo]);
  };

  const removeTodo = (removeTodoId: number) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== removeTodoId));
  };

  const toggleTodo = (toggleId: number) => {
    setTodo((prev) =>
      prev.map((todo) => {
        if (todo.id == toggleId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  return {
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
