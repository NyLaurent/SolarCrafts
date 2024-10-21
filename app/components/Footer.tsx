import Polygon from '../../assets/Polygon 2.png'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2 m-auto">
            <div className=''>
              <Image src={Polygon} alt="" />
            </div>
           
            <div className=''>
              <h1 className="text-xl font-semibold">Solarcraft</h1>
              <p className="text-sm">Space class for everyone</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">Subscribe to get our Newsletter</h3>
          <div className="flex justify-center mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-800 text-gray-400 rounded-l-full px-4 py-2 w-64 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-gray-400">
          <ul className="flex justify-center space-x-4 mb-4">
            <li>
              <a href="#" className="hover:underline">Information</a>
            </li>
            <li>|</li>
            <li>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li>|</li>
            <li>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
          <p>© 2024 Solar craft technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
