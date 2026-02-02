import { useState } from 'react'
import bySolitdioLogo from './assets/logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
      
        <a href="https://bysolitdio.com" target="_blank">
          <img src={bySolitdioLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to byShop</h1>
      <div className="card">
        <Link className='btn' to="/shop">
          Shop
        </Link>
        <p>
          This website is a Demo project.
        </p>
      </div>
      <p className="read-the-docs">
        Click on bySolitdio logo to learn more
      </p>
    </>
  )
}

export default App
