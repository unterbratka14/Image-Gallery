import { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    searchText(text);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="flex justify-center gap-2 mb-20"
      >
        <input
          onChange={(event) => setText(event.target.value)}
          className="border border-black rounded w-[400px] p-2"
          type="text"
          placeholder="Search Image Term..."
        />
        <button className="border border-black rounded bg-green-300 p-2 text-md">
          Search
        </button>
      </form>
    </>
  );
};

export default ImageSearch;
