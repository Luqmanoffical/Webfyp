// import React, { useState, useEffect, useRef } from "react";
// import * as d3 from "d3";

// // Algorithms implementations that produce all steps at once
// const algorithmSteps = {
//   bubbleSort: {
//     name: "Bubble Sort",
//     complexity: {
//       best: "O(n)",
//       average: "O(n²)",
//       worst: "O(n²)",
//       space: "O(1)",
//     },
//     getSteps: (array) => {
//       const steps = [];
//       const arr = [...array];
//       const n = arr.length;
//       let swapped;

//       do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//           steps.push({
//             array: [...arr],
//             highlights: [i, i + 1],
//             action: "compare",
//           });

//           if (arr[i] > arr[i + 1]) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//             swapped = true;

//             steps.push({
//               array: [...arr],
//               highlights: [i, i + 1],
//               action: "swap",
//             });
//           }
//         }
//       } while (swapped);

//       steps.push({
//         array: [...arr],
//         highlights: [],
//         action: "done",
//       });

//       return steps;
//     },
//   },

//   quickSort: {
//     name: "Quick Sort",
//     complexity: {
//       best: "O(n log n)",
//       average: "O(n log n)",
//       worst: "O(n²)",
//       space: "O(log n)",
//     },
//     getSteps: (array) => {
//       const steps = [];
//       const arr = [...array];

//       function quickSortHelper(arr, start, end) {
//         if (start >= end) return;

//         let pivotIndex = start;
//         const pivotValue = arr[end];

//         for (let i = start; i < end; i++) {
//           // Record comparison step
//           steps.push({
//             array: [...arr],
//             highlights: [i, end],
//             action: "compare",
//           });

//           if (arr[i] < pivotValue) {
//             // Record swap step (if needed)
//             if (i !== pivotIndex) {
//               [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//               steps.push({
//                 array: [...arr],
//                 highlights: [i, pivotIndex],
//                 action: "swap",
//               });
//             }
//             pivotIndex++;
//           }
//         }

//         // Record pivot placement
//         [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
//         steps.push({
//           array: [...arr],
//           highlights: [pivotIndex, end],
//           action: "swap",
//         });

//         const pivot = pivotIndex;

//         quickSortHelper(arr, start, pivot - 1);
//         quickSortHelper(arr, pivot + 1, end);
//       }

//       quickSortHelper(arr, 0, arr.length - 1);

//       // Record final state
//       steps.push({
//         array: [...arr],
//         highlights: [],
//         action: "done",
//       });

//       return steps;
//     },
//   },

//   mergeSort: {
//     name: "Merge Sort",
//     complexity: {
//       best: "O(n log n)",
//       average: "O(n log n)",
//       worst: "O(n log n)",
//       space: "O(n)",
//     },
//     getSteps: (array) => {
//       const steps = [];
//       const arr = [...array];

//       function mergeSortHelper(arr, start, end) {
//         if (start >= end) return arr;

//         const mid = Math.floor((start + end) / 2);

//         // Record division step
//         steps.push({
//           array: [...arr],
//           highlights: [start, mid, end],
//           action: "divide",
//         });

//         mergeSortHelper(arr, start, mid);
//         mergeSortHelper(arr, mid + 1, end);

//         // Merge
//         const temp = [...arr];
//         let i = start;
//         let j = mid + 1;
//         let k = start;

//         while (i <= mid && j <= end) {
//           // Record comparison step
//           steps.push({
//             array: [...arr],
//             highlights: [i, j],
//             action: "compare",
//           });

//           if (temp[i] <= temp[j]) {
//             arr[k] = temp[i];
//             i++;
//           } else {
//             arr[k] = temp[j];
//             j++;
//           }

//           // Record placement step
//           steps.push({
//             array: [...arr],
//             highlights: [k],
//             action: "place",
//           });

//           k++;
//         }

//         while (i <= mid) {
//           arr[k] = temp[i];

//           // Record placement step
//           steps.push({
//             array: [...arr],
//             highlights: [k, i],
//             action: "place",
//           });

//           i++;
//           k++;
//         }

//         while (j <= end) {
//           arr[k] = temp[j];

//           // Record placement step
//           steps.push({
//             array: [...arr],
//             highlights: [k, j],
//             action: "place",
//           });

//           j++;
//           k++;
//         }

//         return arr;
//       }

//       mergeSortHelper(arr, 0, arr.length - 1);

//       // Record final state
//       steps.push({
//         array: [...arr],
//         highlights: [],
//         action: "done",
//       });

//       return steps;
//     },
//   },

//   insertionSort: {
//     name: "Insertion Sort",
//     complexity: {
//       best: "O(n)",
//       average: "O(n²)",
//       worst: "O(n²)",
//       space: "O(1)",
//     },
//     getSteps: (array) => {
//       const steps = [];
//       const arr = [...array];
//       const n = arr.length;

