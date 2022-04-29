import React, { useState } from 'react';

const TickerInput = (props) => {
  const { ticker, setTicker } = props

    

  return (
    <input
      className="rounded-md w-full border border-gray-400 p-3 mb-5"
      onChange={ e => setTicker(e.target.value) }
      placeholder='Please Enter Ticker'
      value={ticker}
    />
  );
};

export default TickerInput;