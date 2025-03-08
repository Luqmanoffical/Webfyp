import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
import SortingVisualizer from "./Virsulization";

const Dashboard = ({ onAlgorithmSelect, onDataSubmit }) => {
  const [inputData, setInputData] = useState("");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  const handleDataSubmit = () => {
    if (!inputData.match(/^\d+(,\d+)*$/)) {
      alert("Please enter a comma-separated list of numbers.");
      return;
    }
    onDataSubmit(inputData.split(",").map(Number), selectedAlgorithm);
  };

  return (
    <div className="w-full  mt-5 flex  min-h-[70dvh]  ">
      <div className="w-full relative px-6 py-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Animated Sorting Simulator
        </h1>

        <div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
            <div className="w-full md:w-2/5">
              <label className="text-white text-sm mb-2">
                Enter List of Numbers:
              </label>
              <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="e.g., 5,3,8,6"
                className="w-full p-3 text-gray-700 bg-transparent rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="w-full md:w-2/5">
              <label className="text-white text-sm mb-2">
                Select Sorting Algorithm:
              </label>
              <select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                className="w-full p-3 text-gray-700 bg-transparent rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value=""> Select Algorithm </option>
                <option value="selection">Selection Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="merge">Merge Sort</option>
              </select>
            </div>

            <button
              onClick={handleDataSubmit}
              disabled={!selectedAlgorithm}
              className="w-full md:w-1/5 py-3 mt-6 text-white bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded"
            >
              Run Simulation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Visualization = ({ array, highlights, speed, isRunning, onControl }) => {
  return (
    <div className="w-full h-full bg-white p-6 rounded-3xl flex flex-col items-center">
      <h2 className="text-xl font-bold text-center text-gray-700 mb-4">
        Sorting Visualization
      </h2>

      <div className="array-container flex justify-between items-end mb-4 w-full max-w-4xl">
        {array.map((value, idx) => (
          <div
            key={idx}
            className={`array-bar ${
              highlights.includes(idx) ? "highlight" : ""
            }`}
            style={{
              height: `${value * 5}px`,
              width: `${100 / array.length}%`,
            }}
          ></div>
        ))}
      </div>

      <div className="controls flex justify-center gap-4 items-center w-full">
        <button
          onClick={() => onControl("start")}
          disabled={isRunning}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Start
        </button>
        <button
          onClick={() => onControl("pause")}
          disabled={!isRunning}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          Pause
        </button>
        <button
          onClick={() => onControl("reset")}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Reset
        </button>

        <label className="text-sm">Speed:</label>
        <input
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={(e) => onControl("speed", e.target.value)}
          className="w-24"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("");
  const [highlights, setHighlights] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(50);

  const handleDataSubmit = (inputArray, selectedAlgorithm) => {
    setArray(inputArray);
    setAlgorithm(selectedAlgorithm);
  };

  const handleControl = (action, value) => {
    switch (action) {
      case "start":
        setIsRunning(true);
        break;
      case "pause":
        setIsRunning(false);
        break;
      case "reset":
        setIsRunning(false);
        setHighlights([]);
        break;
      case "speed":
        setSpeed(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className=" w-full min-h-screen  flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-full max-w-4xl px-6 py-8">
        <SortingVisualizer />

        {/* <Dashboard
          onAlgorithmSelect={setAlgorithm}
          onDataSubmit={handleDataSubmit}
        />
        {array.length > 0 && (
          <Visualization
            array={array}
            highlights={highlights}
            speed={speed}
            isRunning={isRunning}
            onControl={handleControl}
          />
        )} */}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
