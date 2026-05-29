import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("LOGIN DATA:", form)

   
    navigate('/dashboard')
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