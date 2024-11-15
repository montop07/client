import React, { useState } from 'react';
import FilterForm from './components/FilterForm';
import FilterResults from './components/FilterResults';

const App = () => {
  const [results, setResults] = useState([]);

  const fetchFilteredData = async (filters) => {
    try {
      const response = await fetch('/api/filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filters),
      });
      const data = await response.json();
      setResults(data); // Update results with the response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <FilterForm onFilterSubmit={fetchFilteredData} />
      <FilterResults results={results} />
    </div>
  );
};

export default App;
