import { Routes, Route } from 'react-router-dom';
import Rome from './Rome';
import TableComponent from './TableComponent';
import RecordPage from './RecordPage';
import { createClient } from '@supabase/supabase-js';
import EditRecord from './EditRecord';

const supabaseUrl = 'https://qbdzfatkmhkvmutgjayw.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZHpmYXRrbWhrdm11dGdqYXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MzYxNjUsImV4cCI6MjAwNDMxMjE2NX0.4Q5YSOKzrhAKGF-aA76eukhJY88I8i5sC6lQ31VqbnI";

const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const handleSubmit = async (formData) => {
    try {
      const { data: resultData, error } = await supabase
        .from('resume_table') // Replace 'your_table_name' with the actual table name
        .insert([formData]);

      if (error) {
        console.error('Error inserting data:', error);
        // Handle the error, such as showing an error message to the user
      } else {
        console.log('Data inserted successfully:', resultData);
        // Handle the successful insertion, such as showing a success message to the user
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle any other errors that occur during the insertion
    }
  };

  return (
    <>
      <Routes>
        <Route path="/to" element={<Rome onSubmit={handleSubmit} />} />
        <Route path="/fetch" element={<TableComponent />} />
        <Route path="/record/:id" element={<RecordPage />} />
        <Route path="/edit/:id" element={<EditRecord />} />
      </Routes>
    </>
  );
};

export default App;
