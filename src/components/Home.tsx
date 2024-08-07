import React, { useRef } from 'react';
import { filmesDestaque, filmesEmBreve, filmesAssistidosRecentemente, filmesSobDemanda } from '../data';

const Home: React.FC = () => {
  const destaqueRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-4 bg-custom-blue text-white pb-24">
         <section className="mb-8">
        <h1 className="text-2xl font-bold mb-5">Featured Movies</h1>
        <div className="relative overflow-hidden">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 z-10"
            onClick={() => scrollLeft(destaqueRef)}
          >
            {'<'}
          </button>
          <div ref={destaqueRef} className="flex space-x-4 w-full">
            {filmesDestaque.slice(0, 4).map((filme, index) => (
              <div key={index} className="flex-none w-[300px] h-[600px] bg-gray-800 p-2 rounded-lg shadow-md">
                <img src={filme.image} alt={filme.title} className="w-full h-[450px] rounded object-cover mb-4" />
                <div className="movie-info">
                  <h2 className="text-lg font-semibold">{filme.title}</h2>
                  <p className="text-sm mb-2">{filme.description}</p>
                  <div className="showtimes flex space-x-2">
                    {filme.times.map((time, idx) => (
                      <span key={idx} className="bg-gray-700 py-1 px-2 rounded text-xs">{time}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 z-10"
            onClick={() => scrollRight(destaqueRef)}
          >
            {'>'}
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Coming Soon</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filmesEmBreve.map((filme, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-md">
              <img src={filme.image} alt={filme.title} className="w-full h-full rounded object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Recently Watched</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filmesAssistidosRecentemente.map((filme, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-md">
              <img src={filme.image} alt={filme.title} className="w-full h-full rounded object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Stream On Demand</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filmesSobDemanda.map((filme, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-md">
              <img src={filme.image} alt={filme.title} className="w-full h-full rounded object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
