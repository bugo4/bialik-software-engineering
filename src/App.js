// import logo from './logo.svg';
import Mission from './Mission'
import './App.css';
import {useState, useEffect} from 'react'

const MESSAGES = [
  "כמה ספרות יש בABC",
  "מה התשובה לקיום?",
  "האם אתה מעוניין להיות בהנדסת תוכנה"
]

const ANSWERS = [
  "היי",
  "26",
  "42",
  "כן"
]
function App() {
  const [message, setMessage] = useState("ברוכים הבאים!")
  const [className, setClassName] = useState("")
  useEffect(() => {
      console.log("Hey ONCE")
  }, [])
  useEffect(() => {
    console.log("CHANGED")
  }, [message])
  
  return (
    <div className="App">
      <Mission message={message} setMessage={setMessage} MESSAGES={MESSAGES} ANSWERS={ANSWERS}
       className={className} setClassName={setClassName}/>
    </div>
  );
}

export default App;
