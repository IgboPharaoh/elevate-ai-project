import React, { useState } from "react";
import "./App.css";
import Requests from "./components/APIs/requests";
import InputField from "./components/InputField";
import ResultList from "./components/ResultList";
import giphyLogo from "./giphy-logo.gif";
import InfiniteScroll from "react-infinite-scroll-component";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const { dataObj, fetchDataOdataObj } = Requests({ input });
  console.log(dataObj);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  const fetchMoreData = () => {
    setPage(page + 1);
    setTimeout(() => {
      fetchDataOdataObj(input, page + 1 * 10);
    }, 3500);
  };

  return (
    <div className="App">
      <div className="app__header">
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
        <img src={giphyLogo} alt="giphy-logo" className="giphy__logo" />
      </div>
      <InfiniteScroll
        dataLength={dataObj?.length || 0}
        next={fetchMoreData}
        hasMore={true}
        loader={<h5>Loading...</h5>}
      >
        <div className="app__results">
          {dataObj?.map((data, index) => (
            <ResultList
              title={data?.title}
              img={data?.images?.original?.url || data?.images?.original?.url}
              key={data?.id + `${index}`}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
