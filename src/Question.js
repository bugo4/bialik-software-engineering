import React from 'react'

export default function Question({message, currentClass, hint}) {
    function handleOnClickHint(){
        alert(hint);
    }
    return (
    <>
        <div className={currentClass}>
            {message}
        </div>
        <button className="hint" onClick={handleOnClickHint}>
            רמז
            <br/>
        </button>
    </>
    );
}
