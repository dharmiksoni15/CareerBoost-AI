import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
  const res = await api.post("/auth/login", form);
  // wait for context login to persist state
  await login({ token: res.data.token, user: res.data.user });
  // navigate after login has updated storage/context
  navigate("/dashboard");
    } catch (error) {
  console.error("LOGIN ERROR:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020f2d] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl text-white text-center mb-4">Login</h1>

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 mb-4 rounded-xl bg-white/10 text-white" />

        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-3 mb-6 rounded-xl bg-white/10 text-white" />

        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-xl disabled:opacity-60">{loading ? "Logging in..." : "Login"}</button>

        <p className="text-center text-gray-300 mt-4">No account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;