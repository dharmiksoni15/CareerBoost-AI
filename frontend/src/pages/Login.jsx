import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
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
        email: form.email,
        password: form.password
      }

      const response = await api.post('/auth/login', payload)

      console.log("LOGIN SUCCESS:", response.data)

      // 🔥 TOKEN SAVE
      localStorage.setItem("token", response.data.token)

      // redirect to dashboard
      navigate('/dashboard')

    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data || error.message)
    }
  }

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
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

        <button>Login</button>
      </form>
    </div>
  )
}

export default Login