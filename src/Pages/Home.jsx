import React, { useRef } from "react";

import backimg from "../assets/dada2.jpg";
import YouTubeLiveStream from "../Components/YouTubeLiveStream";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventSlider from "./EventSlider";
import whoweare from "../assets/whoweare.svg";
import MarqueeSlider from "../Components/MarqueeSlider";
import vision from "../assets/vision1.svg"
import { FaArrowRight, FaCalendar, FaHeart, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import story1 from "../assets/hanuman/hanuman(20).jpg"
import story2 from "../assets/hanuman/hanuman(13).jpg"
import story3 from "../assets/hanuman/hanuman(25).jpg"
import bhajan from "../assets/event/firstevent.jpg"
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);
import firstevent from "../assets/event/firstevent.jpg"


const Home = () => {
  const containerRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    { name: "Bhajan", img: bhajan },
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for becoming a member!");
    setShowForm(false);
  };

  return (
    <Layout>
      <main ref={containerRef} className="mx-auto overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen">
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />
  <img
    src={backimg || "/placeholder.svg"}
    alt="Sonoma Hanuman Temple"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-20 h-full flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="MyCustomFont block text-orange-400">Welcome to</span>
          <span className="block">Sonoma Hanuman Temple</span>
        </h1>
        <p className="pt-6 f-siz-4 sm:text-2xl lg:text-4xl text-orange-400">
          || धर्मो रक्षति रक्षितः ||
        </p>
        <p className="text-xl text-gray-200 mb-8">
          A sacred space for spiritual growth, community, and inner peace
        </p>
        <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2">
          <Link to="/about"> Explore Our Temple</Link>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</section>


        <section className="py-6 mt-10 ">
        <div className="my-5 mt-6">
          <MarqueeSlider />
        </div>

        </section>
        <section className="py-10 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-3xl font-sanskrit font-bold text-orange-600 mb-4">
                असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
              </h2>
              <p className="text-lg text-orange-800">
                Lead me from the unreal to the real. Lead me from darkness to
                light. Lead me from death to immortality.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Upcoming <span className="text-orange-500">Events</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Join us for transformative experiences that nourish your mind, body, and soul
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {/* Show image normally with no zoom on hover */}
                    <img
                      src={event.img}
                      alt={event.name}
                      onClick={() => setSelectedImage(event.img)} // Open modal when clicked
                      className="w-full h-64 object-cover cursor-pointer"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3">{event.name} Session</h3>
                      <p className="text-gray-600 mb-6">
                        Join us for a rejuvenating {event.name.toLowerCase()} session this weekend.
                      </p>
                      <button className="flex items-center gap-2 text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                        Learn More <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modal for zoomed image */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
              onClick={() => setSelectedImage(null)} // Close modal when clicking outside the image
            >
              <div
                className="relative bg-white p-4 rounded-lg max-w-4xl mx-auto"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
              >
                <button
                  className="absolute top-2 right-2 text-red-600 text-xl"
                  onClick={() => setSelectedImage(null)} // Close the modal
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedImage}
                  alt="Zoomed"
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}



        {/* Experience Inner Peace */}
        <section className="py-6 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2
                  className="text-3xl md:text-3xl font-sanskrit font-bold text-orange-600 mb-2 "
                  style={{ lineHeight: "inherit" }}
                >
                  ॐ सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः। <br />
                  सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग्भवेत्॥
                </h2>
                <p className="text-lg text-orange-800 ">
                  "May all be happy, May all be free from illness, May all see
                  what is auspicious, May no one suffer.""
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-300 rounded-full opacity-50" />
                <img
                  src="https://plus.unsplash.com/premium_photo-1669446008868-da944a2cfcf5?q=80&w=2071"
                  alt="Meditation"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Experience{" "}
                  <span className="text-orange-500">Inner Peace</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Discover the transformative power of meditation at our temple.
                  Our guided sessions help you find inner calm and spiritual
                  growth in today's fast-paced world.
                </p>
                <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2">
                  Join a Session
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Stories */}
                  <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
                Stories of Hanuman’s Blessings
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: 1,
                    title: "Hanuman and the Sanjeevani Herb",
                    quote:
                      "During the battle of Lanka, Hanuman flew across the Himalayas to bring the Sanjeevani herb and saved Lakshmana’s life, demonstrating his unmatched devotion to Lord Rama.",
                    author: "Valmiki (Ramayana)",
                    image: story1,
                  },
                  {
                    id: 2,
                    title: "Hanuman Swallowing the Sun",
                    quote:
                      "As a child, Hanuman mistook the sun for a ripe fruit and tried to swallow it, showcasing his immense strength even as a young vanara.",
                    author: "Tulsidas (Hanuman Chalisa, Ramcharitmanas)",
                    image: story2,
                  },
                  {
                      id: 3,
                      title: "Hanuman and the Nine Gems of Knowledge",
                      quote:
                        "After the Ramayana war, Hanuman sought deeper wisdom and was blessed by the Sun God, Surya, with the Nine Gems of Knowledge. With this divine wisdom, he became an eternal seeker of truth and devotion.",
                      author: "Ananda Ramayana",
                      image: story3,
                    }

                ].map((story) => (
                  <div
                    key={story.id}
                    className="bg-white rounded-lg shadow-md p-6 fade-in"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-auto h-80 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center mb-4">{story.title}</h3>
                    <p className="text-gray-600 italic mb-6">"{story.quote}"</p>
                    <p className="font-semibold text-center mt-4">- {story.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>



        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-3xl font-sanskrit font-bold text-orange-600 mb-4">
                सत्यं वद, धर्मं चर ॥
              </h2>
              <p className="text-lg text-orange-800">
                "Speak the truth, follow righteousness."
              </p>
            </div>
          </div>
        </section>



        {/* Section 5: Livestream */}
        <section className="py-10 bg-orange-100 ">
          <div className="container mx-auto px-4 " style={{justifyItems:"center"}}>
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Live Stream
            </h2>
            {/* <YouTubeLiveStream /> */}
             <img
                src={firstevent}
                alt="Featured"
                className="w-[620px] h-[380px] object-fit rounded-md"
              />
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
                  src={vision}
                  alt="Our Vision"
                  className="rounded-lg shadow-lg w-[70%] h-[70%] mx-auto"
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

          <section className="py-6 mt-10">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h2
                  className="text-3xl md:text-3xl font-sanskrit font-bold text-orange-600 mb-4"
                  style={{ lineHeight: "inherit" }}
                >
                  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
                  <br />
                  मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥
                </h2>
                <p className="text-lg text-orange-800">
                  "You have the right to perform your actions, But you are not
                  entitled to the result of the actions. Do not let the result
                  be the purpose of your actions, And therefore you won't be
                  attached to not doing your duty."
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Section 8: Previous Donation Data */}
                  <section className="py-16">
                <div className="container py-20 bg-orange-100 mx-auto px-4 rounded-xl">
                  <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
                    Our Impact
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Temple Maintenance */}
                    <div className="text-center">
                      <p className="text-4xl font-bold text-orange-500 mb-2">
                        $0,000
                      </p>
                      <p className="text-lg">Raised for Temple Maintenance</p>
                    </div>

                    {/* Community Members Served */}
                    <div className="text-center">
                      <p className="text-4xl font-bold text-orange-500 mb-2">
                        0,000
                      </p>
                      <p className="text-lg mb-2">Community Members Served</p>
                      <p className="text-sm text-gray-700 mb-4">
                        Join our growing community and support our temple.
                      </p>
                      <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
                        onClick={() => setShowForm(true)}
                      >
                        Become a Member
                      </button>
                    </div>

                    {/* Events Organized */}
                    <div className="text-center">
                      <p className="text-4xl font-bold text-orange-500 mb-2">0,00</p>
                      <p className="text-lg">Events Organized</p>
                    </div>

                  </div>

                  {/* Modal Form */}
                  {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">

                {/* ❌ Close icon at top-right */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
                >
                  &times;
                </button>

                <h3 className="text-xl font-bold mb-4 text-orange-600 text-center">
                  Temple Membership Form
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    required
                    maxLength={10}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                  <textarea
                    placeholder="Address"
                    rows="3"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  ></textarea>
                  <textarea
                    placeholder="Your Message"
                    rows="3"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  ></textarea>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
                </div>
              </section>



        {/* Section 10: Who We Are */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600  text-center">
              Who We Are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center -mr-4">
              <div>
                <p className="text-xl mb-4">
                The Sonoma Hanuman Temple is planned to be a spiritual sanctuary dedicated
                 to fostering love, devotion, and community. Our temple will serve as a bridge 
                 between ancient wisdom and modern life, offering a space for spiritual growth
                  and cultural celebration.
                </p>
                <p className="text-xl">
                We welcome people from all walks of life to join our
                 community and experience the transformative power of devotion and service
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

        {/* Section 7: Donation Contribution */}
        <section className="py-5 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-orange-600 mb-8 text-center">
              Support Our Temple
            </h2>
            <p className="text-center text-lg ">
              Your generous contributions help us maintain the temple and
              continue our spiritual and community services.
            </p>
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-5xl mx-auto text-center">
                <h2
                  className="text-2xl md:text-2xl font-sanskrit font-bold text-orange-600 mb-4"
                  style={{ lineHeight: "inherit" }}
                >
                  दानं धर्मस्य तात्त्विकं निहन्ति समसङ्ग्रहम्। यश्च तु
                  धर्मनिष्ठायाम्, भाग्यं सुकृतिना वितम्॥
                </h2>
                <p className="text-lg text-orange-800">
                  "The donation that is done with true understanding and without
                  attachment leads to the fulfillment of virtue. One who gives,
                  with righteousness and sincerity, attains prosperity and good
                  fortune."
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-orange-500 text-white py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300">
                Donate Now
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 bg-orange-200 text-orange-600">
                  <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                  <div className="py-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-medium min-w-[80px]">Address:</span>
                  <span>2 Hill Drive, Petaluma, CA - 94952</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-medium min-w-[80px]">Phone:</span>
                  <span>+1 503 519 4060</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-medium min-w-[80px]">Email:</span>
                  <span>jayshreesitarama@gmail.com</span>
                </div>
              </div>
            </div>

                </div>
                <div className="p-12">
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
