import React, { useRef } from "react";
import Layout from "../Components/Layout";
import backimg from "../assets/homeback.png";
import YouTubeLiveStream from "../Components/YouTubeLiveStream";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventSlider from "./EventSlider";
import whoweare from "../assets/whoweare.svg"

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".anim-title", {
        y: -100,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 0.05,
        scrollTrigger: {
          scrub: true,
        },
      });

      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <Layout>
      <main ref={containerRef} className="mx-auto">
        {/* Section 1: Hero Section */}
        <section className="relative h-screen">
          <div className="w-full relative">
            <img
              src={backimg || "/placeholder.svg"}
              alt="Sonoma Hanuman Temple"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-start p-6">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white text-left leading-tight text-center w-full sm:w-[60%] lg:w-[35%] h-fit">
                <span className="MyCustomFont"> Welcome </span> to the Sonoma
                Hanuman Temple
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2: Upcoming Events */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Yoga", "Meditation", "Music"].map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
                  <img
                    src={
                      "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt={event}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {event} Session
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join us for a rejuvenating {event.toLowerCase()} session
                      this weekend.
                    </p>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Meditation Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Experience Inner Peace
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1669446008868-da944a2cfcf5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Meditation"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">
                  Discover the transformative power of meditation at our temple.
                  Our guided sessions help you find inner calm and spiritual
                  growth.
                </p>
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                  Join a Session
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Stories of Transformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((story) => (
                <div
                  key={story}
                  className="bg-white rounded-lg shadow-md p-6 fade-in"
                >
                  <img
                    src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={`Story ${story}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-600 italic mb-4">
                    "The Sonoma Hanuman Temple has been a beacon of hope and
                    transformation in my life. The community here is truly
                    special."
                  </p>
                  <p className="font-semibold">- Devotee {story}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Livestream */}
        <section className="py-16 bg-orange-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Live Stream
            </h2>
            <YouTubeLiveStream />
          </div>
        </section>

        {/* Section 6: Our Vision */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Our Vision
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1733342422588-c2fc9e279836?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Vision"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">
                  Our vision is to create a spiritual haven where all are
                  welcome, regardless of background or belief. We aim to spread
                  love, compassion, and spiritual wisdom to our community and
                  beyond.
                </p>
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Donation Contribution */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Support Our Temple
            </h2>
            <p className="text-center text-lg mb-8">
              Your generous contributions help us maintain the temple and
              continue our spiritual and community services.
            </p>
            <div className="flex justify-center">
              <button className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300">
                Donate Now
              </button>
            </div>
          </div>
        </section>

        {/* Section 8: Previous Donation Data */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500 mb-2">
                  $50,000+
                </p>
                <p className="text-lg">Raised for Temple Maintenance</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500 mb-2">
                  1,000+
                </p>
                <p className="text-lg">Community Members Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500 mb-2">100+</p>
                <p className="text-lg">Events Organized</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Event Slider */}
        {/* Section 9: Event Slider */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Upcoming Events
            </h2>
            <EventSlider />
          </div>
        </section>

        {/* Section 10: Who We Are */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  The Sonoma Hanuman Temple is a spiritual sanctuary dedicated
                  to fostering love, devotion, and community. Our temple serves
                  as a bridge between ancient wisdom and modern life, offering a
                  space for spiritual growth and cultural celebration.
                </p>
                <p className="text-lg">
                  We welcome people from all walks of life to join our community
                  and experience the transformative power of devotion and
                  service.
                </p>
              </div>
              <div>
                <img
                  src={whoweare}
                  alt="Our Community"
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Contact */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-2">
                  <strong>Address:</strong> 123 Temple Street, Petaluma, CA
                  94952
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> info@sonomahanumantemple.org
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Send Us a Message
                </h3>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full mb-4 p-2 border rounded"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
