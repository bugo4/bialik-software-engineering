// import logo from './logo.svg';
import Mission from './Mission'
import './App.css';
import {useState, useEffect} from 'react'

const MESSAGES = [
  "כמה אותיות באלפבית האנגלי",
  "2 בבינארי",
  "האם אתם סקרנים🤠",
  "האם אתם רוצים להצליח😎"
]

const ANSWERS = [
  "היי",
  "26",
  "10",
  "כן",
  "כן"
]

const HINTS = [
  "קראו את ההוראות בתחתית הדף",
  "חפשו בגוגל\n (התשובה היא מספר)",
  "0 = 00\n1 = 01\n2 = ??\n3 = 11\n(התשובה היא מספר)",
  "אתם יודעים את התשובה🙃\n (כן או לא)",
  "אתם יודעים את התשובה🙃\n (כן או לא)",
  "מהרו להירשם❗"
]
function App() {
  const [message, setMessage] = useState("!ברוכים הבאים")
  const [className, setClassName] = useState("normal fadeInClass")
  useEffect(() => {
      console.log("Hey ONCE")
  }, [])
  useEffect(() => {
    console.log("CHANGED")
  }, [message])
  
  return (
    <div className="App">
      <Mission message={message} setMessage={setMessage} MESSAGES={MESSAGES} ANSWERS={ANSWERS}
       className={className} setClassName={setClassName} HINTS={HINTS}/>
    </div>
  );
}

export default App;
