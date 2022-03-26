import React, { Fragment } from "react";
import Button from "../Button";

const MathOperations = ({ onClickOperation, onClickEqual }) => {
  return (
    <Fragment>
      <Button text="➕" clickHandler={onClickOperation}/>
      <Button text="➖" clickHandler={onClickOperation}/>
      <Button text="✖️" clickHandler={onClickOperation}/>
      <Button text="➗" clickHandler={onClickOperation}/>
      <Button text="=" clickHandler={onClickEqual}/>
    </Fragment>
  );
};

export default MathOperations;
