import React, { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qbdzfatkmhkvmutgjayw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZHpmYXRrbWhrdm11dGdqYXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3MzYxNjUsImV4cCI6MjAwNDMxMjE2NX0.4Q5YSOKzrhAKGF-aA76eukhJY88I8i5sC6lQ31VqbnI';

const supabase = createClient(supabaseUrl, supabaseKey);
const EditRecord = () => {
    const { id } = useParams();
    const history = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    vorname: '',
    // Add other fields that you want to edit
  });

  useEffect(() => {
    fetchRecordData();
  }, []);

  const fetchRecordData = async () => {
    try {
      const { data, error } = await supabase
        .from('resume_table')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching record data:', error);
      } else {
        setFormData(data);
      }
    } catch (error) {
      console.error('Error fetching record data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('resume_table')
        .update(formData)
        .eq('id', id);

      if (error) {
        console.error('Error updating record:', error);
      } else {
        console.log('Record updated successfully:', data);
        history.push('/fetch'); // Redirect to the table component after successful update
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  return (
    <div>
      <h2>Edit Record</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Vorname:</label>
          <input
            type="text"
            name="vorname"
            value={formData.vorname}
            onChange={handleInputChange}
          />
        </div>
        {/* Add other input fields for the record fields you want to edit */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditRecord;
