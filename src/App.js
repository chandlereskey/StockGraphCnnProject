import TickerInput from "./TickerInput";
import { useState } from "react";

function App() {

  const [ticker, setTicker] = useState('');

  const hitApiEndPoint = (tickerValue) => {
    console.log(tickerValue);
  }

  return (
    <>
    <TickerInput ticker={ticker} setTicker={setTicker} />
    <button onClick={() => hitApiEndPoint(ticker)}>Submit</button>
    </>

  )
}

export default App;
