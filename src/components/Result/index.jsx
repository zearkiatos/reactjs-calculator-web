import React from 'react';

const Result = ({ value, text }) => {
    console.log("Renderization result");
    console.log(value);
    console.log(text);
    return (
        <div className="result">
            <span>0</span>
        </div>
    );
}

export default Result;