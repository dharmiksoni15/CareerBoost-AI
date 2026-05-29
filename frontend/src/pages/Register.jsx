import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("REGISTER DATA:", form)

    // ✅ IMPORTANT FIX:
    // register complete thay pachi login par redirect
    navigate('/login')
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