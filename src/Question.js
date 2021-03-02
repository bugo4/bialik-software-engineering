import React from 'react'

export default function Question({message, currentClass}) {
    return (
    <div className={currentClass}>
        {message}
    </div>
    );
}