//       for (let i = 1; i < n; i++) {
//         const key = arr[i];
//         let j = i - 1;

//         // Record key selection
//         steps.push({
//           array: [...arr],
//           highlights: [i],
//           action: "select",
//         });

//         while (j >= 0 && arr[j] > key) {
//           // Record comparison
//           steps.push({
//             array: [...arr],
//             highlights: [j, j + 1],
//             action: "compare",
//           });

//           arr[j + 1] = arr[j];

//           // Record shift
//           steps.push({
//             array: [...arr],
//             highlights: [j, j + 1],
//             action: "shift",
//           });

//           j--;
//         }

//         arr[j + 1] = key;

//         // Record placement
//         steps.push({
//           array: [...arr],
//           highlights: [j + 1],
//           action: "place",
//         });
//       }

//       // Record final state
//       steps.push({
//         array: [...arr],
//         highlights: [],
//         action: "done",
//       });

//       return steps;
//     },
//   },

//   selectionSort: {
//     name: "Selection Sort",
//     complexity: {
//       best: "O(n²)",
//       average: "O(n²)",
//       worst: "O(n²)",
//       space: "O(1)",
//     },
//     getSteps: (array) => {
//       const steps = [];
//       const arr = [...array];
//       const n = arr.length;

//       for (let i = 0; i < n - 1; i++) {
//         let minIdx = i;

//         // Record current position
//         steps.push({
//           array: [...arr],
//           highlights: [i],
//           action: "select",
//         });

//         for (let j = i + 1; j < n; j++) {
//           // Record comparison
//           steps.push({
//             array: [...arr],
//             highlights: [minIdx, j],
//             action: "compare",
//           });

//           if (arr[j] < arr[minIdx]) {
//             minIdx = j;

//             // Record new minimum
//             steps.push({
//               array: [...arr],
//               highlights: [minIdx],
//               action: "newMin",
//             });
//           }
//         }

//         // Swap the found minimum element with the first element
//         if (minIdx !== i) {
//           [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];

//           // Record swap
//           steps.push({
//             array: [...arr],
//             highlights: [i, minIdx],
//             action: "swap",
//           });
//         }
//       }

//       // Record final state
//       steps.push({
//         array: [...arr],
//         highlights: [],
//         action: "done",
//       });

//       return steps;
//     },
//   },
// };

// const SortingVisualizer = () => {
//   const [array, setArray] = useState([]);
//   const [originalArray, setOriginalArray] = useState([]);
//   const [highlights, setHighlights] = useState([]);
//   const [speed, setSpeed] = useState(50);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubbleSort");
//   const [isSorted, setIsSorted] = useState(false);
//   const [actionType, setActionType] = useState("");
//   const [inputData, setInputData] = useState("");
//   const [showInputError, setShowInputError] = useState(false);
//   const [inputErrorMessage, setInputErrorMessage] = useState("");

//   const timerRef = useRef(null);
//   const stepIndexRef = useRef(0);
//   const stepsRef = useRef([]);

//   // Generate random array
//   const generateRandomArray = (size = 20) => {
//     const newArray = Array.from(
//       { length: size },
//       () => Math.floor(Math.random() * 95) + 5
//     );
//     setArray(newArray);
//     setOriginalArray([...newArray]);
//     resetSortState();
//   };

//   // Reset sort state
//   const resetSortState = () => {
//     setIsSorted(false);
//     setHighlights([]);
//     setActionType("");
//     stepsRef.current = [];
//     stepIndexRef.current = 0;

//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }

//     setIsRunning(false);
//     setIsPaused(false);
//   };

//   // Handle user input array
//   const handleUserInputSubmit = () => {
//     if (!inputData.trim()) {
//       setShowInputError(true);
//       setInputErrorMessage("Please enter some numbers.");
//       return;
//     }

//     // Parse the input as a comma-separated list of numbers
//     const inputArray = inputData.split(",").map((item) => {
//       const num = Number(item.trim());
//       return isNaN(num) ? null : num;
//     });

//     // Validate the input
//     if (inputArray.some((item) => item === null)) {
//       setShowInputError(true);
//       setInputErrorMessage(
//         "Input contains invalid numbers. Please use a comma-separated list of numbers."
//       );
//       return;
//     }

//     if (inputArray.length < 2) {
//       setShowInputError(true);
//       setInputErrorMessage("Please enter at least 2 numbers to sort.");
//       return;
//     }

//     if (inputArray.length > 100) {
//       setShowInputError(true);
//       setInputErrorMessage(
//         "Please enter at most 100 numbers for optimal visualization."
//       );
//       return;
//     }

//     // Clear any error
//     setShowInputError(false);
//     setInputErrorMessage("");

//     // Use the input array
//     setArray(inputArray);
//     setOriginalArray([...inputArray]);
//     resetSortState();
//   };

