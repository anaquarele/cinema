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
    <div className="p-4 bg-black text-white pb-24"> {/* Added padding-bottom to ensure enough space for the footer */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Featured Movies</h1>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 z-10"
            onClick={() => scrollLeft(destaqueRef)}
          >
            {'<'}
          </button>
          <div ref={destaqueRef} className="flex overflow-x-scroll scrollbar-hide space-x-4">
            {filmesDestaque.slice(0, 4).map((filme, index) => (
              <div key={index} className="flex-none w-[300px] h-[450px]">
                <img src={filme.image} alt={filme.title} className="w-full h-full rounded object-cover" />
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
        <div className="grid grid-cols-2 gap-4">
          {filmesEmBreve.map((filme, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-md">
              <img src={filme.image} alt={filme.title} className="w-full h-full rounded object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Recently Watched</h1>
        <div className="grid grid-cols-2 gap-4">
          {filmesAssistidosRecentemente.map((filme, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg shadow-md">
              <img src={filme.image} alt={filme.title} className="w-full h-full rounded object-cover" />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold mb-4">Stream On Demand</h1>
        <div className="grid grid-cols-2 gap-4">
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
