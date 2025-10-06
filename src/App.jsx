import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Incidents from './pages/Incidents'
import CreateIncident from './pages/CreateIncident'

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen'>
        <Navbar title='Disaster management' />
        <main className='p-4'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/incidents' element={<Incidents />} />
            <Route path='/incidents/new' element={<CreateIncident />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
