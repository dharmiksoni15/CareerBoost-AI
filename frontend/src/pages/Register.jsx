import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password
    }

    const response = await api.post('/auth/register', payload)

    console.log("REGISTER SUCCESS:", response.data)

    navigate('/login')

  } catch (error) {
    console.log("REGISTER ERROR:", error.response?.data || error.message)
  }
}

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Register Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <br /><br />

        <button>Register</button>
      </form>
    </div>
  )
}

export default Register 