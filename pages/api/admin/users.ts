import type { NextApiRequest, NextApiResponse } from "next"

type User = {
  id: number
  name: string
  email: string
  role: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<User[] | { error: string }>) {
  try {
    // In a real application, you would fetch this data from your database
    const users: User[] = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
    ]

    res.status(200).json(users)
  } catch (error) {
    console.error("Error in /api/admin/users:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

