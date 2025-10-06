import React from 'react'

const Dashboard = () => {
  return (
    <div className='container'>
      <div className='card-bg mb-6'>
        <div className='hero'>
          <div>
            <h1 className='text-2xl font-bold'>Welcome to the Disaster Management demo</h1>
            <p className='muted'>A small playground to practice building and integrating a backend.</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='card-bg p-4'>
          <div className='text-sm muted'>Open Incidents</div>
          <div className='text-2xl font-bold'>—</div>
        </div>
        <div className='card-bg p-4'>
          <div className='text-sm muted'>Resolved (demo)</div>
          <div className='text-2xl font-bold'>—</div>
        </div>
        <div className='card-bg p-4'>
          <div className='text-sm muted'>Integrations</div>
          <div className='text-2xl font-bold'>1 mock API</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
