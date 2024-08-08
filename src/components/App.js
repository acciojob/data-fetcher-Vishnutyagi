import React, { useEffect } from "react";
import './../styles/App.css';
// import axios from "axios";
import { useState } from "react";
import 'regenerator-runtime/runtime';
import 'text-encoding';


const api = "https://dummyjson.com/products";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        setData(JSON.stringify(response)); 
        console.log(JSON.stringify(response));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;