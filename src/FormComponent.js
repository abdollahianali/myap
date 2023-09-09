import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function FormComponent() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/result?value=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter a value"
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FormComponent;
