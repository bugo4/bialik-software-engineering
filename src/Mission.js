import {React, useRef} from 'react'
import Question from './Question'

var setMessageFunc;
var counter = 0;

export default function Mission( {message, setMessage, MESSAGES, ANSWERS, className, setClassName, 
    HINTS} ) {
    const input = useRef();
    
    setMessageFunc = setMessage;
    function handleInputChanged(){
        if (input.current.value === ANSWERS[counter]){
            if (counter < MESSAGES.length){
                setMessageFunc(MESSAGES[counter])
                new Audio("./successSound.mp3").play();
                input.current.value = "";
                input.current.placeholder = "רשמו את התשובה כאן";
            }
            else {
                setClassName("normal fadeOutClass")
                // input.current.className = "fadeOutClass";
                setTimeout(() => { 
                    setMessageFunc('מקומכם איתנו');
                    setClassName("App-header fadeInClass")
                    input.current.hidden = true;
                }, 1000);                
            }
            counter++;
        }
    }
    
    return (
        <div>
            <Question message={message} currentClass={className} hint={HINTS[counter]}/>
            <input ref={input} type="text" placeholder="רשמו היי כדי להתחיל" onChange={handleInputChanged}/>
        </div>
    )
}
