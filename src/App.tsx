import { useState } from "react";
import "style/App.css";
import { GlobalContext } from "./context/GlobalContext";
import { useTodo } from "./hook/useTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { addTodo, removeTodo, toggleTodo } = useTodo(setTodos);

  return (
    <GlobalContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
      }}
    >
      <div className="App">
        <h1>Hello world</h1>
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