//   useEffect(() => {
//     generateRandomArray();

//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }
//     };
//   }, []);

//   // Pre-compute all steps when algorithm or array changes
//   useEffect(() => {
//     if (array.length > 0 && !isRunning) {
//       stepsRef.current = algorithmSteps[selectedAlgorithm].getSteps([...array]);
//       stepIndexRef.current = 0;
//     }
//   }, [array, selectedAlgorithm, isRunning]);

//   // Animation function
//   const runNextStep = () => {
//     // Clear any existing timeout
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//       timerRef.current = null;
//     }

//     // Skip if paused or not running
//     if (!isRunning || isPaused) {
//       return;
//     }

//     // Check if we've reached the end
//     if (stepIndexRef.current >= stepsRef.current.length) {
//       setIsSorted(true);
//       setIsRunning(false);
//       return;
//     }

//     // Get current step
//     const currentStep = stepsRef.current[stepIndexRef.current];

//     // Update state with current step
//     setArray(currentStep.array);
//     setHighlights(currentStep.highlights);
//     setActionType(currentStep.action);

//     // Move to next step
//     stepIndexRef.current++;

//     // Schedule next step based on speed
//     const delay = 101 - speed;
//     timerRef.current = setTimeout(runNextStep, delay);
//   };

//   // Watch for changes in isRunning and isPaused to control animation
//   useEffect(() => {
//     if (isRunning && !isPaused) {
//       runNextStep();
//     }
//   }, [isRunning, isPaused]);

//   const handleControl = (action, value) => {
//     switch (action) {
//       case "start":
//         if (!isRunning) {
//           // Initial start
//           setIsRunning(true);
//           setIsPaused(false);
//           setIsSorted(false);
//           // If we're at the end, restart
//           if (stepIndexRef.current >= stepsRef.current.length) {
//             stepIndexRef.current = 0;
//           }
//         } else if (isPaused) {
//           // Resume if paused
//           setIsPaused(false);
//         }
//         break;

//       case "pause":
//         if (isRunning && !isPaused) {
//           setIsPaused(true);
//           // Important: clear the timer when pausing
//           if (timerRef.current) {
//             clearTimeout(timerRef.current);
//             timerRef.current = null;
//           }
//         }
//         break;

//       case "reset":
//         // Stop any running animation
//         if (timerRef.current) {
//           clearTimeout(timerRef.current);
//           timerRef.current = null;
//         }
//         setIsRunning(false);
//         setIsPaused(false);
//         setArray([...originalArray]);
//         setHighlights([]);
//         setActionType("");
//         setIsSorted(false);
//         stepIndexRef.current = 0;
//         break;

//       case "speed":
//         setSpeed(Number(value));
//         break;

//       case "algorithm":
//         if (!isRunning) {
//           setSelectedAlgorithm(value);
//           // Reset states when algorithm changes
//           setIsSorted(false);
//           setActionType("");
//           stepIndexRef.current = 0;
//         }
//         break;

//       case "size":
//         if (!isRunning) {
//           generateRandomArray(Number(value));
//         }
//         break;

//       default:
//         break;
//     }
//   };

//   const algorithmMapping = {
//     bubble: "bubbleSort",
//     quick: "quickSort",
//     merge: "mergeSort",
//     insertion: "insertionSort",
//     selection: "selectionSort",
//   };

//   return (
//     <div className="w-full h-full  p-4 flex flex-col items-center">
//       <div className=" p-6 rounded-3xl w-full max-w-6xl shadow-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-100 mb-2">
//           Sorting Algorithm Visualizer
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div className=" p-4 rounded-lg">
//             <h2 className="text-lg font-semibold mb-2">
//               Algorithm: {algorithmSteps[selectedAlgorithm].name}
//             </h2>
//             <div className="grid grid-cols-2 gap-2 text-sm">
//               <div>
//                 Best case: {algorithmSteps[selectedAlgorithm].complexity.best}
//               </div>
//               <div>
//                 Average case:{" "}
//                 {algorithmSteps[selectedAlgorithm].complexity.average}
//               </div>
//               <div>
//                 Worst case: {algorithmSteps[selectedAlgorithm].complexity.worst}
//               </div>
//               <div>
//                 Space complexity:{" "}
//                 {algorithmSteps[selectedAlgorithm].complexity.space}
//               </div>
//             </div>
//           </div>

