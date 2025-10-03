"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      setMessage("Error: " + error.message)
    } else {
      setMessage("Success! Logged in.")
      console.log(data)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      setMessage("Error: " + error.message)
    } else {
      setMessage("Check your email for confirmation.")
      console.log(data)
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h1>Login / Sign Up</h1>
<form suppressHydrationWarning>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    style={{ display: "block", marginBottom: "10px", width: "100%" }}
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{ display: "block", marginBottom: "10px", width: "100%" }}
  />
  <button type="button" onClick={handleLogin} style={{ marginRight: 10 }}>
  Login
</button>
<button type="button" onClick={handleSignup}>
  Sign Up
</button>

</form>

      {message && <p>{message}</p>}
    </div>
  )
}
