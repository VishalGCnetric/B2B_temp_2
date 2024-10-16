import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Store } from 'lucide-react'; // Importing icons from Lucide React
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [contact, setContact] = useState('');
  const [country, setCountry] = useState('Vietnam');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
const navigate =useNavigate();
  // Sample order summary data
  const orderSummary = {
    products: [
      {
        id: 1,
        name: 'About a Chair AAC 22 - Oak Base',
        color: 'Yellow',
        price: 180.00,
        image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-1_128x128.jpg?v=1720752613',
      },
      {
        id: 2,
        name: 'Dining Table DT-01',
        color: 'Walnut',
        price: 220.00,
        image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-2_128x128.jpg?v=1720752614',
      },
    ],
    subtotal: 400.00,
    shipping: 0.00,
    total: 418.00,
    currency: 'USD',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 navigate("/checkout/success/1")

    // Handle form submission logic here
    setIsModalOpen(true); // Open the modal on successful submission
  };

  return (
    <div className="container mx-auto p-4 mb-8">
      <h1 className="text-xl text-center font-bold mb-4">Darion – Furniture Shopify Theme OS 2.0</h1>
      <div className="flex justify-between items-start gap-8">
        {/* Left form section */}
        <form onSubmit={handleSubmit} className="space-y-4 w-2/3 px-8">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-md shadow"
          >
            <h2 className="text-lg font-semibold">Contact</h2>
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full p-2 border rounded mt-2"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <div className="mt-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Email me with news and offers</span>
              </label>
            </div>
          </motion.div>

          {/* Delivery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-md shadow"
          >
            <h2 className="text-lg font-semibold">Delivery</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 my-2 items-startp-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                    checked={shippingMethod === 'standard'}
                    onChange={() => setShippingMethod('standard')}
                  />
                  <Truck className="mr-2" /> Ship
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                    checked={shippingMethod === 'pickup'}
                    onChange={() => setShippingMethod('pickup')}
                  />
                  <Store className="mr-2" /> Pickup in store
                </label>
              </div>

              <select
                className="w-full p-2 border rounded mt-2"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="Vietnam">Vietnam</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>

              <div className="flex space-x-4 mt-2">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-1/2 p-2 border rounded"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 p-2 border rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border rounded mt-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-2 border rounded mt-2"
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
              />
              <div className="flex space-x-4 mt-2">
                <input
                  type="text"
                  placeholder="City"
                  className="w-1/2 p-2 border rounded"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Postal code (optional)"
                  className="w-1/2 p-2 border rounded"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Save this information for next time</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Shipping method section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-100 p-4 rounded-md shadow"
          >
            <h2 className="text-lg font-semibold">Shipping method</h2>
            <div className="flex items-center justify-between mt-2 ">
              <p>Standard</p>
              <p>FREE</p>
            </div>
          </motion.div>

          {/* Payment section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-md shadow"
          >
            <h2 className="text-lg font-semibold">Payment</h2>
            <p className="text-gray-600">All transactions are secure and encrypted.</p>
            <div className="bg-gray-100 p-4 rounded mt-2">
              <p className="text-red-500">This store can't accept payments right now.</p>
            </div>
          </motion.div>

          {/* Pay button */}
          <motion.button
            type="submit"
            className="w-full bg-zinc-800 text-white p-2 rounded hover:bg-zinc-900 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pay now
          </motion.button>
        </form>

        {/* Right order summary section */}
        <div className="w-1/3 sticky top-[80px] bg-zinc-100 p-4 rounded-md shadow">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          {orderSummary.products.map((product) => (
            <div key={product.id} className="flex items-center justify-start mt-4 border-b">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
              <div className="flex flex-col ml-4">
                <span className="font-medium">{product.name}</span>
                <span className="text-gray-600">{product.color}</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between font-semibold">
              <p>Subtotal</p>
              <p>${orderSummary.subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Shipping</p>
              <p>{orderSummary.shipping === 0 ? 'FREE' : `$${orderSummary.shipping.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between font-semibold pt-2 mt-2 border-t">
              <p>Total</p>
              <p>${orderSummary.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-md p-6 w-1/2 shadow-lg">
            <h2 className="text-xl font-semibold">Order Confirmation</h2>
            <p className="mt-4">Thank you for your order!</p>
            <p className="mt-2">Your order ID is: <strong>123456</strong></p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-zinc-800 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
