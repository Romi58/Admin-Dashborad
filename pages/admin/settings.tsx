"use client"

import type React from "react"
import { useState } from "react"
import AdminLayout from "../../components/admin/AdminLayout"

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: "My E-commerce Store",
    contactEmail: "contact@example.com",
    shippingFee: 10,
    freeShippingThreshold: 50,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the settings to your backend
    console.log("Settings saved:", settings)
    alert("Settings saved successfully!")
  }

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
            Site Name
          </label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
            Contact Email
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shippingFee" className="block text-sm font-medium text-gray-700">
            Shipping Fee ($)
          </label>
          <input
            type="number"
            id="shippingFee"
            name="shippingFee"
            value={settings.shippingFee}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="freeShippingThreshold" className="block text-sm font-medium text-gray-700">
            Free Shipping Threshold ($)
          </label>
          <input
            type="number"
            id="freeShippingThreshold"
            name="freeShippingThreshold"
            value={settings.freeShippingThreshold}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Settings
        </button>
      </form>
    </AdminLayout>
  )
}

export default SettingsPage

