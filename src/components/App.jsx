import React, { useState } from "react";
import Result from "./Result";
import Numbers from "./Numbers";
import MathOperations from "./MathOperations";
import Functions from './Functions';
import "../styles/app.css";

const App = () => {
  const [stack, setStack] = useState("");
  const onClickNumber = (number) => setStack(number);

  const onContentClear = () => console.log('Content Clear');

  const onDelete = () => console.log('Delete');

  const onClickOperation = (operation) => console.log(`Operation: ${operation}`);

  const onClickEqual = () => console.log('Equals');
  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers
        onClickNumber={onClickNumber}
      />
      <Functions
        onDelete={onDelete}
        onContentClear={onContentClear}
      />
      <MathOperations
        onClickOperation={onClickOperation}
        onClickEqual={onClickEqual}
      />
    </main>
  );
};
export default App;
