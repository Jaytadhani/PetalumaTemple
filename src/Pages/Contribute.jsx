import React from "react"
import Layout from "../Components/Layout"

const Contribute = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">How You Can Be Part of This Divine Journey</h1>
        <p className="mb-4">
          Your involvement in this project is not just about contribution—it's about becoming a medium for Hanuman Ji's
          infinite blessings. Every act of support, be it a kind word, a shared idea, or a financial contribution,
          carries his divine touch.
        </p>
        <div className="bg-orange-100 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">A Note on Dharma and Contribution</h3>
          <p className="mb-4">
            We humbly ask that if you feel your resources may not align with dharma or have been earned outside the
            principles of goodness and righteousness, you refrain from contributing. This request is not personal but a
            sacred reminder that Hanuman Ji's blessings are already boundless.
          </p>
          <p>Your intentions and faith are what matter most in this journey.</p>
        </div>
        <p className="mb-4">
          Let us unite to bring this divine dream to reality. Share this vision with others who feel inspired to be part
          of this eternal blessing, and together, let's create a sanctuary that stands as a testament to faith, hope,
          and love for generations to come.
        </p>
        <div className="mt-8 text-center">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
            Make a Contribution
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Contribute

