//import { useState } from 'react'
import Data from './Data.jsx';

function App() {
  console.log(Data);
  return (
    <>
      <h1>Hello Odin</h1>
      <ol>
        <h2>Item List</h2>
        {Data.map((location) => {
          console.log(location);
          return <div key={location.name}>
            <h3>{location.name}</h3>
            {location.events.map((event) => {
              return <p key={event.name}>{event.name}</p>
            })}
          </div>
          
        })}
      </ol>
    </>
  )
}

export default App