//           <div className=" p-4 rounded-lg">
//             <h2 className="text-lg font-semibold mb-2">Controls</h2>
//             <div className="flex flex-wrap gap-2">
//               <select
//                 value={selectedAlgorithm}
//                 onChange={(e) => handleControl("algorithm", e.target.value)}
//                 disabled={isRunning}
//                 className="bg- border border-gray-300 px-3 py-1 rounded-md"
//               >
//                 {Object.keys(algorithmSteps).map((key) => (
//                   <option key={key} value={key}>
//                     {algorithmSteps[key].name}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 onChange={(e) => handleControl("size", e.target.value)}
//                 disabled={isRunning}
//                 className="border border-gray-300 px-3 py-1 rounded-md"
//                 defaultValue="20"
//               >
//                 <option value="10">10 elements</option>
//                 <option value="20">20 elements</option>
//                 <option value="50">50 elements</option>
//                 <option value="100">100 elements</option>
//               </select>

//               <button
//                 onClick={() => generateRandomArray()}
//                 disabled={isRunning}
//                 className="bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600 disabled:opacity-50"
//               >
//                 New Random Array
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* User Input Section */}
//         <div className=" p-4 rounded-lg mb-4">
//           <h2 className="text-lg font-semibold mb-2">Enter Custom Array</h2>
//           <div className="flex flex-col md:flex-row gap-2">
//             <input
//               type="text"
//               value={inputData}
//               onChange={(e) => setInputData(e.target.value)}
//               placeholder="Enter comma-separated numbers (e.g., 5,3,8,6,2)"
//               className="flex-grow border border-gray-300 px-3 py-2 rounded-md"
//               disabled={isRunning}
//             />
//             <button
//               onClick={handleUserInputSubmit}
//               disabled={isRunning}
//               className="bg-purple-500 text-white px-3 py-1 rounded-md hover:bg-purple-600 disabled:opacity-50"
//             >
//               Use Custom Array
//             </button>
//           </div>
//           {showInputError && (
//             <div className="mt-2 text-red-500 text-sm">{inputErrorMessage}</div>
//           )}
//         </div>

//         <div className="mb-6">
//           <Visualization
//             array={array}
//             originalArray={originalArray}
//             highlights={highlights}
//             speed={speed}
//             isRunning={isRunning}
//             isPaused={isPaused}
//             isSorted={isSorted}
//             actionType={actionType}
//             onControl={handleControl}
//           />
//         </div>

//         <div className="text-center text-sm text-gray-500 mt-2">
//           <p>
//             Status:{" "}
//             {isSorted
//               ? "Sorted"
//               : isPaused
//               ? "Paused"
//               : isRunning
//               ? "Running"
//               : "Ready"}
//           </p>
//           {actionType && <p>Current action: {actionType}</p>}
//           <p>
//             Steps: {stepIndexRef.current} / {stepsRef.current.length}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Visualization component using D3.js
// const Visualization = ({
//   array,
//   originalArray,
//   highlights,
//   speed,
//   isRunning,
//   isPaused,
//   isSorted,
//   actionType,
//   onControl,
// }) => {
//   const d3Container = useRef(null);

//   // Color mapping for different actions
//   const getActionColor = (action) => {
//     switch (action) {
//       case "compare":
//         return "#FFB74D"; // Orange
//       case "swap":
//         return "#F44336"; // Red
//       case "divide":
//         return "#9C27B0"; // Purple
//       case "place":
//         return "#2196F3"; // Blue
//       case "select":
//         return "#4CAF50"; // Green
//       case "shift":
//         return "#FF9800"; // Orange
//       case "newMin":
//         return "#009688"; // Teal
//       default:
//         return "#3B82F6"; // Default blue
//     }
//   };

//   useEffect(() => {
//     if (array && d3Container.current) {
//       const svg = d3.select(d3Container.current);
//       svg.selectAll("*").remove();

//       const margin = { top: 20, right: 20, bottom: 30, left: 40 };
//       const width =
//         svg.node().getBoundingClientRect().width - margin.left - margin.right;
//       const height = 300 - margin.top - margin.bottom;

//       const x = d3
//         .scaleBand()
//         .domain(d3.range(array.length))
//         .range([0, width])
//         .padding(0.1);

//       const y = d3
//         .scaleLinear()
//         .domain([0, d3.max(array) * 1.1]) // Add 10% padding at the top
//         .range([height, 0]);

//       const g = svg
//         .append("g")
//         .attr("transform", `translate(${margin.left},${margin.top})`);

//       // Draw bars
//       g.selectAll(".bar")
//         .data(array)
//         .enter()
//         .append("rect")
//         .attr("class", "bar")
//         .attr("x", (d, i) => x(i))
//         .attr("y", (d) => y(d))
//         .attr("width", x.bandwidth())
//         .attr("height", (d) => height - y(d))
//         .attr("fill", (d, i) => {
//           if (isSorted) return "#4CAF50";
//           return highlights.includes(i)
//             ? getActionColor(actionType)
//             : "#3B82F6";
//         });

