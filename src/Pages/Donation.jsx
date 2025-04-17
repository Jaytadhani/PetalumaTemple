
import { useEffect, useRef } from "react"
import Layout from "../Components/Layout"
import han1  from "../assets/maruti.jpeg"
import { ArrowRight, Heart, Zap, Star } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useGSAP } from "@gsap/react";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Donation = () => {
  const headerRef = useRef(null)
  const impactRef = useRef(null)
  const imageRef = useRef(null)
  const dharmaRef = useRef(null)
  const joinRef = useRef(null)
  const waysRef = useRef(null)

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    // Impact section animation
    gsap.from(impactRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: impactRef.current,
        start: "top 80%",
      },
    })

    // Image animation
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    })

    // Dharma section animation
    gsap.from(dharmaRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: dharmaRef.current,
        start: "top 80%",
      },
    })

    // Join community section animation
    gsap.from(joinRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: joinRef.current,
        start: "top 80%",
      },
    })

    // Ways to contribute animation
    gsap.from(waysRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: waysRef.current,
        start: "top 80%",
      },
    })
  }, [])

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-20 px-4 space-y-12 mb-12">
        <header ref={headerRef} className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-orange-600 mb-6">Be a Part of Hanuman Ji's Divine Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your support is more than a contribution—it's a step towards creating a lasting legacy of faith and
            devotion.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div ref={impactRef} className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-700">Your Impact</h2>
            <p className="text-gray-700">
              Every act of support, whether through words, ideas, or financial contributions, carries Hanuman Ji's
              divine touch. Your involvement helps us build not just a structure, but a spiritual beacon for generations
              to come.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Heart, text: "Spread love and devotion" },
                { icon: Zap, text: "Empower spiritual growth" },
                { icon: Star, text: "Create a lasting legacy" },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="text-orange-500 w-6 h-6" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div ref={imageRef} className="relative  rounded-lg overflow-hidden shadow-xl">
          <img
              src={han1}
              alt="hanuman ji"
              className="w-full"/>
          </div>
        </section>

        <section
          ref={dharmaRef}
          className="bg-gradient-to-r from-orange-100 to-yellow-100 p-8 rounded-2xl shadow-inner"
        >
          <h3 className="text-2xl font-semibold text-orange-800 mb-4">A Sacred Reminder on Dharma</h3>
          <p className="text-gray-700 mb-4">
            We humbly request that your contributions align with the principles of dharma—goodness and righteousness.
            This isn't a personal judgment, but a reminder that Hanuman Ji's blessings are infinite and pure.
          </p>
          <p className="text-gray-700 font-medium">
            Your intentions and faith are the true essence of this divine journey.
          </p>
        </section>

        <section ref={joinRef} className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-orange-600">Join Our Community of Devotees</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we can create a sanctuary that stands as a testament to faith, hope, and love. Share this vision
            and be part of Hanuman Ji's eternal blessing.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Make a Contribution</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors">
              Learn More
            </button>
          </div>
        </section>

        <section ref={waysRef} className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Monthly Giving", description: "Set up recurring donations to provide sustained support." },
            { title: "Volunteer", description: "Offer your time and skills to help bring this vision to life." },
            { title: "Spread the Word", description: "Share our mission with your community and social networks." },
          ].map((item, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export default Donation

