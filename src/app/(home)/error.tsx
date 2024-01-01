"use client"

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
  
  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <div>
      <p>Error</p>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
