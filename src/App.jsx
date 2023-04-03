import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
    <h2 className='text-7xl font-semibold text-purple-500'>this is new customization</h2>
    <PriceList/>
    <Dashboard></Dashboard>
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App;
