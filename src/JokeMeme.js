import React, { useState } from "react";
import Jokes from "./CNJokes.js";
import Memes from "./Memes.js";
import SearchJoke from "./SearchJoke.js";

function JokeMeme() {
  const [showMeme, setShowMeme] = useState(false);
  const [showNorris, setShowNorris] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  const onClickMeme = () => {
    setShowMeme(true);
    setShowNorris(false);
    setShowJoke(false);
  };
  const onClickNorris = () => {
    setShowNorris(true);
    setShowMeme(false);
    setShowJoke(false);
  };
  const onClickShowJoke = () => {
    setShowJoke(true);
    setShowMeme(false);
    setShowNorris(false);
  };
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 justify-center">
          <div
            className="border-2 p-2 hover:cursor-pointer border-black hover:bg-blue-500"
            onClick={onClickMeme}
          >
            MEMEs
          </div>

          <div
            className="border-2 p-2 hover:cursor-pointer border-black hover:bg-blue-500"
            onClick={onClickNorris}
          >
            Chuck norris Jokes
          </div>
          <div
            className="border-2 p-2 hover:cursor-pointer border-black hover:bg-blue-500"
            onClick={onClickShowJoke}
          >
            SearchJokes
          </div>
        </div>
        {/* <div className="flex gap-5 font-sans text-xl justify-center bg-blue-100  ">
          {navBar}
        </div> */}
      </div>
      <div className="flex ">
        <div>{showMeme && <Memes />}</div>
        <div className="flex flex-col items-center">
          {showNorris && <Jokes />}
        </div>
        <div className="flex flex-col items-center">
          {showJoke && <SearchJoke />}
        </div>
      </div>
    </>
  );
}

// const cluster = [
//   { title: "MEMEs", link: <Memes /> },
//   { title: "Chuck Norris Jokes", link: <Jokes /> },
//   { title: "Search Jokes", link: "" },
//   { title: "random", link: "" },
// ];

// const navBar = cluster.map((item, index) => (
//   <div key={index} className="">
//     <div
//       className="border-2 border-blue-100 hover:bg-blue-400 hover:border-2 hover:border-black p-2 hover:cursor-pointer"
//       onClick={() => }
//     >
//       {item.title}
//     </div>
//     <div>item.link</div>
//   </div>

// ));

export default JokeMeme;
