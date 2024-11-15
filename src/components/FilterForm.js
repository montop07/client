import React, { useState } from 'react';
import axios from 'axios';
import FilterResults from './FilterResults';

const FilterForm = () => {
  const [filters, setFilters] = useState({
    total_spending: '',
    minVisits: '',
    monthsAgo: '',
    visits: '',
    dateLimit: '',
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await axios.post('http://localhost:5000/api/filter', filters);
      setResults(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Customer Filter</h1>
      <div style={styles.formContainer}>
        <label style={styles.label}>Total Spending (greater than):</label>
        <input
          type="number"
          name="total_spending"
          value={filters.total_spending}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Minimum Visits:</label>
        <input
          type="number"
          name="minVisits"
          value={filters.minVisits}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Months Ago:</label>
        <input
          type="number"
          name="monthsAgo"
          value={filters.monthsAgo}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Visits:</label>
        <input
          type="number"
          name="visits"
          value={filters.visits}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Date Limit:</label>
        <input
          type="date"
          name="dateLimit"
          value={filters.dateLimit}
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.buttonContainer}>
          <button onClick={handleSubmit} style={styles.button}>
            Apply Filters
          </button>
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <FilterResults results={results} />
    </div>
  );
};

const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
  heading: { textAlign: 'center', color: '#333' },
  formContainer: { margin: '20px auto', maxWidth: '400px' },
  label: { display: 'block', marginBottom: '8px', fontWeight: 'bold' },
  input: { width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' },
  buttonContainer: { display: 'flex', justifyContent: 'center' },
  button: { padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', margin: '5px' },
  error: { color: 'red', textAlign: 'center' },
};

export default FilterForm;
