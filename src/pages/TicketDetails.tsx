import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicketDetails: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/tickets');
  };

  return (
    <div className="relative bg-black text-white min-h-screen">
      <div className="relative z-20 p-4">
        <button 
          onClick={handleGoBack} 
          className="bg-gray-800 p-2 rounded text-white"
          style={{ zIndex: 50 }}
        >
          ← Voltar
        </button>
      </div>

      <div className="p-6 relative z-10">
        <h1 className="text-3xl font-bold mb-6">Upcoming Tickets</h1>
        
        <div className="bg-transparent rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold">Parasite</h2>
          <p className="text-sm text-gray-400">2h 12min &nbsp;&bull;&nbsp; R</p>
          <p className="text-sm text-red-400 mt-1 flex items-center">
            <span className="text-lg mr-1">🍅</span> 99%
          </p>

          <h3 className="text-lg font-semibold mt-4">Order confirmation</h3>
          <h4 className="text-md font-semibold mb-2">Order Details</h4>
          <div className="text-sm">
            <p>Adult Ticket (Seat D14) <span className="float-right">$16.49</span></p>
            <p>Adult Ticket (Seat D15) <span className="float-right">$16.49</span></p>
            <p className="border-t border-gray-700 mt-2 pt-2">Subtotal <span className="float-right">$32.98</span></p>
            <p>Tax <span className="float-right">$2.47</span></p>
            <p className="font-semibold border-t border-gray-700 mt-2 pt-2">Total <span className="float-right">$35.45</span></p>
          </div>

          <div className="flex justify-center mt-4">
            <img 
              src="../icons/qrcode.JPG" 
              alt="QR Code" 
              className="w-[140px] h-[140px] shadow-lg"
            />
          </div>
        </div>
      </div>

      <img 
        src="../icons/parasite-bg.png" 
        alt="Parasite" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />
    </div>
  );
};

export default TicketDetails;
