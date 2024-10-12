import logo from '/alavykhan-2.png'
import { NavHashLink } from 'react-router-hash-link';
const Footer = () => {
    return (
        <div>
        <footer className="footer bg-black text-center items-center p-4">
        <aside className="flex justify-between items-center w-full">
              
              <NavHashLink smooth={true} to='#hero'><img src={logo} className="w-12 md:ml-8" alt="" /></NavHashLink>
          <p className='text-center md:mr-8'>All right reserved by AK © ${new Date().getFullYear()}</p>
        </aside>
  
        </footer>
        </div>
    );
};

export default Footer;