import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';

const supabaseUrl = 'https://qbdzfatkmhkvmutgjayw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZHpmYXRrbWhrdm11dGdqYXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MzYxNjUsImV4cCI6MjAwNDMxMjE2NX0.4Q5YSOKzrhAKGF-aA76eukhJY88I8i5sC6lQ31VqbnI';

const supabase = createClient(supabaseUrl, supabaseKey);

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    try {
      const { data, error } = await supabase.from('resume_table').select();

      if (error) {
        console.error('Error fetching table data:', error);
      } else {
        setTableData(data);
      }
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const handleDeleteRecord = async (recordId) => {
    try {
      const { data, error } = await supabase
        .from('resume_table')
        .delete()
        .eq('id', recordId);

      if (error) {
        console.error('Error deleting record:', error);
      } else {
        console.log('Record deleted successfully:', data);
        fetchTableData(); // Fetch updated table data after deletion
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const renderTableData = () => {
    if (tableData.length === 0) {
      return (
        <tr>
          <td colSpan="3">No records found</td>
        </tr>
      );
    }

    return tableData.map((record) => (
      <tr key={record.id}>
        <td>{record.id}</td>
        <td>{record.name}</td>
        <td>{record.vorname}</td>
        {/* ... Render table cells for each column in your table */}
        <td>
          <button onClick={() => handleDeleteRecord(record.id)}>Delete</button>
        </td>
        <td>
          <Link to={`/record/${record.id}`}>Show</Link>
        </td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Vorname</th>
          {/* ... Add more table headers for each column in your table */}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default TableComponent;
