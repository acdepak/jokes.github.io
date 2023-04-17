import React, { useState } from "react";

function SearchJoke() {
  const [keyword, setKeyword] = useState("");
  const [jokes, setJokes] = useState(null);
  const [error, setError] = useState(null);
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await fetch(`https://v2.jokeapi.dev/joke/Any?contains=${keyword}`)
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
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-3">
        <div className="text-xl">Search joke by keyword</div>
        <div className="flex items-center justify-center gap-2 border-2 ">
          <input
            type="text"
            className="p-1"
            placeholder=" Enter a keyword"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            className="p-1"
            type="button"
            value="Search"
            onClick={handleSearch}
          />
        </div>
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
              <div className="flex flex-col text-xl gap-3">
                <div className="">Setup: {setup}</div>
                <div className="">Delivery: {delivery}</div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchJoke;
