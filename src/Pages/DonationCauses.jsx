import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';


const dummyCauses = [
  { 
    id: 1, 
    name: 'Temple Renovation', 
    requiredAmount: 100000, 
    collectedAmount: 65000, 
    image: 'https://images.unsplash.com/photo-1538460120076-604b93a2ce88?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description: 'Help us restore our ancient temple to its former glory. Your donation will contribute to preserving our cultural heritage for future generations.'
  },
  { 
    id: 2, 
    name: 'Community Kitchen', 
    requiredAmount: 50000, 
    collectedAmount: 30000, 
    image: 'https://images.unsplash.com/photo-1609139027234-57570f43f692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description: 'Support our initiative to provide free meals to the needy. Your contribution will help us feed hundreds of people every day.'
  },
  { 
    id: 3, 
    name: 'Educational Programs', 
    requiredAmount: 75000, 
    collectedAmount: 45000, 
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    description: 'Fund our educational programs that teach ancient wisdom and practices. Help us spread knowledge and enlightenment.'
  },
];

const DonationCauses = () => {
  return (
    <Layout>
    <div className="my-20 mx-4">
      <h1 className="text-4xl font-bold text-orange-800 text-center mb-8">Support Our Temple</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyCauses.map(cause => (
          <div key={cause.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={cause.image || "/placeholder.svg"} alt={cause.name} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-orange-700">{cause.name}</h2>
              <p className="text-gray-600 line-clamp-3">{cause.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Goal: ${cause.requiredAmount.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Raised: ${cause.collectedAmount.toLocaleString()}</p>
                <div className="w-full bg-orange-200 rounded-full h-2.5">
                  <div 
                    className="bg-orange-500 h-2.5 rounded-full" 
                    style={{ width: `${(cause.collectedAmount / cause.requiredAmount) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <Link 
                  to={`/donation/${cause.id}`} 
                  className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Donate Now
                </Link>
                <Link 
                  to={`/donation/${cause.id}`} 
                  className="text-orange-500 hover:text-orange-700 transition duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default DonationCauses;
