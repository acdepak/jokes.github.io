import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const fetchJokes = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2387a5bdcbmshc84e46d8b1e984fp188226jsnc25be7bf731e",
        "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
      },
    };

    fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setCurrentJokeIndex(0);
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  const handleNextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-5">
      <div className="text-5xl text-gray-500 p-5">
        Do haha a day, Keep doctor away!
      </div>
      <div className="flex flex-col gap-5">
        <div
          className="hover:cursor-pointer border-2 border-black p-3 text-xl"
          onClick={fetchJokes}
        >
          Generate MEME
        </div>
        {data.length > 0 && (
          <div
            className="hover:cursor-pointer border-2 border-black p-3 text-xl"
            onClick={handleNextJoke}
          >
            Next MEME
          </div>
        )}
      </div>
      {data.length > 0 && (
        <div key={data[currentJokeIndex].id} className="text-3xl text-center">
          <div className="text-blue-700 p-5 margin-5">
            <p onClick={handleNextJoke} className="hover:cursor-pointer">
              <img
                src={data[currentJokeIndex].image}
                alt={"Error: Unable to fetch"}
                height={500}
                width={700}
              ></img>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