//       // Add values on top of bars (only for arrays with fewer elements)
//       if (array.length <= 50) {
//         g.selectAll(".bar-label")
//           .data(array)
//           .enter()
//           .append("text")
//           .attr("class", "bar-label")
//           .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
//           .attr("y", (d) => y(d) - 5)
//           .attr("text-anchor", "middle")
//           .attr("font-size", "10px")
//           .attr("fill", "#333")
//           .text((d) => d);
//       }

//       // Add X axis (only show some tick marks for larger arrays)
//       const xAxis = d3.axisBottom(x);
//       if (array.length > 20) {
//         xAxis.tickValues(x.domain().filter((d, i) => !(i % 5)));
//       }
//       g.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

//       // Add Y axis
//       g.append("g").call(d3.axisLeft(y).ticks(5));

//       // Add a legend if not sorted
//       if (!isSorted && array.length > 0) {
//         const legend = svg
//           .append("g")
//           .attr("transform", `translate(${width - 100}, 10)`);

//         legend
//           .append("rect")
//           .attr("width", 15)
//           .attr("height", 15)
//           .attr("fill", "#3B82F6");

//         legend
//           .append("text")
//           .attr("x", 20)
//           .attr("y", 12.5)
//           .attr("font-size", "10px")
//           .text("Unsorted");

//         if (actionType) {
//           legend
//             .append("rect")
//             .attr("width", 15)
//             .attr("height", 15)
//             .attr("fill", getActionColor(actionType))
//             .attr("transform", "translate(0, 20)");

//           legend
//             .append("text")
//             .attr("x", 20)
//             .attr("y", 32.5)
//             .attr("font-size", "10px")
//             .text(actionType.charAt(0).toUpperCase() + actionType.slice(1));
//         }
//       }
//     }
//   }, [array, highlights, isSorted, actionType]);

//   return (
//     <div className="w-full flex flex-col items-center">
//       <div className="array-display w-full h-80 overflow-hidden">
//         <svg ref={d3Container} width="100%" height="100%"></svg>
//       </div>

//       <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
//         <div className="flex gap-2">
//           <button
//             onClick={() => onControl("start")}
//             disabled={(isRunning && !isPaused) || isSorted}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
//           >
//             {isPaused ? "Resume" : isSorted ? "Sorted" : "Start"}
//           </button>

//           <button
//             onClick={() => onControl("pause")}
//             disabled={!isRunning || isPaused}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50"
//           >
//             Pause
//           </button>

//           <button
//             onClick={() => onControl("reset")}
//             className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="text-sm whitespace-nowrap">Speed:</span>
//           <input
//             type="range"
//             min="1"
//             max="100"
//             value={speed}
//             onChange={(e) => onControl("speed", e.target.value)}
//             className="w-32"
//           />
//           <span className="text-sm">{speed}%</span>
//         </div>
//       </div>

//       {isSorted && (
//         <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
//           Sort complete! Array is now sorted.
//         </div>
//       )}
//     </div>
//   );
// };

// export default SortingVisualizer;
import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

