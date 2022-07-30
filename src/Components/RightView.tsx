import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";
import { defaults } from "../config/constants";
import { GlobalContext } from "../context/GlobalContext";

interface RightViewProps {
  children?: React.ReactNode;
}

// Create new Todo Here
const RightView: React.FC<RightViewProps> = ({}) => {
  const [name, setName] = useState("");
  const [borderWidth, setBorderWidth] = useState(1);
  const backgroundColorRef = useRef<HTMLInputElement>(null);
  const borderColorRef = useRef<HTMLInputElement>(null);
  const hoverColorRef = useRef<HTMLInputElement>(null);
  const globalContext = useContext(GlobalContext);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (name !== "") {
      const customStyle: CustomTodoStyle | undefined = {
        background: backgroundColorRef.current?.value || undefined,
        border: borderColorRef.current?.value || undefined,
        hoverColor: hoverColorRef.current?.value || undefined,
        borderWidth,
      };

      globalContext.addTodo(name, customStyle);
      setName("");
    } else {
      toast("At least, Input name", {
        type: "warning",
      });
    }
  };

  return (
    <>
      <div className="right-view">
        <form onSubmit={formHandler}>
          <div className="input-container">
            <h4>Name: </h4>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
          </div>

          <div className="input-container">
            <h4>Background Color: </h4>
            <input
              type="color"
              defaultValue={defaults.DEFAULT_TODO_BG}
              ref={backgroundColorRef}
            />
          </div>
          <div className="input-container">
            <h4>Border Color</h4>
            <input
              type="color"
              defaultValue={defaults.DEFAULT_TODO_BORDER}
              ref={borderColorRef}
            />
          </div>

          <div className="input-container">
            <h4>Border Width: </h4>
            <input
              type="number"
              value={borderWidth}
              onChange={(e) =>
                setBorderWidth(Number(e.currentTarget.value) || 1)
              }
            />
          </div>

          <div className="input-container">
            <h4>Hover Color: </h4>
            <input
              type="color"
              defaultValue={defaults.DEFAULT_TODO_HOVER}
              ref={hoverColorRef}
            />
          </div>
          <div className="btn-container">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RightView;
