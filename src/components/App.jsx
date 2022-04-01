import React from "react";
import Result from "./Result";
import Numbers from "./Numbers";
import MathOperations from "./MathOperations";
import Functions from './Functions';
import "../styles/app.css";

const App = () => {
  const onClickNumber = (number) => {
    console.log(`Number: ${number}`);
  };

  const onContentClear = () => console.log('Content Clear');

  const onDelete = () => console.log('Delete');

  const onClickOperation = (operation) => console.log(`Operation: ${operation}`);

  const onClickEqual = () => console.log('Equals');
  return (
    <main className="react-calculator">
      <Result />
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
