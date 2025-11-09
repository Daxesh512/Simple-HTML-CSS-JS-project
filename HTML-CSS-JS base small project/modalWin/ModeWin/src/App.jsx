import { useState } from 'react'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <h2>Модальное окно</h2>
        <button onClick={() => setOpen(true)}>Открыть</button>
      </div>
      <div className={`modal hidden ${open ? 'show' : ''}`}>
        <img src='https://media.giphy.com/media/tHIRLHtNwxpjIFqPdV/giphy.gif?cid=790b7611zbkjrk5zy65p9nmw7w3j5nih1m5p8o2la7x2g0nh&ep=v1_gifs_trending&rid=giphy.gif&ct=g'/>
        <button onClick={() => setOpen(false)}>Закрыть</button>
      </div>
    </>
  )
}

export default App
