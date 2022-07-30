import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface RightViewProps {
  children?: React.ReactNode;
}

// Create new Todo Here
const RightView: React.FC<RightViewProps> = ({}) => {
  const [name, setName] = useState("");
  const globalContext = useContext(GlobalContext);
  // Add custom style for Todo later

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    globalContext.addTodo(name);
    setName("");
  };

  return (
    <>
      <div className="right-view">
        <form onSubmit={formHandler}>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};
export default RightView;
