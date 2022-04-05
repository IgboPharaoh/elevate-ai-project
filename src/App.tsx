import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ResultList from "./components/ResultList";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  console.log(input);

  const handleSubmit=()=>{
    
  }

  return (
    <div className="App">
      <img
        src="https://get-elevate.com/wp-content/uploads/2022/03/elevate-logo-full-color-black-min.png"
        alt="elevate-logo"
        className="app__logo"
      />
      <InputField input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <ResultList />
    </div>
  );
};

export default App;
