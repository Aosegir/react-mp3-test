//import { useState } from 'react'
import Data from './Data.jsx';
import './index.css';

function Locations() {
  return (
    <>
      <h1>Item List</h1>
      <div className="location-grid">
        {Data.map((location) => {
          console.log(location);
          return <div key={location.name} className="location">
            <h3>{location.name}</h3>
            {location.events.map((event) => {
              return <p key={event.name}>{event.name}</p>
            })}
          </div>
          
        })}
      </div>
    </>
  )
};

function App() {
  return (
    <Locations />
  )
}

export default App
