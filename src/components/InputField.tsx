import React from "react";
import "./styles.css";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent)=> void
}
const InputField = ({ input, setInput, handleSubmit }: Props) => {
  return (
    <form className="inputField__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="input"
        className="inputField__input"
        placeholder="search for your gifs"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="inputField__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default InputField;
