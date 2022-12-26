import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(" ");
  const [auther, setAuther] = useState(" ");

  //API Integration
  useEffect(
    ()=>{
      fetch("http://api.quotable.io/random")
       .then(res => res.json())
       .then(
        (quote) => {
          setQuote(quote.content);
          setAuther(quote.author);
          
        }
       )
    }, []);

    let newQote = () =>{
      fetch("http://api.quotable.io/random")
       .then(res => res.json())
       .then(
        (quote) => {
          setQuote(quote.content);
          setAuther(quote.author);
          
        })

    }
  return (
    <div className="App" >
      <div className="quote" >
        <h2> {quote}</h2>
        <small>-{auther}-</small>
      </div><br />
      <button className="btn" onClick={newQote}>Generate New quote</button>
    </div>
  );
}

export default App;
