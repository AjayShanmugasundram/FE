import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
      <div>
    <div>Dashboard</div>
    <Link to="/home"><Button variant="contained">Go to Home</Button></Link>
    </div>

  )
}
