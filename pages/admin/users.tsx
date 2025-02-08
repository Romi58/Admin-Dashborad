"use client"

import type React from "react"
import { useState, useEffect } from "react"
import AdminLayout from "../../components/admin/AdminLayout"

interface User {
  id: number
  name: string
  email: string
  role: string
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => setUsers(data))
      .catch((e) => {
        console.error("Error fetching users:", e)
        setError("Failed to load users. Please try again later.")
      })
  }, [])

  const handleDeleteUser = (userId: number) => {
    // Implement delete functionality
    console.log(`Delete user with id: ${userId}`)
  }

  if (error) {
    return (
      <AdminLayout>
        <h1>User Management</h1>
        <p>{error}</p>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  )
}

export default UserManagement

