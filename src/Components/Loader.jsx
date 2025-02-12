import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import swastikAnimation from "../data/swastika.json";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; 
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      <Lottie
        animationData={swastikAnimation}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default Loader;