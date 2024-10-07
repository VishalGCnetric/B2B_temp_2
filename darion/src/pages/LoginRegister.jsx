import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginRegister = () => {
  // State for login form
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // State for registration form
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    emailOffers: false,
  });

  // Handle login input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle register input changes
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  // Handle register submit
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', registerData);
  };

  return (
    <motion.div
      className="bg-[#f7f1ed] min-h-screen flex justify-center items-center py-20 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        {/* Login Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">LOGIN</h2>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="loginEmail" className="block text-sm font-medium">
                EMAIL
              </label>
              <input
                id="loginEmail"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleLoginChange}
                className="mt-1 block w-full h-[80px] border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="loginPassword" className="block text-sm font-medium">
                PASSWORD
              </label>
              <input
                id="loginPassword"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="mt-1 block w-full h-[80px] border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                placeholder="Enter your password"
              />
            </div>

            <motion.button
              type="submit"
            className="w-full h-[80px] bg-black text-white hover:text-black py-3 font-bold transition-colors duration-300 ease-in-out hover:bg-[#f7f1ed] hover:border-2 hover:border-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SIGN IN
            </motion.button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm underline text-black hover:text-gray-600"
              >
                FORGOT PASSWORD
              </a>
            </div>
          </form>
        </motion.div>

        {/* Register Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4">CREATE AN ACCOUNT</h2>

          <p className="text-sm mb-4">
            We never save credit card information.
            <br />
            <br />
            Registering makes checkout fast and easy and saves your order information in your account.
          </p>

          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium">
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={registerData.firstName}
                  onChange={handleRegisterChange}
                  className="mt-1 h-[80px] block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={registerData.lastName}
                  onChange={handleRegisterChange}
                  className="mt-1 h-[80px] block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="registerEmail" className="block text-sm font-medium">
                EMAIL*
              </label>
              <input
                id="registerEmail"
                name="email"
                type="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="mt-1 h-[80px] block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="registerPassword" className="block text-sm font-medium">
                PASSWORD*
              </label>
              <input
                id="registerPassword"
                name="password"
                type="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="mt-1 h-[80px] block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium">
                CONFIRM PASSWORD*
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                className="mt-1 h-[80px] block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black p-3 bg-white"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="emailOffers"
                name="emailOffers"
                type="checkbox"
                checked={registerData.emailOffers}
                onChange={handleRegisterChange}
                className="h-4 w-4  border-gray-300 rounded"
              />
              <label htmlFor="emailOffers" className="text-sm">
                Email me with news and offers
              </label>
            </div>

            <motion.button
              type="submit"
           className="w-full h-[80px] bg-black text-white hover:text-black py-3 font-bold transition-colors duration-300 ease-in-out hover:bg-[#f7f1ed] hover:border-2 hover:border-black"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTER
            </motion.button>

            <p className="text-sm text-gray-500 text-center mt-4">
              By creating an account, you agree to our{' '}
              <a href="#" className="underline hover:text-gray-600">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="#" className="underline hover:text-gray-600">
                Privacy Policy
              </a>.
            </p>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginRegister;
