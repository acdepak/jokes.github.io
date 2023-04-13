import JokeMeme from "./JokeMeme";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 mt-2">
        <div className="flex justify-center text-4xl text-gray-500 p-5 w-full shadow-lg ">
          Do haha a day, Keep doctor away!
        </div>
        <JokeMeme />
      </div>
    </>
  );
}

export default App;
