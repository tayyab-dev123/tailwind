import { useState } from "react";

function App() {
  return (
    <>
      <div className="bg-indigo-400 h-screen w-screen sm:bg-pink-600">
        <h2>Trasformation Transition Animation</h2>
        <button className="m-2 p-5 text-white bg-black  hover:bg-yellow-200 hover:text-emerald-950 duration-500  transition ease-in-out">
          Click Me
        </button>
        {/* Trasfor */}
        <button
          className="m-2 p-5 text-white bg-black  hover:bg-yellow-200
         hover:text-emerald-950 duration-500  transition ease-in-out hover:-translate-y-1 hover:scale-100"
        >
          Click Me
        </button>

        {/* Animation */}

        <button type="button" className="relative bg-indigo-500 p-10 m-10 mr-3">
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"></span>
          </span>
          Processing...
        </button>

        {/* <button
          type="button"
          className="bg-indigo-500  p-10 m-10 mr-3 animate-spin"
          disabled
        >
          Processing...
        </button> */}

        {/* <button
          type="button"
          className="bg-indigo-500  p-10 m-10 mr-3 animate-spin"
          disabled
        >
          Processing...
        </button>
        <button
          type="button"
          className="bg-indigo-500  p-10 m-10 mr-3 animate-ping"
          disabled
        >
          Processing...
        </button>
        <button
          type="button"
          className="bg-indigo-500  p-10 m-10 mr-3 animate-pulse"
          disabled
        >
          Processing...
        </button>
        <button
          type="button"
          className="bg-indigo-500  p-10 m-10 mr-3 animate-bounce"
          disabled
        >
          Processing...
        </button> */}
      </div>
    </>
  );
}

export default App;
