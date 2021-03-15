import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const url_base = 'https://www.breakingbadapi.com/api/'
  const quote_ramdom = 'quote/random'
  const getQuote = async () => {
    const res = await fetch(`${url_base}${quote_ramdom}`)
    const data = await res.json()
    console.log(data);

  }
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
