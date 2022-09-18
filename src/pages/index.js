import * as React from "react"
import { useState } from 'react';
import "../styles/index.css"
import { advice } from '../../public/static/advice.js';

const IndexPage = () => {
  const [currentQuote, setCurrentQuote] = useState(advice[Math.floor(Math.random() * advice.length)]);

  const randomQuote = (e) => { 
    e.preventDefault();
    setCurrentQuote(advice[Math.floor(Math.random() * advice.length)]);
   }

  return (
    <div className="main">
      <div className="content">        
        <h2>{currentQuote}</h2>
          <button onClick={randomQuote}>More Advice</button>
          {/* <ul>
            {advice.map((quote: string) => {
              return <li>{quote}</li>
            })}
          </ul> */}
          <br />
          <p>Source: <a href="http://kk.org">Kevin Kelly</a></p>
          <a href="https://kk.org/thetechnium/68-bits-of-unsolicited-advice/">68 Bits of Unsolicited Advice</a>
          <br />
          <a href="https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/">99 Additional Bits of Unsolicited Advice</a>
          <br />
          <a href="https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/">103 Bits of Advice I Wish I Had Known</a>
        </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Pieces of Advice</title>
