import React from 'react'
import '../styles/App.css';
import programmingGif from '../assets/programming.gif';

const GIF = () => {
  return (
    <img className='import-image'
      src={programmingGif}
      alt='programming-gif'
      height={200}/>
  )
}

const App = () => {
  const randomImage = "https://picsum.photos/id/400/200";
  return (
    <div id="main">
      <h1>Add images in 2-different ways.</h1>
      <GIF />
      <img className='url-image' src={randomImage} alt='A random image' />
    </div>
  )
}


export default App;
