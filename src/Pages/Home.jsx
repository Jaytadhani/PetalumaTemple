import React from "react"
import Layout from "../Components/Layout"

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-600 mb-6">Welcome to the Sonoma Hanuman Temple Dream Project</h1>
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">
          A Temple beyond Boundaries – Built by Faith, Guided by Blessings
        </h2>
        <p className="mb-4">
          Petaluma is more than just a city—it's a vibrant community rich with culture, diversity, and a deep sense of
          belonging. Nestled within its serene landscapes, a divine calling has emerged to build a space of love, faith,
          and hope: the Sonoma Hanuman Temple.
        </p>
        <p className="mb-4">
          This sacred space is not just a temple; it is Hanuman Ji's personal invitation to all hearts seeking peace,
          strength, and answers.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">Why a Hanuman Temple in Petaluma?</h3>
          <p className="mb-4">
            The inception of this temple is not driven by human effort but by divine will. Lord Hanuman, the epitome of
            devotion, courage, and unconditional love, has chosen Petaluma—a city of kindness and unity—to establish his
            abode.
          </p>
          <p>
            This temple is not about us; it's about him and his eternal blessings reaching every soul, regardless of
            faith, origin, or background.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Home

