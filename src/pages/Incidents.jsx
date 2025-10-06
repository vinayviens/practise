import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'

const Incidents = () => {
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    api.listIncidents().then((data) => {
      if (mounted) setIncidents(data)
      setLoading(false)
    })
    return () => (mounted = false)
  }, [])

  const handleDelete = async (id) => {
    await api.deleteIncident(id)
    setIncidents((s) => s.filter((i) => i.id !== id))
  }

  return (
    <div className='container'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-bold'>Incidents</h2>
        <Link to='/incidents/new' className='btn-primary'>Create new</Link>
      </div>

      {loading ? (
        <p className='muted'>Loading...</p>
      ) : incidents.length === 0 ? (
        <div className='card-bg p-4'>
          <p>No incidents yet. Create one to get started.</p>
        </div>
      ) : (
        <ul className='space-y-3'>
          {incidents.map((inc) => (
            <li key={inc.id} className='card-bg p-4 flex justify-between items-start'>
              <div>
                <div className='font-semibold'>{inc.title}</div>
                <div className='text-sm muted'>{inc.description}</div>
              </div>
              <div className='flex gap-2'>
                <button onClick={() => handleDelete(inc.id)} className='text-red-400 hover:text-red-300'>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Incidents
