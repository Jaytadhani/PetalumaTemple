import React, { useRef, useEffect } from "react"
import { BiArrowFromRight } from "react-icons/bi"
import { FaHandHoldingHeart, FaUnity, FaHistory, FaUsers, FaPrayingHands, FaOm } from "react-icons/fa"
import Layout from "../Components/Layout"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBackgroundRef = useRef(null);
  const contentRefs = useRef([]);
  const visionRef = useRef(null);
  const visionCardsRef = useRef(null);

  useGSAP(() => {
    // Hero parallax effect
    gsap.to(heroBackgroundRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
      y: 100,
      scale: 1.1
    });

    // Hero content animation
    const heroTl = gsap.timeline();
    heroTl.from(heroContentRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Scroll-triggered animations for content sections
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.from(ref, {
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out"
        });
      }
    });

    // Vision section animations
    if (visionRef.current) {
      // Header animation
      const header = visionRef.current.querySelector('.text-center');
      gsap.from(header.children, {
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Cards animation
      const cards = visionCardsRef.current.children;
      gsap.from(cards, {
        scrollTrigger: {
          trigger: visionCardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "start"
        },
        ease: "back.out(1.7)"
      });

      // Bottom decoration animation
      const decoration = visionRef.current.querySelector('.mt-16');
      gsap.from(decoration, {
        scrollTrigger: {
          trigger: decoration,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        scaleX: 0,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut"
      });
    }
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white" ref={containerRef}>
      <Layout>
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <div 
            ref={heroBackgroundRef}
            className="absolute inset-0 bg-gradient-to-b from-orange-100 to-orange-50"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604486690701-96a96c0a2a18?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/90"></div>
          
          <div ref={heroContentRef} className="relative h-full flex flex-col items-center justify-center text-center px-4 mt-16">
            <FaOm className="text-5xl md:text-7xl text-orange-500 mb-6 md:mb-8 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4 md:mb-6">
              Welcome to Sonoma Hanuman Temple
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">
              A sacred space where tradition meets tranquility, and faith finds its modern expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="#about" className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-base sm:text-lg">
                Explore Our Temple
              </a>
              <a href="#vision" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-orange-500 text-base sm:text-lg">
                Our Vision
              </a>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-6 md:py-8">
          {/* Temple Introduction */}
          <section id="about" className="mb-12 md:mb-20 pt-12 md:pt-20" ref={el => contentRefs.current[0] = el}>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <img
                    src="https://tripxl.com/blog/wp-content/uploads/2024/09/Hanuman-Temples-in-Rajasthan-840x425.jpg"
                    alt="Sonoma Hanuman Temple"
                    className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Our Divine Space</h2>
                <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                  Nestled in the serene landscapes of Petaluma, the Sonoma Hanuman Temple is more than just a place of
                  worship—it's a divine calling, a space where love, faith, and hope converge.
                </p>
                <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                  Our temple stands as a beacon of light for all faiths, transcending boundaries and embracing unity in diversity.
                </p>
              </div>
            </div>
          </section>

          {/* Petaluma Section */}
          <section className="mb-12 md:mb-20" ref={el => contentRefs.current[2] = el}>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img
                    src="https://content.r9cdn.net/rimg/dimg/1c/e2/bf6aea4c-city-15009-17304739af7.jpg?width=1366&height=768&xhint=3913&yhint=1801&crop=true&watermarkposition=lowerright"
                    alt="Petaluma Landscape"
                    className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-600">Why Petaluma?</h2>
                <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                  Petaluma's unique charm lies in its harmonious blend of history, nature, and community spirit. Our temple
                  amplifies this charm, creating a spiritual haven where inner strength and guidance flourish.
                </p>
              </div>
            </div>
          </section>

         

          {/* Vision Section */}
          <section id="vision" className="py-12 md:py-20 relative overflow-hidden" ref={visionRef}>
            {/* Background Design */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>
            
            <div className="container mx-auto px-4 relative">
              {/* Section Header */}
              <div className="text-center mb-10 md:mb-16">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <FaOm className="text-3xl md:text-4xl text-orange-500" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-orange-600 mb-3 md:mb-4">Our Vision</h2>
                <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                  Building a spiritual sanctuary that nurtures faith, fosters community, and preserves our rich cultural heritage.
                </p>
              </div>

              {/* Vision Cards */}
              <div ref={visionCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {/* Unity Card */}
                <div className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-orange-100">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <FaUnity className="text-xl sm:text-2xl md:text-3xl text-orange-500" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 md:mb-3">Symbol of Unity</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Bringing together diverse communities in spiritual harmony and mutual understanding.</p>
                  </div>
                </div>

                {/* Legacy Card */}
                <div className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-orange-100">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <FaHistory className="text-xl sm:text-2xl md:text-3xl text-orange-500" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 md:mb-3">Timeless Legacy</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Preserving and passing down our spiritual heritage to future generations.</p>
                  </div>
                </div>

                {/* Community Card */}
                <div className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-orange-100">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <FaUsers className="text-xl sm:text-2xl md:text-3xl text-orange-500" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 md:mb-3">Community Hub</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Creating a vibrant space for cultural exchange, celebration, and connection.</p>
                  </div>
                </div>

                {/* Sanctuary Card */}
                <div className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-orange-100">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 w-12 h-12 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      <FaPrayingHands className="text-xl sm:text-2xl md:text-3xl text-orange-500" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 mb-2 md:mb-3">Sanctuary of Peace</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Offering a tranquil haven for meditation, prayer, and spiritual growth.</p>
                  </div>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="flex justify-center mt-8 sm:mt-10 md:mt-16">
                <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              </div>
            </div>
          </section>

           {/* Call to Action */}
           <section className="text-center py-12 md:py-16 px-4" ref={el => contentRefs.current[3] = el}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-4 md:mb-6">Be Part of Our Divine Journey</h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-700 mb-6 md:mb-8">
                Join us in building a spiritual legacy. Your support helps create a sacred space for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a
                  href="#donate"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm sm:text-base md:text-lg"
                >
                  Support Our Temple <BiArrowFromRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="#volunteer"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-orange-500 text-sm sm:text-base md:text-lg"
                >
                  Volunteer With Us <FaHandHoldingHeart className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default AboutUs;
