import { useState } from "react";

function CounterApp() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message"); // [state, function setState]

  const handleClickThai = () => {
    setGreetingMessage("สวัสดี!");
  };

  const handleClickEnglish = () => {
    setGreetingMessage("Hi!");
  };

  const handleClickChinese = () => {
    setGreetingMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={handleClickThai}>สวัสดี!</button>
        <button onClick={handleClickEnglish}>Hi!</button>
        <button onClick={handleClickChinese}>你好!</button>
      </div>
    </div>
  );
}

export default CounterApp;
