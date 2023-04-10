import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const onClick = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2387a5bdcbmshc84e46d8b1e984fp188226jsnc25be7bf731e",
        "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
        // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  // console.log(data.jokes);

  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-5">
      <div className="text-5xl text-gray-500 p-5">
        Do haha a day, Keep doctor away!
      </div>
      <div className="">
        <div
          className="hover:cursor-pointer border-2 border-black p-3 text-xl"
          onClick={onClick}
        >
          Joke
        </div>
      </div>

      {data.map((joke) => (
        <div key={joke.id} className="text-3xl text-center">
          <div className="text-blue-700 p-5 margin-5">
            <p onClick={onClick} className="hover:cursor-pointer">
              <img
                src={joke.image}
                alt={joke.image}
                height={700}
                width={900}
              ></img>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
