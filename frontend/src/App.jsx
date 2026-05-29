import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './routes/PrivateRoute'
import UploadResume from './pages/UploadResume'
import JobDescription from "./pages/JobDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*  PROTECTED ROUTE */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/job-description"element={<JobDescription />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App