import "./App.css";
import { useState } from "react";

function App() {
  const [greetingText, setGreeting] = useState("Greeting Message");

  const sayHiFromThai = () => {
    setGreeting("สวัสดี!");
  };

  const sayHiFromEng = () => {
    setGreeting("Hi!");
  };

  const sayHiFromChai = () => {
    setGreeting("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="buttons">
        <button onClick={sayHiFromThai}>สวัสดี!</button>
        <button onClick={sayHiFromEng}>Hi!</button>
        <button onClick={sayHiFromChai}>你好!</button>
      </div>
    </div>
  );
}

export default App;
