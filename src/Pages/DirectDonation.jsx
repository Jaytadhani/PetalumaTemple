import React, { useState } from "react"
import Layout from "../Components/Layout"

const DirectDonation = () => {
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    amount: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setDonorInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleDonate = async (e) => {
    e.preventDefault()
    // TODO: Implement Square Payment API integration
    console.log("Processing donation:", donorInfo)
    // After successful payment, you can clear the form or redirect the user
  }

  return (
    <Layout>
    <div className="bg-white rounded-lg shadow-xl my-20 p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-800 mb-6 text-center">Make a Direct Donation</h1>
      <p className="text-gray-600 mb-8 text-center">
        Your generosity helps us maintain our temple and support our community programs.
      </p>
      <form onSubmit={handleDonate} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={donorInfo.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={donorInfo.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={donorInfo.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={donorInfo.address}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={donorInfo.amount}
            onChange={handleInputChange}
            required
            min="1"
            step="0.01"
            className="w-full p-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
        >
          Make Donation
        </button>
      </form>
    </div>
    </Layout>
  )
}

export default DirectDonation

