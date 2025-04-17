"use client"

import { useEffect, useRef } from "react"
import Layout from "../components/layout"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Whoweare = () => {
  const titleRef = useRef(null)
  const sectionRef = useRef(null)
  const sectionRefs = useRef([])

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    sectionRefs.current.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      })
    })
  }, [])

  return (
    <Layout>
      <div className="max-w-full mx-auto  bg-gradient-to-b from-orange-50 to-white">
        <main className="mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <h1 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-center text-orange-800 mb-12">
            Who We Are
          </h1>
          <section ref={sectionRef} className="prose prose-lg max-w-4xl text-center mx-auto">
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Welcome to the Petaluma Hindu Temple Initiative – a transformative effort dedicated to establishing a
              spiritual center that embodies the essence of Hindu philosophy and cultural preservation. Guided by the
              ancient wisdom of the saying, <span className="font-sanskrit text-orange-700">"धर्मो रक्षति रक्षितः"</span>{" "}
              (Dharma protects those who uphold it), we are committed to fostering harmony, unity, and community
              well-being.
            </p>

            {["Our Vision", "Our Mission", "Why Petaluma?", "Our Future Aspirations", "Join Us in Our Journey"].map(
              (title, index) => (
                <div key={index} ref={(el) => (sectionRefs.current[index] = el)} className="mb-16 text-lg">
                  <h2 className="text-4xl font-semibold text-orange-500 mb-6">{title}</h2>
                  {title === "Our Vision" && (
                    <p className="  leading-relaxed">
                      Our vision is to create a temple that serves as a sanctuary for worship, spiritual growth, and
                      cultural enrichment. We aim to bring together deities, traditions, and values from diverse regions
                      of the world that embrace Hinduism, creating a space where individuals can connect with their
                      spirituality and heritage.
                    </p>
                  )}


                  {title === "Our Mission" && (
                    <>
                      <p className=" leading-relaxed mb-4">
                        At the Petaluma Hindu Temple Initiative, our mission is threefold:
                      </p>
                      <ul className="list-disc pl-6 text-left ">
                        <li className="mb-2">
                          <strong className="text-orange-600">Preserve and Promote Dharma:</strong> We strive to offer a
                          welcoming environment for worship, spiritual practices, and cultural activities that honor the
                          rich traditions of Hinduism.
                        </li>
                        <li className="mb-2">
                          <strong className="text-orange-600">Foster Community Harmony:</strong> Our temple will act as
                          a bridge between Indian traditions and American society, promoting mutual respect,
                          understanding, and cultural exchange.
                        </li>
                        <li>
                          <strong className="text-orange-600">Enrich Society:</strong> We are dedicated to sharing the
                          profound wisdom of Hindu philosophy to cultivate compassion, tolerance, and universal
                          brotherhood within our community.
                        </li>
                      </ul>
                    </>
                  )}
                  {title === "Why Petaluma?" && (
                    <p className=" leading-relaxed">
                      Petaluma is an ideal location for our temple due to its growing Hindu population and the
                      community's need for a centralized space for worship and cultural activities. Currently, access to
                      Hindu temples is limited, making our initiative essential for fostering spiritual and cultural
                      connections.
                    </p>
                  )}
                  {title === "Our Future Aspirations" && (
                    <>
                      <p className=" leading-relaxed mb-4">
                        In addition to serving as a place of worship, we envision establishing a Gurukul—a traditional
                        educational institution that will offer holistic education in various disciplines, including:
                      </p>
                      <ul className="list-disc pl-6 text-left  mb-4">
                        <li>Jyotishshastra (Astronomy)</li>
                        <li>Philosophy and Literature</li>
                        <li>Indian Classical Arts</li>
                        <li>Health Practices (Yoga and Nutrition)</li>
                        <li>Sports and Physical Education</li>
                      </ul>
                      <p className="text-gray-900 leading-relaxed">
                        Through these educational initiatives, we aim to address societal challenges and promote the
                        principles of Dharma (righteousness), Ahimsa (non-violence), and Seva (selfless service). 
                      </p>
                    </>
                  )}
                  {title === "Join Us in Our Journey" && (
                    <>
                      <p className="leading-relaxed mb-4">
                        We invite you to be a part of this transformative initiative. Your support is crucial in helping
                        us realize our vision of a vibrant temple that serves as a beacon of cultural enrichment,
                        education, and community service. Together, we can create a space that nurtures spiritual growth
                        and fosters a sense of belonging for all.
                      </p>
                      <p className="leading-relaxed">
                        <strong className="text-orange-600">Connect with Us:</strong> Stay updated on our progress and
                        upcoming events by subscribing to our newsletter and following us on social media.
                      </p>
                      <div className="mt-8">
                        <a
                          href="#subscribe"
                          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300 inline-block mr-4"
                        >
                          Subscribe to Newsletter
                        </a>
                        <a
                          href="#donate"
                          className="bg-white text-orange-500 border-2 border-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition duration-300 inline-block"
                        >
                          Donate Now
                        </a>
                      </div>
                    </>
                  )}
                </div>
              ),
            )}
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Whoweare

