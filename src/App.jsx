import "./App.css";
import { useState } from "react";
function App() {
let [inputText,clickText] = useState('')
let toggle =(event)=>{
  clickText(event)
}
  return (
    <div className="App">
      <div className="greeting-container">{inputText}</div>
      <div className="buttons">
        <button onClick={()=>toggle('สวัสดี!')}>สวัสดี!</button>
        <button onClick={()=>toggle('Hi!')}>Hi!</button>
        <button onClick={()=>toggle('你好!')}>你好!</button>
      </div>
    </div>
  );
}

export default App;
