//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom/client'
import asabenehImage from "./images/asabeneh.jpg"


// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaArray = []

for(let i = 0; i < 50; i++){
  HexaArray.push(hexaColor())
}

const ColorDiv = ()=> HexaArray.map(x=>
<div style={{ 
  textAlign: 'center', 
  padding:'30px', 
  backgroundColor:x, 
  color: 'white', 
  fontFamily:'Arial, sans-serif', 
  fontWeight:'bold'}}> 
    {x} 
  </div>)

const HexaStack = 0

// JSX element, app
const App = () => (
  <div className='App'>
    <ColorDiv />
  </div>
)

// we render the App component using the ReactDOM package
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)