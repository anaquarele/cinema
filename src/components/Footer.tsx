import { Link } from 'react-router-dom';
import { RiMovieLine } from 'react-icons/ri';
import { BsTicketPerforated } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="bg-custom-dark text-white py-1 fixed bottom-0 w-full z-50">  
            <div className="flex justify-around items-center">
                <Link to="/discover" className="flex flex-col items-center focus:outline-none">
                    <RiMovieLine size={24} className="opacity-75" />
                    <span className="text-xs mt-1">Discover</span>
                </Link>
                <Link to="/tickets" className="flex flex-col items-center focus:outline-none">
                    <BsTicketPerforated size={24} className="opacity-75" />
                    <span className="text-xs mt-1">Tickets</span>
                </Link>
                <Link to="/theaters" className="flex flex-col items-center focus:outline-none">
                    <IoLocationOutline size={24} className="opacity-75" />
                    <span className="text-xs mt-1">Theaters</span>
                </Link>
                <Link to="/account" className="flex flex-col items-center focus:outline-none">
                    <MdOutlineAccountCircle size={24} className="opacity-75" />
                    <span className="text-xs mt-1">Account</span>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
