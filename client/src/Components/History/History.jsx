// import React, { useEffect, useState } from "react";

// function History() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState("");

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     if (isNaN(date)) {
//       return "Invalid Date";
//     }
//     return date.toLocaleString();
//   };

//   useEffect(() => {
//     const email = localStorage.getItem("Email");

//     if (!email) {
//       setError("Email not found in localStorage.");
//       setLoading(false);
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         const url = `http://localhost:3000/api/Getsorting/email=${encodeURIComponent(
//           email
//         )}`;
//         const response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         const result = await response.json();
//         setData(result.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>History</h1>
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Algorithm</th>
//               <th>Array Data</th>
//               <th>Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => {
//               console.log("Item array_data:", item);

//               let arrayDataFormatted = [];

//               try {
//                 if (typeof item.array_data === "string") {
//                   arrayDataFormatted = JSON.parse(item.array_data);
//                 } else if (Array.isArray(item.array_data)) {
//                   arrayDataFormatted = item.array_data;
//                 }
//               } catch (e) {
//                 console.error("Error parsing array_data:", e);
//                 arrayDataFormatted = ["Invalid data"];
//               }

//               return (
//                 <tr key={index}>
//                   <td>{item.id}</td>
//                   <td>{item.algorithm}</td>
//                   <td>{item.array.join(", ")}</td>
//                   <td>{formatDate(item.createdAt)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         <div>No data available.</div>
//       )}
//     </div>
//   );
// }

// export default History;

import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Header";
function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "Invalid Date" : date.toLocaleString();
  };

  useEffect(() => {
    const email = localStorage.getItem("Email");

    if (!email) {
      setError("Email not found in localStorage.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const url = `http://localhost:3000/api/Getsorting/email=${encodeURIComponent(
          email
        )}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-screen">
        <h1 className="text-2xl font-semibold mb-4  text-white">History</h1>
        {data.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full  text-sm rounded shadow-md overflow-hidden">
              <thead className="bg-zinc-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Algorithm</th>
                  <th className="px-4 py-2 text-left">Array Data</th>
                  <th className="px-4 py-2 text-left">Created At</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  let arrayDataFormatted = [];

                  try {
                    if (typeof item.array_data === "string") {
                      arrayDataFormatted = JSON.parse(item.array_data);
                    } else if (Array.isArray(item.array_data)) {
                      arrayDataFormatted = item.array_data;
                    }
                  } catch (e) {
                    arrayDataFormatted = ["Invalid data"];
                  }

                  return (
                    <tr key={index} className="border-b ">
                      <td className="px-4 py-2">{item.id}</td>
                      <td className="px-4 py-2">{item.algorithm}</td>
                      <td className="px-4 py-2">{item.array.join(", ")}</td>
                      <td className="px-4 py-2">
                        {formatDate(item.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-white">No data available.</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default History;
