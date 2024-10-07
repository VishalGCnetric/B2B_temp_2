import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Shared Tailwind CSS classes
const inputClasses = "block w-full border-zinc-300 p-2 focus:ring-orange-500 focus:border-orange-500 border";
const buttonClasses = "py-3 mt-4 rounded";
const otherButtonClasses = "border border-black text-black mt-4 md:mt-0 md:ml-4";

const PaymentForm = ({ handleNext, handleBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="max-w-lg mx-auto p-4">
     

      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Payment Methods</p>
        <div className="flex space-x-4">
          <label
            className={`flex items-center p-2 w-full border cursor-pointer ${paymentMethod === 'credit-card' ? 'bg-teal-100 border-teal-400' : 'bg-white border-zinc-300'}`}
            onClick={() => setPaymentMethod('credit-card')}
          >
            <input type="radio" name="payment-method" className="mr-2" checked={paymentMethod === 'credit-card'} readOnly />
            <span>Credit Card</span>
          </label>
          <label
            className={`flex items-center p-2 w-full border cursor-pointer ${paymentMethod === 'invoice' ? 'bg-teal-100 border-teal-400' : 'bg-white border-zinc-300'}`}
            onClick={() => setPaymentMethod('invoice')}
          >
            <input type="radio" name="payment-method" className="mr-2" checked={paymentMethod === 'invoice'} readOnly />
            <span>Invoice</span>
          </label>
        </div>
      </div>

      {paymentMethod === 'credit-card' && (
        <>
          <p className="text-xl font-semibold mb-4">Credit Card</p>
          <form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4 ">
              <div>
                <label htmlFor="card-type" className="block text-sm font-medium text-zinc-700 mb-1">Card Type<span className="text-red-500">*</span></label>
                <select id="card-type" className={inputClasses}>
                  <option>Visa</option>
                  <option>MasterCard</option>
                  <option>American Express</option>
                </select>
              </div>
              <div>
                <label htmlFor="card-name" className="block text-sm font-medium text-zinc-700 mb-1">Name on the Card<span className="text-red-500">*</span></label>
                <input id="card-name" type="text" className={inputClasses} />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row mb-4">
              <div className="w-2/3">
                <label htmlFor="card-number" className="block text-sm font-medium text-zinc-700 mb-1">Card Number<span className="text-red-500">*</span></label>
                <input id="card-number" type="text" className={inputClasses} />
              </div>
              <div className="w-1/3" >
                <label htmlFor="card-cvc" className="block text-sm font-medium text-zinc-700 mb-1">CVC<span className="text-red-500">*</span></label>
                <input id="card-cvc" type="text" className={inputClasses} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 mb-4">
              <div>
                <label htmlFor="expiry-date" className="block text-sm font-medium text-zinc-700 mb-1 ">Expiry Date<span className="text-red-500">*</span></label>
                <div className="flex items-center justify-between gap-6 w-full">
                  <select id="expiry-month" className="block w-1/3 mt-1 border-zinc-300  focus:ring-teal-500 focus:border-teal-500 border p-2">
                  <option>Month</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select id="expiry-year" className="block w-2/3 mt-1 border-zinc-300  focus:ring-teal-500 focus:border-teal-500 border p-2">
                  <option>Year</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                  </select>
                </div>
              </div>
            </div>
           
          </form>
        
        </>
      )}

      {paymentMethod === 'invoice' && (
        <>
          <p className="text-xl font-semibold mb-4">Invoice</p>
          <form>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-zinc-700 mb-1">Date of Birth<span className="text-red-500">*</span></label>
              <input id="dob" type="text" className={inputClasses} placeholder="DD.MM.YYYY" />
            </div>
            {/* <div className="flex flex-col md:flex-row justify-between items-center">
              <button type="button" className={`w-full md:w-1/2 bg-black text-white ${buttonClasses}`} onClick={handleNext}>Go to Summary</button>
              <button type="button" className={`w-full md:w-1/2 ${otherButtonClasses} ${buttonClasses}`} onClick={handleBack}>Back</button>
            </div> */}
          </form>
        </>
      )}
        <div className="flex flex-col justify-between items-center gap-2">
        <motion.button
              type="submit"
           className="w-full h-[80px] bg-black text-white hover:text-black py-3 font-bold transition-colors duration-300 ease-in-out hover:bg-[#f7f1ed] hover:border-2 hover:border-black"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            onClick={handleNext}>Next</motion.button>
        <motion.button
              type="submit"
           className="w-full h-[80px] hover:bg-black hover:text-white text-black py-3 font-bold transition-colors duration-300 ease-in-out bg-[#f7f1ed] border-2 border-black"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
             onClick={handleBack}>Back</motion.button>
            </div>
    </div>
  );
};

export default PaymentForm;
