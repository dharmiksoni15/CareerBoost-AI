import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './routes/PrivateRoute'
import UploadResume from './pages/UploadResume'
import JobDescription from "./pages/JobDescription";
import AIAnalysis from "./pages/AIAnalysis";

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

       <Route
  path="/upload-resume"
  element={
    <PrivateRoute>
      <UploadResume />
    </PrivateRoute>
  }
/>

<Route
  path="/job-description"
  element={
    <PrivateRoute>
      <JobDescription />
    </PrivateRoute>
  }
/>

<Route
  path="/ai-analysis"
  element={
    <PrivateRoute>
      <AIAnalysis />
    </PrivateRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  )
}

export default App