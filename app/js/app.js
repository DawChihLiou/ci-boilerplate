import React from 'react'
import { Link } from 'react-router'


const App = ({ children }) => (
  <div>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">about</Link>
    {children}
  </div>
)

export default App
