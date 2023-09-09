import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';


function ResultComponent() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputValue = searchParams.get('value');

  return (
    <div>
      <Typography variant="h6">Result:</Typography>
      <Typography>{inputValue}</Typography>
    </div>
  );
}

export default ResultComponent;
