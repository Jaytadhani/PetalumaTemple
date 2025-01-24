import React from "react"
import { BiArrowFromRight } from "react-icons/bi"
import Layout from "../Components/Layout"
// import { ArrowRightIcon } from "react-icons"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    
<Layout>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">Welcome to the Sonoma Hanuman Temple</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img
                src="https://tripxl.com/blog/wp-content/uploads/2024/09/Hanuman-Temples-in-Rajasthan-840x425.jpg"
                alt="Sonoma Hanuman Temple"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Nestled in the serene landscapes of Petaluma, the Sonoma Hanuman Temple is more than just a place of
                worship—it's a divine calling, a space of love, faith, and hope. This sacred space is Hanuman Ji's
                personal invitation to all hearts seeking peace, strength, and answers.
              </p>
              <p className="text-lg mb-4">
                Our temple stands as a beacon of light for all faiths, transcending religion, creed, and belief. It's a
                sanctuary for the weary, a haven for the hopeful, and a reminder that divine love knows no limits.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-orange-500">Why Petaluma?</h3>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
              <img
                src="https://content.r9cdn.net/rimg/dimg/1c/e2/bf6aea4c-city-15009-17304739af7.jpg?width=1366&height=768&xhint=3913&yhint=1801&crop=true&watermarkposition=lowerright"
                alt="Petaluma Landscape"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Petaluma's unique charm lies in its harmonious blend of history, nature, and community spirit. The
                Sonoma Hanuman Temple will amplify this charm, creating a spiritual space where individuals can
                reconnect with their inner strength and find guidance for the path ahead.
              </p>
              <p className="text-lg mb-4">
                This project celebrates Petaluma's essence while offering something profound to all who visit—a
                connection to the divine.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-orange-500">Our Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-orange-500">Symbol of Unity</h4>
              <p>A beacon for harmony among diverse communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-orange-500">Timeless Legacy</h4>
              <p>A gift to future generations that will continue to inspire and guide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-orange-500">Community Hub</h4>
              <p>A space for spiritual gatherings, cultural events, and celebrations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-orange-500">Sanctuary of Peace</h4>
              <p>A place for quiet reflection, meditation, and personal growth.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-6 text-orange-500">Be Part of Our Divine Journey</h3>
          <p className="text-lg mb-4">
            Your involvement in this project is not just about contribution—it's about becoming a medium for Hanuman
            Ji's infinite blessings. Every act of support, be it a kind word, a shared idea, or a financial
            contribution, carries his divine touch.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Support Our Temple <BiArrowFromRight className="ml-2 h-5 w-5" />
          </a>
        </section>
      </main>

      </Layout>
    </div>
  )
}

export default AboutUs

