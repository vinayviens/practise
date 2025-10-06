import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <header className='border-b border-white/6 backdrop-blur-sm bg-black/30 sticky top-0 z-40'>
      <div className='container flex items-center justify-between h-16'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-md bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-black font-bold'>DM</div>
          <div>
            <div className='text-lg font-semibold'>{props.title}</div>
            <div className='text-xs muted'>Practice backend integrations</div>
          </div>
        </div>

        <nav>
          <ul className='flex gap-4 items-center'>
            <li>
              <Link to='/' className='muted hover:accent'>Dashboard</Link>
            </li>
            <li>
              <Link to='/incidents' className='muted hover:accent'>Incidents</Link>
            </li>
            <li>
              <Link to='/incidents/new' className='btn-primary'>Create</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
