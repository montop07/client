import React from 'react';

const FilterResults = ({ results }) => {
  if (results.length === 0) return null; // Render nothing if results are empty

  return (
    <div style={styles.resultsContainer}>
      <h2 style={styles.heading}>Filter Results</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Visits</th>
            <th style={styles.th}>Total Spending</th>
          </tr>
        </thead>
        <tbody>
          {results.map((customer) => (
            <tr key={customer._id}>
              <td style={styles.td}>{customer.name}</td>
              <td style={styles.td}>{customer.email}</td>
              <td style={styles.td}>{customer.visits}</td>
              <td style={styles.td}>{customer.total_spending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Define styles for various elements within FilterResults
const styles = {
  resultsContainer: {
    marginTop: '20px',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  th: {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  },
};

export default FilterResults;
