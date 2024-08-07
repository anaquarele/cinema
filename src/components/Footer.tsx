
import { RiMovieLine } from 'react-icons/ri';
import { BsTicketPerforated } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="bg-custom-dark text-white py-2 px-2 fixed bottom-0 w-full">
            <div className="flex justify-around items-center">
                <button className="flex flex-col items-center focus:outline-none">
                    <RiMovieLine size={24} className="opacity-50" />
                    <span className="text-xs mt-1">Discover</span>
                </button>
                <button className="flex flex-col items-center focus:outline-none">
                    <BsTicketPerforated size={24} className="opacity-50" />
                    <span className="text-xs mt-1">Tickets</span>
                </button>
                <button className="flex flex-col items-center focus:outline-none">
                    <IoLocationOutline size={24} className="opacity-50" />
                    <span className="text-xs mt-1">Theaters</span>
                </button>
                <button className="flex flex-col items-center focus:outline-none">
                    <MdOutlineAccountCircle size={24} className="opacity-50" />
                    <span className="text-xs mt-1">Account</span>
                </button>
            </div>
        </div>
    );
};

export default Footer;
