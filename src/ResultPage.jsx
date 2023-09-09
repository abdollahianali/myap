import React, { useEffect, useState } from 'react';

const ResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch the data from Firebase
    // Replace "firebaseRef" with the reference to your Firebase database

    firebaseRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.values(data);
        setResults(dataArray);
      }
    });
  }, []);

  return (
    <div>
      <h1>Results</h1>
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.name}</h2>
          <p>Email: {result.email}</p>
          <p>Message: {result.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultPage;
