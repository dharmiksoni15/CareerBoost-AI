import React from 'react'

function Navbar() {
  return (
    <div style={{
      height: "60px",
      background: "white",
      borderBottom: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px"
    }}>

      <h3>Dashboard</h3>

      <button
        onClick={() => {
          localStorage.removeItem("token")
          window.location.href = "/login"
        }}
        style={{
          padding: "8px 12px",
          background: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar