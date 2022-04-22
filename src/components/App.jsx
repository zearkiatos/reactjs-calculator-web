/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from 'lodash.words';
import Result from "./Result";
import Numbers from "./Numbers";
import MathOperations from "./MathOperations";
import Functions from "./Functions";
import "../styles/app.css";

const App = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g);
  console.log(items);
  const onClickNumber = (number) => setStack(`${stack}${number}`);

  const onContentClear = () => setStack("");

  const onDelete = () => {
    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1);
      setStack(newStack);
    }
  };

  const operationResolver = {
    "➕": "+",
    "➖": "-",
    "✖️": "*",
    "➗": "/",
  };

  const onClickOperation = (operation) => setStack(`${stack}${operationResolver[operation]}`);

  const onClickEqual = () => setStack(eval(stack).toString());
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
