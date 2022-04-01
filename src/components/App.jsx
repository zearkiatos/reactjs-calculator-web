import React from "react";
import Result from "./Result";
import Button from "./Button";
import MathOperations from "./MathOperations";
import Functions from './Functions';
import "../styles/app.css";

const App = () => {
  const addNumber = (text) => {
    console.log(text);
  };

  const onContentClear = () => console.log('Content Clear');

  const onDelete = () => console.log('Delete');

  const onClickOperation = (operation) => console.log(`Operation: ${operation}`);

  const onClickEqual = () => console.log('Equals');
  return (
    <main className="react-calculator">
      <Result />
      <div className="numbers">
        <Button text="1" clickHandler={addNumber} />
        <Button text="2" clickHandler={addNumber} />
        <Button text="3" clickHandler={addNumber} />
        <Button text="4" clickHandler={addNumber} />
        <Button text="5" clickHandler={addNumber} />
        <Button text="6" clickHandler={addNumber} />
        <Button text="7" clickHandler={addNumber} />
        <Button text="8" clickHandler={addNumber} />
        <Button text="9" clickHandler={addNumber} />
        <Button text="0" clickHandler={addNumber} />
      </div>
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
