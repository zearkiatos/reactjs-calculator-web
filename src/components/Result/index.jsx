import React from 'react';

const Result = ({ value }) => {
    console.log("Renderization result");
    console.log(value);
    return (
        <div className="result">
            <span>0</span>
        </div>
    );
}

export default Result;