import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [time, setTime] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
  }, []
  
  )

  return (
    <>
        <div>{time}</div>
    </>
  );
}

export default App;
