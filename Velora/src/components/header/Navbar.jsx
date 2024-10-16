import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Heart, ShoppingCart, ChevronDown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-black"
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(!isOpen)}

      >
        <span>{title}</span>
        <ChevronDown size={16} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



const CartModal = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Century Starburst Clock',
      price: 70.0,
      quantity: 1,
      image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07_120x.jpg?v=1720753642',
    },
    {
      id: 2,
      name: 'Mid-Century Coffee Table',
      price: 150.0,
      quantity: 1,
      image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07_120x.jpg?v=1720753642',
    },
    {
      id: 3,
      name: 'Vintage Table Lamp',
      price: 40.0,
      quantity: 1,
      image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07_120x.jpg?v=1720753642',
    },
  ]);

  const navigate = useNavigate();

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence className="bg-white">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 bottom-0 right-0 inset-0 bg-black bg-opacity-10 z-50 flex justify-end"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="bg-white w-96 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 h-full flex flex-col bg-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    Your cart is empty. <br />
                    Add some products to get started!
                    <br />
                    <motion.button
                      onClick={() => navigate('/')}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 border-2 hover:border-black bg-black my-4 text-white hover:text-black hover:bg-white rounded-lg"
                    >
                      Go to shopping
                    </motion.button>
                  </p>
                </div>
              ) : (
                <div className="bg-white">
                  {/* Cart Items List */}
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-8 border-b ">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="ml-4 flex-grow">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Subtotal and Checkout */}
              {cartItems.length > 0 && (
                <div className="mt-4 bg-white">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <p>Subtotal:</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all"
                      onClick={() =>{
                        onClose()
                        navigate('/cart')}}
                    >
                      View Cart
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold logofont">VeLora</a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavItem title="Home" items={['Homepage 1', 'Homepage 2']} />
            <NavItem title="Shop" items={['All Products', 'Categories', 'Sales']} />
            <NavItem title="Product" items={['Product List', 'Product Details']} />
            <NavItem title="Blog" items={['Blog Grid', 'Blog Single']} />
            <NavItem title="Featured" items={['New Arrivals', 'Best Sellers']} />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-black" onClick={() =>{ 
               navigate('/account')
              }}>
              <User size={20} />
            </button>
            <button className="text-gray-600 hover:text-black relative">
              <Heart size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
            <button className="text-gray-600 hover:text-black relative" onClick={() =>{ 
               navigate('/cart')
              // setIsCartOpen(true)
              }}>
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;