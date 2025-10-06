import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const CreateIncident = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await api.createIncident({ title, description })
      navigate('/incidents')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className='container'>
      <div className='card-bg p-6 max-w-2xl'>
        <h2 className='text-2xl font-bold mb-4'>Create Incident</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium muted mb-1'>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='form-input w-full' required />
          </div>
          <div>
            <label className='block text-sm font-medium muted mb-1'>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='form-input w-full' rows={5} required />
          </div>
          <div className='flex items-center gap-3'>
            <button type='submit' disabled={saving} className='btn-primary'>
              {saving ? 'Saving...' : 'Create'}
            </button>
            <button type='button' onClick={() => navigate('/incidents')} className='px-3 py-2 rounded border border-white/6 muted'>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateIncident
