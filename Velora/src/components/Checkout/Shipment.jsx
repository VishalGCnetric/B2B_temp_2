import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const ShipmentComponent = ({handleNext,handleBack}) => {
  // State variables for selected shipping method and delivery date
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  // Sample data for cart items
  const cartItems = [
    {
      id: 1,
      name: "Men's Wool Piper Go",
      size: "9",
      price: "120",
      image: "path/to/image1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Women's Wool Runner",
      size: "7",
      price: "140",
      image: "path/to/image2.jpg",
      quantity: 2,
    },
  ];

  // Sample delivery address
  const deliveryAddress = "Mr Vishal CNI, near street 102, 42856 pune";

  // Shipping methods data
  const shippingMethods = [
    { id: "dhl_standard", name: "DHL Standard", price: 5.60 },
    { id: "dhl_express", name: "DHL Express", price: 6.80 },
    { id: "hermes_standard", name: "Hermes Standard", price: 8.50 },
    { id: "hermes_same_day", name: "Hermes Same Day", price: 12.00 },
    { id: "hermes_next_day", name: "Hermes Next Day", price: 17.00 }
  ];

  // Function to handle radio button change for shipping method
  const handleShippingMethodChange = (event) => {
    setSelectedShippingMethod(event.target.id);
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price;
    });
    if (selectedShippingMethod) {
      const shippingPrice = shippingMethods.find(method => method.id === selectedShippingMethod).price;
      totalPrice += shippingPrice;
    }
    return totalPrice;
  };

  return (
    <div className="w-[70%] mx-auto pb-8">
      <h2 className="text-xl font-semibold mb-4">Shipment</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 pr-0 lg:pr-4">
          <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold mb-4">Shipment 1 of 1</h3>

            {cartItems.map((item, index) => (
                <ProductItem key={index} name={item.name} price={item.price} quantity={item.quantity} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 pl-0 lg:pl-4">
          <div className="border p-4 mb-4 bg-zinc-200">
            <h4 className="font-semibold mb-2">Delivery address</h4>
            <p>{deliveryAddress}</p>
          </div>
          {/* <div className="border p-4 mb-4 bg-zinc-200">
            <h4 className="font-semibold mb-2">Shipping Method</h4>
            <div className="mb-4">
              {shippingMethods.map((method, index) => (
                <div key={index} className="border bg-zinc-100 rounded-md p-2">
                  <img src={`https://placehold.co/40x20?text=${method.name}`} alt={method.name} className="mb-2" />
                  <div>
                    <input
                      type="radio"
                      id={method.id}
                      name="shipping_method"
                      className="mr-2"
                      checked={selectedShippingMethod === method.id}
                      onChange={handleShippingMethodChange}
                    />
                    <label htmlFor={method.id}>{method.name}: CHF {method.price.toFixed(2)}</label>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
                  <ShippingMethod />

          <div className="border p-4 bg-zinc-200">
            <h4 className="font-semibold mb-2">When do you want to be delivered?</h4>
            <input
              type="date"
              className="border p-4 w-full rounded-md"
              placeholder="Requested delivery date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="font-semibold">Total Price: CHF {calculateTotalPrice()}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-2">
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

export default ShipmentComponent;

const radioClass = "form-radio";
const textClass = "text-zinc-900 dark:text-zinc-100";
const logoPlaceholder = "https://placehold.co/50x20";

const ShippingMethod = () => {
  return (
    <div className="max-w-sm mx-auto p-6 mb-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Shipping Method</h2>
      
      {/* DHL Shipping */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">DHL</span>
          <img className="ml-auto w-20 h-6 object-cover" src={`https://th.bing.com/th/id/OIP.rAn4S6GH50MyNVf5QOIqHQHaFj?w=242&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7`} alt="DHL Logo" />
        </div>
        <div className="space-y-4">
          <label className="flex items-center border p-4 bg-zinc-50 rounded-md">
            <input type="radio" name="shipping_dhl" className={radioClass} />
            <span className="ml-2 ${textClass}">Standard: €4.90</span>
          </label>
          <label className="flex items-center border p-4 bg-zinc-50 rounded-md">
            <input type="radio" name="shipping_dhl" className={radioClass} />
            <span className="ml-2 ${textClass}">Express: €5.90</span>
          </label>
        </div>
      </div>

      {/* Hermes Shipping */}
      <div>
        <div className="flex items-center mb-2">
          <span className="font-semibold ${textClass}">Hermes</span>
          <img className="ml-auto w-20 h-6 object-contain" src={`https://th.bing.com/th/id/OIP.LkdIxIWb0x3cRhMfHxj7IgHaBK?w=1386&h=218&rs=1&pid=ImgDetMain`} alt="Hermes Logo" />
        </div>
        <div className="space-y-4">
          <label className="flex items-center border p-4 bg-zinc-50 rounded-md">
            <input type="radio" name="shipping_hermes" className={radioClass} />
            <span className="ml-2 ${textClass}">Standard: €5.00</span>
          </label>
          <label className="flex items-center border p-4 bg-zinc-50 rounded-md">
            <input type="radio" name="shipping_hermes" className={radioClass} />
            <span className="ml-2 ${textClass}">Same Day: €10.00</span>
          </label>
          <label className="flex items-center border p-4 bg-zinc-50 rounded-md">
            <input type="radio" name="shipping_hermes" className={radioClass} />
            <span className="ml-2 ${textClass}">Next Day: €15.00</span>
          </label>
        </div>
      </div>
    </div>
  );
};

