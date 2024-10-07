import React, { useState } from 'react';
import { Search, User, HelpCircle, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import navigationData from '../../json/NavigationData.json';
import { useCart } from '../../contextApi/CartContext';

const NavItem = ({ children, highlight }) => (
  <li className={`px-3 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 ${highlight ? 'text-red-600' : ''}`}>
    {children}
  </li>
);

const NavIcon = ({ name, onClick, cartCount }) => {
  const IconComponent = {
    search: Search,
    user: User,
    help: HelpCircle,
    cart: ShoppingBag,
  }[name];
const navigate =useNavigate();
  return (
    <li className="relative px-2 py-2 hover:text-gray-600 transition-colors duration-200 cursor-pointer" onClick={name === 'cart' ? onClick :name=="user"? ()=>navigate("/login"):null}>
      <IconComponent size={20} />
      {name === 'cart'&& (
        <span className="absolute top-[-3px] right-[-5px] inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold leading-none text-white bg-black rounded-full">
          {cartCount}
        </span>
      )}
    </li>
  );
};

export default function Navbar() {
  const { leftMenu, logo, rightMenu, icons } = navigationData.navbar;
  const { openCart, cartItems } = useCart();
  const cartCount = cartItems?.length || 0;

  const [menuOpen, setMenuOpen] = useState(false); // For hamburger menu toggle

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0">
    <div className="max-w-7xl mx-auto px-4 relative">
      <div className="flex justify-between items-center h-16">
          {/* Left Menu (Desktop Only) */}
          <ul className="hidden md:flex space-x-4">
            {leftMenu.map((item, index) => (
              <NavItem key={index} highlight={item.highlight}>
                <Link to={item.link}>{item.name}</Link>
              </NavItem>
            ))}
          </ul>

          {/* Logo */}
          <a href={logo.link} className="text-3xl ml-20 pacifico-regular">
            {logo.text}
          </a>

          {/* Right Menu + Icons (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex space-x-4 mr-4">
              {rightMenu.map((item, index) => (
                <NavItem key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </NavItem>
              ))}
            </ul>

            <ul className="flex items-center space-x-4">
              {icons.map((icon, index) => (
                <NavIcon key={index} name={icon.name} onClick={icon.name === 'cart' ? openCart : undefined} cartCount={cartCount} />
              ))}
            </ul>
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2 pb-4">
              {leftMenu.map((item, index) => (
                <NavItem key={index} highlight={item.highlight}>
                  <Link to={item.link} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </NavItem>
              ))}

              {rightMenu.map((item, index) => (
                <NavItem key={index}>
                  <Link to={item.link} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                </NavItem>
              ))}

              <ul className="flex items-center space-x-4 mt-2">
                {icons.map((icon, index) => (
                  <NavIcon key={index} name={icon.name} onClick={icon.name === 'cart' ? () => { openCart(); setMenuOpen(false); } : undefined} cartCount={cartCount} />
                ))}
              </ul>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
