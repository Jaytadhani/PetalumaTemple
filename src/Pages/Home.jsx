import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Layout from "../Components/Layout";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const containerRef = useRef(null);

  useGSAP(()=>{
    gsap.from('.anim-title', {
      y: -100,
      opacity: 0,
      duration: 2,
      delay: 1,
      stagger: 0.05,
      scrollTrigger:{
        scrub:true,
      
      }
    });
  })



 

  return (
    <Layout>
      <main ref={containerRef} className="container mx-auto px-4 py-8">
        <h1 className="text-4xl anim-title font-bold text-orange-600 mb-6">
          Welcome to the Sonoma Hanuman Temple Dream Project
        </h1>
        <h2 className="text-2xl  font-semibold text-orange-500 mb-4">
          A Temple beyond Boundaries – Built by Faith, Guided by Blessings
        </h2>
        <p className="mb-4  text-lg leading-relaxed">
          Petaluma is more than just a city—it's a vibrant community rich with culture, diversity, and a deep sense of
          belonging. Nestled within its serene landscapes, a divine calling has emerged to build a space of love, faith,
          and hope: the Sonoma Hanuman Temple.
        </p>
        <p className="mb-4  text-lg leading-relaxed">
          This sacred space is not just a temple; it is Hanuman Ji's personal invitation to all hearts seeking peace,
          strength, and answers.
        </p>
        <section className="mt-8" aria-labelledby="why-hanuman-temple">
          <h3 id="why-hanuman-temple" className="text-2xl  font-semibold text-orange-500 mb-4">
            Why a Hanuman Temple in Petaluma?
          </h3>
          <p className="mb-4  text-lg leading-relaxed">
            The inception of this temple is not driven by human effort but by divine will. Lord Hanuman, the epitome of
            devotion, courage, and unconditional love, has chosen Petaluma—a city of kindness and unity—to establish his
            abode.
          </p>
          <p className=" text-lg leading-relaxed">
            This temple is not about us; it's about him and his eternal blessings reaching every soul, regardless of
            faith, origin, or background.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