// Algorithms implementations that produce all steps at once
const algorithmSteps = {
  bubbleSort: {
    name: "Bubble Sort",
    complexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    getSteps: (array) => {
      const steps = [];
      const arr = [...array];
      const n = arr.length;
      let swapped;

      do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
          steps.push({
            array: [...arr],
            highlights: [i, i + 1],
            action: "compare",
          });

          if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swapped = true;

            steps.push({
              array: [...arr],
              highlights: [i, i + 1],
              action: "swap",
            });
          }
        }
      } while (swapped);

      steps.push({
        array: [...arr],
        highlights: [],
        action: "done",
      });

      return steps;
    },
  },

  quickSort: {
    name: "Quick Sort",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)",
      space: "O(log n)",
    },
    getSteps: (array) => {
      const steps = [];
      const arr = [...array];

      function quickSortHelper(arr, start, end) {
        if (start >= end) return;

        let pivotIndex = start;
        const pivotValue = arr[end];

        for (let i = start; i < end; i++) {
          // Record comparison step
          steps.push({
            array: [...arr],
            highlights: [i, end],
            action: "compare",
          });

          if (arr[i] < pivotValue) {
            // Record swap step (if needed)
            if (i !== pivotIndex) {
              [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
              steps.push({
                array: [...arr],
                highlights: [i, pivotIndex],
                action: "swap",
              });
            }
            pivotIndex++;
          }
        }

        // Record pivot placement
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        steps.push({
          array: [...arr],
          highlights: [pivotIndex, end],
          action: "swap",
        });

        const pivot = pivotIndex;

        quickSortHelper(arr, start, pivot - 1);
        quickSortHelper(arr, pivot + 1, end);
      }

      quickSortHelper(arr, 0, arr.length - 1);

      // Record final state
      steps.push({
        array: [...arr],
        highlights: [],
        action: "done",
      });

      return steps;
    },
  },

  mergeSort: {
    name: "Merge Sort",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
    },
    getSteps: (array) => {
      const steps = [];
      const arr = [...array];

      function mergeSortHelper(arr, start, end) {
        if (start >= end) return arr;

        const mid = Math.floor((start + end) / 2);

        // Record division step
        steps.push({
          array: [...arr],
          highlights: [start, mid, end],
          action: "divide",
        });

        mergeSortHelper(arr, start, mid);
        mergeSortHelper(arr, mid + 1, end);

        // Merge
        const temp = [...arr];
        let i = start;
        let j = mid + 1;
        let k = start;

        while (i <= mid && j <= end) {
          // Record comparison step
          steps.push({
            array: [...arr],
            highlights: [i, j],
            action: "compare",
          });

          if (temp[i] <= temp[j]) {
            arr[k] = temp[i];
            i++;
          } else {
            arr[k] = temp[j];
            j++;
          }

          // Record placement step
          steps.push({
            array: [...arr],
            highlights: [k],
            action: "place",
          });

          k++;
        }

        while (i <= mid) {
          arr[k] = temp[i];

          // Record placement step
          steps.push({
            array: [...arr],
            highlights: [k, i],
            action: "place",
          });

          i++;
          k++;
        }

        while (j <= end) {
          arr[k] = temp[j];

          // Record placement step
          steps.push({
            array: [...arr],
            highlights: [k, j],
            action: "place",
          });

          j++;
          k++;
        }

        return arr;
      }

      mergeSortHelper(arr, 0, arr.length - 1);

      // Record final state
      steps.push({
        array: [...arr],
        highlights: [],
        action: "done",
      });

      return steps;
    },
  },

  insertionSort: {
    name: "Insertion Sort",
    complexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    getSteps: (array) => {
      const steps = [];
      const arr = [...array];
      const n = arr.length;

      for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        // Record key selection
        steps.push({
          array: [...arr],
          highlights: [i],
          action: "select",
        });

        while (j >= 0 && arr[j] > key) {
          // Record comparison
          steps.push({
            array: [...arr],
            highlights: [j, j + 1],
            action: "compare",
          });

          arr[j + 1] = arr[j];

          // Record shift
          steps.push({
            array: [...arr],
            highlights: [j, j + 1],
            action: "shift",
          });

          j--;
        }

        arr[j + 1] = key;

        // Record placement
        steps.push({
          array: [...arr],
          highlights: [j + 1],
          action: "place",
        });
      }

      // Record final state
      steps.push({
        array: [...arr],
        highlights: [],
        action: "done",
      });

      return steps;
    },
  },

  selectionSort: {
    name: "Selection Sort",
    complexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)",
      space: "O(1)",
    },
    getSteps: (array) => {
      const steps = [];
      const arr = [...array];
      const n = arr.length;

      for (let i = 0; i < n - 1; i++) {
        let minIdx = i;

        // Record current position
        steps.push({
          array: [...arr],
          highlights: [i],
          action: "select",
        });

        for (let j = i + 1; j < n; j++) {
          // Record comparison
          steps.push({
            array: [...arr],
            highlights: [minIdx, j],
            action: "compare",
          });

          if (arr[j] < arr[minIdx]) {
            minIdx = j;

            // Record new minimum
            steps.push({
              array: [...arr],
              highlights: [minIdx],
              action: "newMin",
            });
          }
        }

        // Swap the found minimum element with the first element
        if (minIdx !== i) {
          [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];

          // Record swap
          steps.push({
            array: [...arr],
            highlights: [i, minIdx],
            action: "swap",
          });
        }
      }

      // Record final state
      steps.push({
        array: [...arr],
        highlights: [],
        action: "done",
      });

      return steps;
    },
  },
};

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [speed, setSpeed] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubbleSort");
  const [isSorted, setIsSorted] = useState(false);
  const [actionType, setActionType] = useState("");
  const [inputData, setInputData] = useState("");
  const [showInputError, setShowInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState("");
  const [showGraph, setShowGraph] = useState(false);

  const timerRef = useRef(null);
  const stepIndexRef = useRef(0);
  const stepsRef = useRef([]);

  // Reset sort state
  const resetSortState = () => {
    setIsSorted(false);
    setHighlights([]);
    setActionType("");
    stepsRef.current = [];
    stepIndexRef.current = 0;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setIsRunning(false);
    setIsPaused(false);
  };

  // Handle user input array
  const handleUserInputSubmit = () => {
    if (!inputData.trim()) {
      setShowInputError(true);
      setInputErrorMessage("Please enter some numbers.");
      return;
    }

    // Parse the input as a comma-separated list of numbers
    const inputArray = inputData.split(",").map((item) => {
      const num = Number(item.trim());
      return isNaN(num) ? null : num;
    });

    // Validate the input
    if (inputArray.some((item) => item === null)) {
      setShowInputError(true);
      setInputErrorMessage(
        "Input contains invalid numbers. Please use a comma-separated list of numbers."
      );
      return;
    }

    if (inputArray.length < 2) {
      setShowInputError(true);
      setInputErrorMessage("Please enter at least 2 numbers to sort.");
      return;
    }

    if (inputArray.length > 100) {
      setShowInputError(true);
      setInputErrorMessage(
        "Please enter at most 100 numbers for optimal visualization."
      );
      return;
    }

    // Clear any error
    setShowInputError(false);
    setInputErrorMessage("");

    // Use the input array
    setArray(inputArray);
    setOriginalArray([...inputArray]);
    resetSortState();
    setShowGraph(true);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Pre-compute all steps when algorithm or array changes
  useEffect(() => {
    if (array.length > 0 && !isRunning) {
      stepsRef.current = algorithmSteps[selectedAlgorithm].getSteps([...array]);
      stepIndexRef.current = 0;
    }
  }, [array, selectedAlgorithm, isRunning]);

  // Animation function
  const runNextStep = () => {
    // Clear any existing timeout
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Skip if paused or not running
    if (!isRunning || isPaused) {
      return;
    }

    // Check if we've reached the end
    if (stepIndexRef.current >= stepsRef.current.length) {
      setIsSorted(true);
      setIsRunning(false);
      return;
    }

    // Get current step
    const currentStep = stepsRef.current[stepIndexRef.current];

    // Update state with current step
    setArray(currentStep.array);
    setHighlights(currentStep.highlights);
    setActionType(currentStep.action);

    // Move to next step
    stepIndexRef.current++;

    // Schedule next step based on speed
    const delay = 101 - speed;
    timerRef.current = setTimeout(runNextStep, delay);
  };

  // Watch for changes in isRunning and isPaused to control animation
  useEffect(() => {
    if (isRunning && !isPaused) {
      runNextStep();
    }
  }, [isRunning, isPaused]);

  const handleControl = (action, value) => {
    switch (action) {
      case "start":
        if (!isRunning) {
          // Initial start
          setIsRunning(true);
          setIsPaused(false);
          setIsSorted(false);
          // If we're at the end, restart
          if (stepIndexRef.current >= stepsRef.current.length) {
            stepIndexRef.current = 0;
          }
        } else if (isPaused) {
          // Resume if paused
          setIsPaused(false);
        }
        break;

      case "pause":
        if (isRunning && !isPaused) {
          setIsPaused(true);
          // Important: clear the timer when pausing
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        }
        break;

      case "reset":
        // Stop any running animation
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setIsRunning(false);
        setIsPaused(false);
        setArray([...originalArray]);
        setHighlights([]);
        setActionType("");
        setIsSorted(false);
        stepIndexRef.current = 0;
        break;

      case "speed":
        setSpeed(Number(value));
        break;

      case "algorithm":
        if (!isRunning) {
          setSelectedAlgorithm(value);
          // Reset states when algorithm changes
          setIsSorted(false);
          setActionType("");
          stepIndexRef.current = 0;
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="w-full h-full p-4 flex flex-col items-center">
      <div className="p-6 rounded-3xl w-full max-w-6xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-2">
          Sorting Algorithm Visualizer
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">
              Algorithm: {algorithmSteps[selectedAlgorithm].name}
            </h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                Best case: {algorithmSteps[selectedAlgorithm].complexity.best}
              </div>
              <div>
                Average case:{" "}
                {algorithmSteps[selectedAlgorithm].complexity.average}
              </div>
              <div>
                Worst case: {algorithmSteps[selectedAlgorithm].complexity.worst}
              </div>
              <div>
                Space complexity:{" "}
                {algorithmSteps[selectedAlgorithm].complexity.space}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Select Algorithm</h2>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedAlgorithm}
                onChange={(e) => handleControl("algorithm", e.target.value)}
                disabled={isRunning}
                className="bg- border border-gray-300 px-3 py-1 rounded-md"
              >
                {Object.keys(algorithmSteps).map((key) => (
                  <option key={key} value={key}>
                    {algorithmSteps[key].name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* User Input Section */}
        <div className="p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold mb-2">Enter Custom Array</h2>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Enter comma-separated numbers (e.g., 5,3,8,6,2)"
              className="flex-grow border border-gray-300 px-3 py-2 rounded-md"
              disabled={isRunning}
            />
            <button
              onClick={handleUserInputSubmit}
              disabled={isRunning}
              className="px-2 py-3  text-white focus:outline-none bg-gradient-to-r from-purple-900 border border-gray-100 to-purple-500 rounded transition duration-300"
            >
              Generate Visualization
            </button>
          </div>
          {showInputError && (
            <div className="mt-2 text-red-500 text-sm">{inputErrorMessage}</div>
          )}
        </div>

        {showGraph && (
          <div className="mb-6">
            <Visualization
              array={array}
              originalArray={originalArray}
              highlights={highlights}
              speed={speed}
              isRunning={isRunning}
              isPaused={isPaused}
              isSorted={isSorted}
              actionType={actionType}
              onControl={handleControl}
            />
          </div>
        )}

        {showGraph && (
          <div className="text-center text-sm text-gray-500 mt-2">
            <p>
              Status:{" "}
              {isSorted
                ? "Sorted"
                : isPaused
                ? "Paused"
                : isRunning
                ? "Running"
                : "Ready"}
            </p>
            {actionType && <p>Current action: {actionType}</p>}
            <p>
              Steps: {stepIndexRef.current} / {stepsRef.current.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Visualization component using D3.js
const Visualization = ({
  array,
  originalArray,
  highlights,
  speed,
  isRunning,
  isPaused,
  isSorted,
  actionType,
  onControl,
}) => {
  const d3Container = useRef(null);

  // Color mapping for different actions
  const getActionColor = (action) => {
    switch (action) {
      case "compare":
        return "#FFB74D"; // Orange
      case "swap":
        return "#F44336"; // Red
      case "divide":
        return "#9C27B0"; // Purple
      case "place":
        return "#2196F3"; // Blue
      case "select":
        return "#4CAF50"; // Green
      case "shift":
        return "#FF9800"; // Orange
      case "newMin":
        return "#009688"; // Teal
      default:
        return "#3B82F6"; // Default blue
    }
  };

  useEffect(() => {
    if (array && d3Container.current) {
      const svg = d3.select(d3Container.current);
      svg.selectAll("*").remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 40 };
      const width =
        svg.node().getBoundingClientRect().width - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;

      const x = d3
        .scaleBand()
        .domain(d3.range(array.length))
        .range([0, width])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(array) * 1.1]) // Add 10% padding at the top
        .range([height, 0]);

      const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Draw bars
      g.selectAll(".bar")
        .data(array)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d, i) => x(i))
        .attr("y", (d) => y(d))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d))
        .attr("fill", (d, i) => {
          if (isSorted) return "#4CAF50";
          return highlights.includes(i)
            ? getActionColor(actionType)
            : "#3B82F6";
        });

      // Add values on top of bars (only for arrays with fewer elements)
      if (array.length <= 50) {
        g.selectAll(".bar-label")
          .data(array)
          .enter()
          .append("text")
          .attr("class", "bar-label")
          .attr("x", (d, i) => x(i) + x.bandwidth() / 2)
          .attr("y", (d) => y(d) - 5)
          .attr("text-anchor", "middle")
          .attr("font-size", "10px")
          .attr("fill", "#ffff")
          .text((d) => d);
      }

      // Add X axis (only show some tick marks for larger arrays)
      const xAxis = d3.axisBottom(x);
      if (array.length > 20) {
        xAxis.tickValues(x.domain().filter((d, i) => !(i % 5)));
      }
      g.append("g").attr("transform", `translate(0,${height})`).call(xAxis);

      // Add Y axis
      g.append("g").call(d3.axisLeft(y).ticks(5));

      // Add a legend if not sorted
      if (!isSorted && array.length > 0) {
        const legend = svg
          .append("g")
          .attr("transform", `translate(${width - 100}, 10)`);

        legend
          .append("rect")
          .attr("width", 15)
          .attr("height", 15)
          .attr("fill", "#3B82F6");

        legend
          .append("text")
          .attr("x", 20)
          .attr("y", 12.5)
          .attr("font-size", "10px")
          .attr("fill", "white")

          .text("Unsorted");

        if (actionType) {
          legend
            .append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .attr("fill", getActionColor(actionType))
            .attr("transform", "translate(0, 20)");

          legend
            .append("text")
            .attr("x", 20)
            .attr("y", 32.5)
            .attr("font-size", "10px")
            .attr("fill", "#fffff")

            .text(actionType.charAt(0).toUpperCase() + actionType.slice(1));
        }
      }
    }
  }, [array, highlights, isSorted, actionType]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="array-display w-full h-80 overflow-hidden">
        <svg ref={d3Container} width="100%" height="100%"></svg>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => onControl("start")}
            disabled={(isRunning && !isPaused) || isSorted}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {isPaused ? "Resume" : isSorted ? "Sorted" : "Start"}
          </button>

          <button
            onClick={() => onControl("pause")}
            disabled={!isRunning || isPaused}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:opacity-50"
          >
            Pause
          </button>

          <button
            onClick={() => onControl("reset")}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm whitespace-nowrap">Speed:</span>
          <input
            type="range"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => onControl("speed", e.target.value)}
            className="w-32"
          />
          <span className="text-sm">{speed}%</span>
        </div>
      </div>

      {isSorted && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
          Sort complete! Array is now sorted.
        </div>
      )}
    </div>
  );
};

export default SortingVisualizer;
