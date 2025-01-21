import React from "react"
import Layout from "../Components/Layout"

const About = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">About Our Temple</h1>
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">A Beacon of Light for All Faiths</h2>
        <p className="mb-4">
          Hanuman Ji's blessings transcend religion, creed, and belief. Whether you're seeking solace, inspiration, or
          answers to life's questions, this temple stands open for you.
        </p>
        <p className="mb-4">
          It's a sanctuary for the weary, a haven for the hopeful, and a reminder that divine love knows no limits.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">Why Petaluma and Why Now?</h3>
          <p className="mb-4">
            Petaluma's unique charm lies in its harmonious blend of history, nature, and community spirit. The Sonoma
            Hanuman Temple will amplify this charm, creating a spiritual space where individuals can reconnect with
            their inner strength and find guidance for the path ahead.
          </p>
          <p>
            This project celebrates Petaluma's essence while offering something profound to all who visit—a connection
            to the divine.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About

