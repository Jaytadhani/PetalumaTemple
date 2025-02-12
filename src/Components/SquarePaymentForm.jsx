import { useEffect, useState } from "react"

const SquarePaymentForm = ({ amount, onPaymentSuccess, onPaymentError }) => {
  const [paymentForm, setPaymentForm] = useState(null)

  useEffect(() => {
    if (!window.Square) {
      throw new Error("Square.js failed to load properly")
    }

    const initializePaymentForm = async () => {
      const payments = window.Square.payments(
        process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID,
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
      )
      const card = await payments.card()
      await card.attach("#card-container")

      setPaymentForm(card)
    }

    initializePaymentForm()
  }, [])

  const handlePaymentSubmit = async (event) => {
    event.preventDefault()

    if (!paymentForm) {
      return
    }

    try {
      const result = await paymentForm.tokenize()
      if (result.status === "OK") {
        onPaymentSuccess(result.token)
      } else {
        onPaymentError(result.errors)
      }
    } catch (error) {
      onPaymentError([error])
    }
  }

  return (
    <form onSubmit={handlePaymentSubmit}>
      <div id="card-container" className="mb-4"></div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition duration-300"
      >
        Pay ${amount}
      </button>
    </form>
  )
}

export default SquarePaymentForm

