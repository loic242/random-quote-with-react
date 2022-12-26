import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("Hello");
  const [auther, setAuther] = useState("World");
  return (
    <div className="App" >
      <div className="quote" >
        <h2> {quote}</h2>
        <small>-{auther}-</small>
      </div><br />
      <button className="btn">Generate New quote</button>
    </div>
  );
}

export default App;
