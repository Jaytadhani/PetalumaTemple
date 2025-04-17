  import React, { useEffect, useState } from "react"
import Layout from "../Components/Layout";
import { fetchOurVision, requestToken } from "../services/api";
import Loader from "../Components/Loader";

const Vision = () => {
  const [shortTermGoals, setShortTermGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
      const loadVision = async () => {
        try {
          const token = await requestToken();
          const OurVision = await fetchOurVision(token);
          setShortTermGoals(OurVision);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      loadVision();
    }, []);


    
  if (loading) return <div><Loader/></div>;
  if (error) return <div>{error}</div>;



  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1697729865428-720962b67655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Temple entrance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center px-4">
            Our Vision & Short-Term Goals
          </h1>
        </div>
      </div>

      {/* Vision Statement */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 text-center mb-6 md:mb-8">Temple Vision</h2>
        <p className="text-base md:text-lg text-gray-700 text-center mb-8">
          Our temple strives to be a beacon of spiritual enlightenment, cultural preservation, and community growth. We
          envision a space where ancient wisdom meets modern life, fostering spiritual growth and understanding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {["Spiritual Growth", "Cultural Preservation", "Community Building"].map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">{pillar}</h3>
              <p className="text-gray-600">
                Dedicated to nurturing and expanding our {pillar.toLowerCase()} initiatives.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Short Term Goals Section */}
      <section className="bg-orange-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 text-center mb-8 md:mb-12">
            Our Short-Term Goals
          </h2>

          {/* Goals Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 md:mb-16">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Target Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shortTermGoals.map((goal, index) => (
                    <tr key={index} className="hover:bg-orange-50 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-orange-500">
                        {goal.activity}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{goal.targetDate}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{goal.frequency}</td>
                      <td className="px-4 py-4 text-sm text-gray-500">{goal.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline Visualization */}
          <h3 className="text-xl md:text-2xl font-bold text-orange-500 text-center mb-6 md:mb-8">
              Implementation Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 w-1 h-full bg-orange-300 transform -translate-x-1/2 md:h-full md:block hidden"></div>
              <div className="space-y-8 md:space-y-12">
                {shortTermGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"} mb-4 md:mb-0`}
                    >
                      <h4 className="text-lg font-semibold text-orange-500">{goal.activity}</h4>
                      <p className="text-sm text-orange-300">{goal.targetDate}</p>
                    </div>
                    <div className={`w-full md:w-2/12 flex justify-center mb-4 md:mb-0 ${index % 2 === 0 ? "hidden md:flex" : "hidden md:flex"}`}>
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us in Our Journey</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Be a part of our growing community and help us achieve these goals together.
          </p>
          <button className="bg-white text-orange-500 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition-colors">
            Get Involved
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default Vision;

