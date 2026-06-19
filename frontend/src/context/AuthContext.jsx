import React, { createContext, useState, useEffect } from 'react'

// Context to expose authentication state and helpers across the app
export const AuthContext = createContext({ token: null, user: null, login: () => {}, logout: () => {} })

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('user')
      return raw ? JSON.parse(raw) : null
    } catch (e) {
      return null
    }
  })

  useEffect(() => {
    // keep localStorage and context in sync
    if (token) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
  }, [token])

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  }, [user])

  // login returns a promise so callers can await navigation after calling login
  const login = async ({ token: t, user: u }) => {
    // persist immediately to localStorage to avoid race with navigation
    try {
      if (t) localStorage.setItem('token', t)
      if (u) localStorage.setItem('user', JSON.stringify(u))
    } catch (e) {
      // ignore storage errors
    }
    setToken(t)
    setUser(u)
    return Promise.resolve()
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
