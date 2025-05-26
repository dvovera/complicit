import "./App.css";
import TypeWriter from "typewriter-effect";
import React from "react";

function App() {
  return (
    <div className="flex justify-center h-[300vh] mt-10 grain-overlay">
      <div className="max-w-3xl">
        <div className="font-sans font-black tracking-tighter text-9xl leading-20 h-[180vh] overflow-visible">
          <span className="text-green-300">
            <TypeWriter
              options={{
                strings: ["who will", "how do we", "when will we"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          create{" "}
          <span className="text-blue-300">
            <TypeWriter
              options={{
                strings: [
                  "a system",
                  "a future",
                  "infrastructure",
                  "an economy",
                  "progress",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          that is not <span className="sticky top-50 underline">complicit</span>{" "}
          in{" "}
          <span className="text-red-500 ">
            <TypeWriter
              options={{
                strings: [
                  "genocide",
                  "war",
                  "corruption",
                  "exploitation",
                  "imperialism",
                  "modern-day slavery",
                  "eco-terrorism",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          ?
          <h1 className="mt-[20vh] absolute left-0 text-red-900">
            are you <br />
            you are <br />
            are you <br />
            you are <br />
            are you <br />
            you are <br />
          </h1>
          <h1 className="mt-[20vh] ml-150 text-red-900">
            ? <br />
            ? <br />
            ? <br />
            ? <br />
            ? <br />
            ? <br />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
