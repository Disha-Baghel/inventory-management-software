import { useState } from 'react'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className='App'>

      <h1>HELLO WORLD</h1>

      <UpdateElectron />
    </div>
  )
}

export default App