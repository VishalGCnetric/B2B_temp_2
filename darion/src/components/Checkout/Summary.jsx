import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

// Shared styles
const borderColor = " bg-white p-4 border-b pb-4 mb-4";
const textStyles = "text-zinc-500 dark:text-zinc-400";
const buttonStyles = "text-zinc-500 dark:text-zinc-300";
const bgZincStyles = "bg-zinc-100 dark:bg-zinc-700";
const flexStyles = "flex";

const Summary = ({handleBack}) => {
  // State variables for dynamic content
  const [deliveryAddress, setDeliveryAddress] = useState(`Mr Vishal \n  Giri \n new abc street 102,\n43534 Gun,\nAustria`);
  const [deliveryMethod, setDeliveryMethod] = useState({ name: "DHL", cost: 66.10 });
  const [requestedDeliveryDate, setRequestedDeliveryDate] = useState('');
const navigate = useNavigate();
  // Sample data for product items
  const productItems = [
    { name: "Men's shoes", price: 243.71, quantity: 1 },
    { name: "Men's shoes", price: 243.71, quantity: 1 },
    { name: "Men's shoes", price: 243.71, quantity: 1 },

    // { name: "Asus Zenbook UX303UB", price: 422.53, quantity: 1 },
    // { name: "Asus Zenbook UX303UB", price: 508.09, quantity: 1 }
  ];

  // Function to handle editing delivery address
  const handleEditDeliveryAddress = () => {
    // Implement logic to open a modal or navigate to an edit page
    navigate('/checkout?step=1')
    console.log('Editing delivery address');
  };

  // Function to handle editing delivery method
  const handleEditDeliveryMethod = () => {
    // Implement logic to open a modal or navigate to an edit page
    navigate('/checkout?step=2')
    console.log('Editing delivery method');
  };

  // Function to handle editing requested delivery date
  const handleEditRequestedDeliveryDate = () => {
    // Implement logic to open a calendar or date picker
    navigate('/checkout?step=3')
    console.log('Editing requested delivery date');
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    productItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  // Function to calculate grand total
  const calculateGrandTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipmentCost = parseFloat(deliveryMethod.cost);
    // Calculate taxes, discounts, etc. if applicable
    return (subtotal + shipmentCost).toFixed(2);
  };

  return (
    <div className=" w-[70%] mx-auto p-6  dark:bg-zinc-800 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Summary</h1>
<div className='flex items-start justify-between gap-4 p-4 bg-white'>

      <div className="w-2/3">
        <h2 className="text-xl font-bold mb-2">Shipment 1 of 1</h2>
        <div className="mb-4">
          {productItems.map((item, index) => (
            <ProductItem key={index} name={item.name} price={item.price} quantity={item.quantity} />
          ))}
        </div>
      </div>

      <div className=" w-1/3 grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className={`${bgZincStyles} p-4`}>
          <h3 className="font-bold">Delivery Address</h3>
          <p>{deliveryAddress}</p>
          <button className={buttonStyles} onClick={handleEditDeliveryAddress}>Edit</button>
        </div>
        <div className={`${bgZincStyles} p-4`}>
          <h3 className="font-bold">Delivery Method</h3>
          <p>{deliveryMethod.name}</p>
          <p>Standard CHF {deliveryMethod.cost}</p>
          <button className={buttonStyles} onClick={handleEditDeliveryMethod}>Edit</button>
        </div>
        <div className={`${bgZincStyles} p-4`}>
          <h3 className="font-bold">Requested Delivery Date</h3>
          <p>{requestedDeliveryDate}</p>
          <button className={buttonStyles} onClick={handleEditRequestedDeliveryDate}>Edit</button>
        </div>
      </div>
      </div>

      <div className="mb-6 mt-6">
        <h2 className="text-xl font-bold my-2">Payment</h2>
        <div className={`${flexStyles} flex-col md:flex-row ${borderColor}`}>
          <div className="w-2/3">
          <div className="flex justify-start gap-6 pr-6"><h3 className="font-bold">Credit Card</h3> <img src="https://th.bing.com/th/id/OIP.LMwzmOS4wFNhM1w_8S4THgHaEK?rs=1&pid=ImgDetMain" alt="Visa Logo" className="mr-2 w-12"/></div>
            
            <p className="flex items-center">Visa</p>
            <p>Card number: **** **** **** 1111</p>
            <p>Expiry Date: 01/2024</p>
            <button className={buttonStyles}>Edit</button>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold">Billing Address</h3>
            <p>{deliveryAddress}</p>
            <button className={buttonStyles} onClick={handleEditDeliveryAddress}>Edit</button>
          </div>
        </div>
      </div>

      <div className="bg-white p-4">
        <h2 className="text-xl font-bold mb-2">Complete Checkout</h2>
        <div className="mb-4 bg-white p-4">
          <label className="block mb-2" htmlFor="voucher">ENTER VOUCHER/GIFT CARD CODE</label>
          <div className={flexStyles}>
            <input type="text" id="voucher" className="border flex-1 p-2" placeholder="Enter code"/>
            <button className=" bg-zinc-500 text-white hover:bg-orange-500 hover:text-white  py-2 font-semibold hover:rounded-full px-4">+</button>
          </div>
        </div>

        <div className="text-sm border-t-2 pt-4 mb-4 bg-white p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>CHF {calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipment costs (total)</span>
            <span>CHF {deliveryMethod.cost}</span>
          </div>
          {/* Additional rows for discounts, taxes, etc. can be added here */}
          <div className="flex justify-between mb-2 font-bold border-t-2 pt-2">
            <span>GRAND TOTAL</span>
            <span>CHF {calculateGrandTotal()}</span>
          </div>
        </div>

        <div className="mb-4">
          <input type="checkbox" id="terms" className="mr-2"/>
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>

        <div className={`flex flex-col gap-2`}>
        <motion.button
              type="submit"
           className="w-full h-[80px] bg-black text-white hover:text-black py-3 font-bold transition-colors duration-300 ease-in-out hover:bg-white hover:border-2 hover:border-black"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>{
                navigate('./success/1')
              }}>Submit your order</motion.button>
        <motion.button
              type="submit"
           className="w-full h-[80px] hover:bg-black hover:text-white text-black py-3 font-bold transition-colors duration-300 ease-in-out bg-white border-2 border-black"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
             onClick={handleBack}>Back</motion.button>
          
        </div>
      </div>
    </div>
  );
};



export default Summary;
