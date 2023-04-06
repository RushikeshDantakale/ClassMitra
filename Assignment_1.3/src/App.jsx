import { useState } from 'react'

import './App.css'

function App() {
  
  const stringArray = ["my  name is rushikesh " , "my age is 23" , "I studied computer Science at SES Polytechnic ,Solapur" , "I live in Akkalkot."]

  return (
    <div className="App">
    <ul>
      {
        stringArray.map((ele , index)=>{
          return (<li className='string'>{ele}</li>);
        })
      }
      </ul>
    </div>
  )
}

export default App
