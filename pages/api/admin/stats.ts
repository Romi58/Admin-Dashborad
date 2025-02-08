import type { NextApiRequest, NextApiResponse } from "next"

type Stats = {
  totalUsers: number
  totalProducts: number
  totalOrders: number
  revenue: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Stats | { error: string }>) {
  try {
    // In a real application, you would fetch this data from your database
    const stats: Stats = {
      totalUsers: 1234,
      totalProducts: 567,
      totalOrders: 890,
      revenue: 12345,
    }

    res.status(200).json(stats)
  } catch (error) {
    console.error("Error in /api/admin/stats:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

