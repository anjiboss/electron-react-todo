import { useState } from "react";
import "style/App.css";
import "react-toastify/dist/ReactToastify.min.css";
import LeftView from "./Components/LeftView";
import RightView from "./Components/RightView";
import TodoApp from "./Components/Todo";
import { GlobalContext } from "./context/GlobalContext";
import { useTodo } from "./hook/useTodo";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 0,
      name: "test",
      addedAt: new Date(),
      isDone: false,
    },
    {
      id: 1,
      name: "number 2",
      addedAt: new Date(),
      isDone: true,
    },
    {
      id: 2,
      name: "number 3",
      addedAt: new Date(),
      isDone: true,
    },
  ]);
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
      <ToastContainer />
      <div className="App">
        <LeftView>
          <TodoApp todos={todos} />
        </LeftView>
        <RightView />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
