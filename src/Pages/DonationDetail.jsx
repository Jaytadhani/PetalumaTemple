import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Layout from '../Components/Layout'

const dummyCauses = [
  {
    id: 1,
    name: "Temple Renovation",
    requiredAmount: 100000,
    collectedAmount: 65000,
    image: 'https://images.unsplash.com/photo-1538460120076-604b93a2ce88?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description:
      "Our ancient temple, a beacon of spirituality for centuries, is in need of restoration. This project aims to preserve its architectural beauty while ensuring it remains a safe and inspiring place of worship for generations to come. Your donation will contribute to structural repairs, artistic restorations, and modern amenities that respect the temple's historical significance.",
    benefits: [
      "Preserve cultural heritage",
      "Enhance safety for worshippers",
      "Restore ancient artworks",
      "Improve accessibility",
    ],
  },
  {
    id: 2,
    name: "Community Kitchen",
    requiredAmount: 50000,
    collectedAmount: 30000,
    image: 'https://images.unsplash.com/photo-1609139027234-57570f43f692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description:
      "Our community kitchen serves as a lifeline for many, providing nourishing meals to those in need. This initiative embodies the spirit of service that our temple stands for. Your contribution will help us expand our capacity, upgrade our facilities, and reach more people in our community who are facing food insecurity.",
    benefits: ["Feed the hungry", "Foster community bonds", "Promote health and well-being", "Support local farmers"],
  },
  {
    id: 3,
    name: "Educational Programs",
    requiredAmount: 75000,
    collectedAmount: 45000,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description:
      "Education is the key to preserving and spreading our rich cultural and spiritual heritage. Our educational programs offer classes on ancient texts, meditation, yoga, and more. Your donation will help us develop new courses, provide scholarships, and create digital learning resources to reach a global audience interested in our teachings.",
    benefits: [
      "Preserve ancient wisdom",
      "Provide spiritual guidance",
      "Offer scholarships to students",
      "Develop online learning platforms",
    ],
  },
]

const DonationDetail = () => {
  const { id } = useParams()
  const [cause, setCause] = useState(null)
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")

  useEffect(() => {
    const selectedCause = dummyCauses.find((c) => c.id === Number.parseInt(id))
    setCause(selectedCause)
  }, [id])

  const handleDonate = async (e) => {
    e.preventDefault()
    const finalAmount = customAmount || donationAmount
    // TODO: Implement Square Payment API integration
    console.log("Processing donation:", { causeId: cause.id, amount: finalAmount })
    // After successful payment, you can update the cause's collected amount or redirect the user
  }

  if (!cause) {
    return <div className="text-center text-2xl text-orange-800">Loading...</div>
  }

  return (
    <Layout>
    <div className="bg-white rounded-lg shadow-xl p-8 my-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-orange-800 mb-6">{cause.name}</h1>
      <img
        src={cause.image || "/placeholder.svg"}
        alt={cause.name}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">About This Cause</h2>
          <p className="text-gray-700 mb-4">{cause.description}</p>
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Benefits</h3>
          <ul className="list-disc list-inside text-gray-700">
            {cause.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="bg-orange-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Donation Progress</h3>
            <p className="text-gray-700 mb-2">Goal: ${cause.requiredAmount.toLocaleString()}</p>
            <p className="text-gray-700 mb-2">Raised: ${cause.collectedAmount.toLocaleString()}</p>
            <div className="w-full bg-orange-200 rounded-full h-4 mb-2">
              <div
                className="bg-orange-500 h-4 rounded-full"
                style={{ width: `${(cause.collectedAmount / cause.requiredAmount) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {Math.round((cause.collectedAmount / cause.requiredAmount) * 100)}% of goal reached
            </p>
          </div>
          <form onSubmit={handleDonate} className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Make Your Donation</h3>
            <div className="grid grid-cols-3 gap-2">
  {[25, 50, 100].map((amount) => (
    <button
      key={amount}
      type="button"
      onClick={() => {
        setDonationAmount(amount);
        setCustomAmount(amount.toString()); // Update custom amount field
      }}
      className={`py-2 rounded-full transition duration-300 ${
        donationAmount === amount && !customAmount
          ? "bg-orange-500 text-white"
          : "bg-orange-100 text-orange-800 hover:bg-orange-200"
      }`}
    >
      ${amount}
    </button>
  ))}
</div>

<div className="relative">
  <input
    type="number"
    value={customAmount}
    onChange={(e) => {
      setCustomAmount(e.target.value);
      setDonationAmount(""); // Reset donation amount selection when typing
    }}
    placeholder="Enter custom amount"
    className="w-full p-2 border border-orange-300 rounded-full pl-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <span className="absolute left-3 top-2 text-gray-500">$</span>
</div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default DonationDetail

