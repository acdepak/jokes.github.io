import { useState } from "react";

let i = 0;

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
    i = i + 1;
  };

  const handleNextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % data.length);
    i = i + 1;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-2">
      <div className="flex flex-col gap-5">
        {i === 0 || i > 12 ? (
          <div
            className="hover:cursor-pointer border-2 border-black p-3 text-xl"
            onClick={fetchJokes}
          >
            Generate MEME
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex gap-5">
        {data.length > 0 && (
          <div key={data[currentJokeIndex].id} className="text-3xl text-center">
            <div className="text-blue-700 p-5 margin-5 border-2">
              <p className="">
                <img
                  src={data[currentJokeIndex].image}
                  alt={"Error: Unable to fetch"}
                  height={500}
                  width={550}
                ></img>
              </p>
            </div>
          </div>
        )}

        <div className="flex ">
          {data.length > 0 && (
            <div
              className="hover:cursor-pointer bg-gray-100 flex items-center p-3 text-xl"
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
