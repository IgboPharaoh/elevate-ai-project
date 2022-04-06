import React, { useState } from "react";
import "./App.css";
import Requests from "./components/APIs/requests";
import { dataObject } from "./components/APIs/samp";
import InputField from "./components/InputField";
import ResultList from "./components/ResultList";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  // const { data } = Requests({ input });
  console.log(input);
  // console.log(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://get-elevate.com/wp-content/uploads/2022/03/elevate-logo-full-color-black-min.png"
        alt="elevate-logo"
        className="app__logo"
      />
      <InputField
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      {dataObject?.data
        .map((data) => (
          <ResultList
          title={data?.title}
          img={data?.images?.original?.url}
          key={data?.id}
          />
          ))
          .slice(0, 50)}
    </div>
  );
};

export default App;
