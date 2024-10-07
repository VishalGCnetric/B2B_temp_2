import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const orderDetails = {
    orderId: '123456789',
    orderStatus: 'Shipped',
    orderType: 'Standard Delivery',
    estimatedDeliveryDate: 'Oct 15, 2023',
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'United States',
      phone: '555-555-5555',
    },
    paymentDetails: {
      method: 'Credit Card',
      amount: 129.99,
    },
    items: [
      {
        name: 'Product 1',
        quantity: 1,
        price: 49.99,
        image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_947,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10660_S24Q2_Tree_Runner_Rugged_Green_Blizzard_PDP_SINGLE_3Q.png?v=1719437677',
      },
      {
        name: 'Product 2',
        quantity: 2,
        price: 40.00,
        image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_947,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10660_S24Q2_Tree_Runner_Rugged_Green_Blizzard_PDP_SINGLE_3Q.png?v=1719437677',
      },
    ],
  };
  
const ThankYouPage = () => {
  const navigate = useNavigate();

  // Destructure orderDetails to extract required information
  const {
    orderId,
    items,
    shippingAddress,
    paymentDetails,
    orderStatus,
    orderType,
    estimatedDeliveryDate,
  } = orderDetails; // Assuming `orderDetails` is passed as a prop.

  // Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', delay: 0.3, stiffness: 80 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-[#f8f2ec] py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full text-center">
        <motion.h1
          className="text-3xl font-bold text-green-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
        >
          Thank You for Your Purchase!
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8 } }}
        >
          Your order has been successfully placed.
        </motion.p>
 {/* Estimated Delivery */}
 <motion.div className="">
            <p className="text-sm text-gray-600">
              Estimated Delivery Date: {estimatedDeliveryDate}
            </p>
          </motion.div>
        {/* Order Details */}
        <motion.div className="text-left my-8">
            <div className='flex justify-between items-center '>
                <div className="mt-4">
                <h2 className="font-semibold text-lg text-gray-800">Order Details</h2>
          <p className="text-sm text-gray-600">Order ID: #{orderId}</p>
          <p className="text-sm text-gray-600">Order Status: {orderStatus}</p>
          <p className="text-sm text-gray-600">Order Type: {orderType}</p>

                </div>
               {/* Payment Details */}
          <div className="mt-4">
            <h2 className="font-semibold text-gray-800">Payment Details</h2>
            <p className="text-sm text-gray-600">Payment Method: {paymentDetails.method}</p>
            <p className="text-sm text-gray-600">Amount Paid: ${paymentDetails.amount}</p>
          </div>
            </div>
        
         

          

         
        </motion.div>
        <hr />

        {/* Items Ordered */}
        <motion.div className="mb-8 text-left">
          <h2 className="font-semibold text-lg my-2 text-gray-800">Items Ordered</h2>
          <hr />
          {items.map((item, index) => (
            <div key={index} className="flex items-center mt-4 border-b-2 p-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">
                  {item.quantity} x ${item.price} = ${item.quantity * item.price}
                </p>
              </div>
            </div>
          ))}
           <div className="mt-4">
            <h3 className="font-semibold text-gray-800">Shipping Address</h3>
            <p className="text-sm text-gray-600">
              {shippingAddress.firstName} {shippingAddress.lastName},<br />
              {shippingAddress.address1}, {shippingAddress.address2 ? shippingAddress.address2 + ', ' : ''}
              {shippingAddress.city}, {shippingAddress.state}, {shippingAddress.postalCode},<br />
              {shippingAddress.country}, Phone: {shippingAddress.phone}
            </p>
          </div>
        </motion.div>
       <hr />
        {/* Back to Account Button */}
        <motion.button
           className="w-full bg-black text-white hover:text-black py-3 font-bold transition-colors duration-300 ease-in-out hover:bg-white hover:border-2 hover:border-black"
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => navigate('/account')}
        >
          Back to Account
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ThankYouPage;
