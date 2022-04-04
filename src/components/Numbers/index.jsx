import React from "react";
import PropTypes from 'prop-types'
import Button from "../Button";

const renderButtons = onClickNumber => {
  //<Button text="1" clickHandler={onClickNumber} /> 
};

const Numbers = ({ onClickNumber }) => (
  <div className="numbers">
    {renderButtons(onClickNumber)}
  </div>
);

Number.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers;
