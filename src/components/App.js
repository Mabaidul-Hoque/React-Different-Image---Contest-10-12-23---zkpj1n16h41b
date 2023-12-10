import React from 'react'
import '../styles/App.css';

const GIF = () => {
  return (
    <img className='import-image' height={200}/>
  )
}

const App = () => {

  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF />
      <img className='url-image' />
    </div>
  )
}


export default App;
