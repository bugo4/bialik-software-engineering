import {React, useRef} from 'react'
import Question from './Question'

var setMessageFunc;
let counter = 0;

export default function Mission( {message, setMessage, MESSAGES, ANSWERS, className, setClassName} ) {
    const input = useRef()
    
    setMessageFunc = setMessage;
    function handleInputChanged(){
        if (input.current.value === ANSWERS[counter]){
            if (counter < MESSAGES.length){
                setMessageFunc(MESSAGES[counter])
                counter++;
            }
            else{
                setMessageFunc("מקומכם איתנו!");
                input.current.hidden = true;
                setClassName("App-header")
            }
        } else if (input.current.value === ANSWERS[counter]){
            if (counter < MESSAGES.length){
                setMessageFunc(MESSAGES[counter++])
            }
            else{
                setMessageFunc("ניצחון!");
                input.current.hidden = true;
                setClassName("App-header")
            }
        }
    }
    
    return (
        <div>
            <Question message={message} currentClass={className}/>
            <br/>
            <input ref={input} type="text" placeholder="רשום את תשובתך כאן" onChange={handleInputChanged}/>
        </div>
    )
}
