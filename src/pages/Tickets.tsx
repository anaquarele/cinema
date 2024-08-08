import React from 'react';
import { useNavigate } from 'react-router-dom';
import { filmesDestaque, filmesAssistidosRecentemente } from '../data';

const Tickets: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/ticket-details');  // Certifique-se de que a rota está correta
  };

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Tickets</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Upcoming</h2>
        {filmesDestaque.map((filme, index) => (
          <div key={index} className="flex items-center mb-4 bg-gray-800 p-3 rounded-lg shadow-md">
            <img src={filme.image} alt={filme.title} className="w-[90px] h-[135px] rounded object-cover mr-3" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{filme.title}</h3>
              <div className="text-sm">
                {filme.times.map((time, idx) => (
                  <div key={idx} className="flex justify-between">
                    <p>{time}</p>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-blue-400 text-sm cursor-pointer" onClick={handleViewDetails}>View details</span>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Recent</h2>
        {filmesAssistidosRecentemente.map((filme, index) => (
          <div key={index} className="flex items-center mb-4 bg-gray-800 p-3 rounded-lg shadow-md">
            <img src={filme.image} alt={filme.title} className="w-[90px] h-[135px] rounded object-cover mr-3" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{filme.title}</h3>
              <div className="text-sm">
                {filme.times.map((time, idx) => (
                  <div key={idx} className="flex justify-between">
                    <p>{time}</p>
                  </div>
                ))}
              </div>
            </div>
            <span className="text-blue-400 text-sm cursor-pointer" onClick={handleViewDetails}>View details</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Tickets;
