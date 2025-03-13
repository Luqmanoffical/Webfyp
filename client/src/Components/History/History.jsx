import React, { useEffect, useState } from "react";

function History() {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date";
    }
    return date.toLocaleString();  // Convert to a readable format
  };

  useEffect(() => {
    // Get email from localStorage
    const email = localStorage.getItem("Email");

    if (!email) {
      // Redirect or handle no email in localStorage
      setError("Email not found in localStorage.");
      setLoading(false);
      return;
    }

    // API call to fetch the data
    const fetchData = async () => {
      try {

        const url = `http://localhost:3000/api/Getsorting/email=${encodeURIComponent(email)}`;
        const response = await fetch(url, {
          method: "GET", // Assuming a POST request
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result.data); // Assume the API response has a 'data' field
      } catch (error) {
        setError(error.message); // Set error if API fails
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  // Render loading, error, or the table
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    
    <div>
      <h1>History</h1>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Algorithm</th>
              <th>Array Data</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item, index) => {
              // Log the array_data to see its value before parsing
              console.log("Item array_data:", item);

              let arrayDataFormatted = [];

              // Check if array_data is a stringified JSON array
              try {
                if (typeof item.array_data === "string") {
                  // Attempt to parse the string into an array
                  arrayDataFormatted = JSON.parse(item.array_data);
                } else if (Array.isArray(item.array_data)) {
                  // If it's already an array, use it directly
                  arrayDataFormatted = item.array_data;
                }
              } catch (e) {
                console.error("Error parsing array_data:", e);
                arrayDataFormatted = ["Invalid data"]; // Fallback if parsing fails
              }

              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.algorithm}</td>
                  {/* Render array_data as comma-separated values */}
                  <td>{item.array.join(", ")}</td>
                  <td>{formatDate(item.createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}

export default History;
