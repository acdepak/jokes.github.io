import React, { useState } from "react";

function JokeSearch() {
  const [keyword, setKeyword] = useState("");
  const [jokes, setJokes] = useState(null);
  const [error, setError] = useState(null);
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await fetch(`/Any?containhttps://v2.jokeapi.dev/jokes=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          setError(null);
          setJokes(data.joke);
        } else if (data.type === "twopart") {
          setError(null);
          setSetup(data.setup);
          setDelivery(data.delivery);
        } else {
          setError(data.message);
          setJokes(null);
          setSetup(null);
          setDelivery(null);
        }
      });
    setLoading(false);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1>Joke Search</h1>
      <div className="flex items-center justify-center border-2 ">
        <input
          type="text"
          placeholder="Enter a keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {loading ? (
          "loading..."
        ) : error ? (
          <div className="p-3 rounded-xl">{error}</div>
        ) : (
          <div>
            {!!jokes ? (
              <p>{jokes}</p>
            ) : !!setup ? (
              <div className="flex flex-col">
                <div>Setup: {setup}</div>
                <div>Delivery: {delivery}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default JokeSearch;
