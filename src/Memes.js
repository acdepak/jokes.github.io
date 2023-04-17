import { useState } from "react";

let i = 1;
function Memes() {
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
        // console.log(response);
      })
      .catch((error) => console.error(error));
  };

  const handleNextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % data.length);

    i > 11 ? (i = 1) : (i += 1);
  };

  const handlePrevJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex - 1) % data.length);

    i > 11 ? (i = 1) : (i -= 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-2">
      <div className="flex flex-col gap-5">
        <div
          className="hover:cursor-pointer border-2 bg-gray-200 rounded-xl hover:shadow-lg p-2 text-xl"
          onClick={fetchJokes}
        >
          Generate new MEMEs
        </div>
      </div>

      <div className="flex ">
        {i > 1 && data.length > 1 && (
          <div
            className="hover:cursor-pointer bg-gray-100 absolute left-1/4 top-1/2 p-3 text-xl"
            onClick={handlePrevJoke}
          >
            Previous MEME
          </div>
        )}
      </div>

      <div className="flex gap-5">
        {data.length > 0 && (
          <div key={data[currentJokeIndex].id} className="text-3xl text-center">
            <div className="text-blue-700 p-5 margin-5 border-2">
              <img
                src={data[currentJokeIndex].image}
                alt={"Error: Unable to fetch"}
                height={500}
                width={550}
              ></img>
            </div>
            <div>{i}</div>
          </div>
        )}

        <div className="flex ">
          {data.length > 0 && (
            <div
              className="hover:cursor-pointer bg-gray-100  absolute right-1/4 top-1/2 p-3 text-xl"
              onClick={handleNextJoke}
            >
              Next MEME
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Memes;
