import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Quote from "./components/Quote";
import Error from "./components/Error";


const initialQuote = {
  author: '',
  text: ''
}

function App() {
  const [quote, setQuote] = useState(initialQuote)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const url_base = 'https://www.breakingbadapi.com/api/'
  const quote_ramdom = 'quote/random'
  const getQuote = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${url_base}${quote_ramdom}`)
      const [data] = await res.json()
      const { quote: text, author } = data
      setLoading(false)
      setQuote({ text, author })

      console.log(data);


    } catch (error) {
      setError('Error al cargar una frase')
      setLoading(false)
    }
  }
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={getQuote}>get another</button>
      {
        loading ? <Loading />
          : <Quote quote={quote} />

      }
      {
        error && <Error error={error} />
      }
    </div>
  );
}

export default App;
