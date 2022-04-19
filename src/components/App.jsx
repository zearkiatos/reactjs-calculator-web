import React, { useState } from "react";
import Result from "./Result";
import Numbers from "./Numbers";
import MathOperations from "./MathOperations";
import Functions from "./Functions";
import "../styles/app.css";

const App = () => {
  const [stack, setStack] = useState("");
  const onClickNumber = (number) => setStack(`${stack}${number}`);

  const onContentClear = () => setStack("");

  const onDelete = () => {
    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1);
      setStack(newStack);
    }
  };

  const onClickOperation = (operation) => setStack(`${stack}${operation}`);

  const onClickEqual = () => setStack(`${stack}=`);
  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers onClickNumber={onClickNumber} />
      <Functions onDelete={onDelete} onContentClear={onContentClear} />
      <MathOperations
        onClickOperation={onClickOperation}
        onClickEqual={onClickEqual}
      />
    </main>
  );
};
export default App;
