import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Layout from '../Components/Layout'
import SquarePaymentForm from "../Components/SquarePaymentForm"

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
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  useEffect(() => {
    const selectedCause = dummyCauses.find((c) => c.id === Number.parseInt(id))
    setCause(selectedCause)
  }, [id])

  const handleDonateClick = (e) => {
    e.preventDefault()
    const finalAmount = customAmount || donationAmount
    if (finalAmount) {
      setShowPaymentForm(true)
    }
  }

  const handlePaymentSuccess = async (token) => {
    // TODO: Send the token to your server to process the payment
    console.log("Payment successful, token:", token)
    // Update the cause's collected amount or redirect the user
  }

  const handlePaymentError = (errors) => {
    console.error("Payment failed:", errors)
    // Display error message to the user
  }

  if (!cause) {
    return <div className="text-center text-2xl text-orange-800">Loading...</div>
  }

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-xl p-8 my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-orange-800 mb-4">{cause.title}</h2>
        <p className="text-gray-700 mb-6">{cause.description}</p>
        <img
          src={cause.imageUrl || "/placeholder.svg"}
          alt={cause.title}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />

        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-700">Target Amount:</p>
            <p className="text-xl font-semibold text-orange-800">${cause.targetAmount}</p>
          </div>
          <div>
            <p className="text-gray-700">Collected Amount:</p>
            <p className="text-xl font-semibold text-orange-800">${cause.collectedAmount}</p>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-orange-500 h-2.5 rounded-full"
            style={{ width: `${(cause.collectedAmount / cause.targetAmount) * 100}%` }}
          ></div>
        </div>

        {!showPaymentForm ? (
          <form onSubmit={handleDonateClick} className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Make Your Donation</h3>
            <div className="grid grid-cols-3 gap-2">
              {[25, 50, 100].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setDonationAmount(amount)
                    setCustomAmount(amount.toString())
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
                  setCustomAmount(e.target.value)
                  setDonationAmount("")
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
              Proceed to Payment
            </button>
          </form>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Complete Your Donation</h3>
            <SquarePaymentForm
              amount={customAmount || donationAmount}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
            />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default DonationDetail

