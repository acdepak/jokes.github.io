import React, { useEffect, useState } from "react";

function Jokes() {
  const [buttons, setButtons] = useState([]);
  const [joke, setJoke] = useState({});

  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/categories";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setButtons(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setJoke(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <header className="text-blue-500 text-2xl text-center">
          Categories of Chuck Norris Jokes
        </header>
        <div className="grid grid-cols-6 gap-4 text-center">
          {buttons.map((item) => {
            return (
              <div
                key={item}
                className="text-2xl bg-blue-300 rounded-xl hover:cursor-pointer items-center justify-center p-2"
                onClick={() => getJoke(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center w-3/5 ">
        <div className="font-medium text-3xl text-center mt-4 ">
          {joke.value}
        </div>
      </div>
    </>
  );
}

export default Jokes;
