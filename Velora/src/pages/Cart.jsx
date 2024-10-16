import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Century Starburst Clock',
      price: 70.00,
      quantity: 1,
      image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07_120x.jpg?v=1720753642',
    },
    {
      id: 2,
      name: 'Mid-Century Coffee Table',
      price: 150.00,
      quantity: 1,
      image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07_120x.jpg?v=1720753642',
    },
    {
      id: 3,
      name: 'Vintage Table Lamp',
      price: 40.00,
      quantity: 1,
      image: 'https://cdn.shopify.com/s/files/1/0886/8134/9409/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07_120x.jpg?v=1720753642',
    },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const FREE_SHIPPING_THRESHOLD = 100;

  // Calculate subtotal
  const calculateSubtotal = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const [subtotal, setSubtotal] = useState(calculateSubtotal(cartItems));

  useEffect(() => {
    setSubtotal(calculateSubtotal(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, increment) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity + increment >= 1
        ? { ...item, quantity: item.quantity + increment }
        : item
    );
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    if (termsAccepted) {
      alert('Proceeding to checkout...');
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  // Free Shipping Progress Bar
  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">Shopping Cart</h1>

      {/* Conditional Rendering for Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is currently empty</p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">Shop Now</button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          {/* Cart Items Section */}
          <div className="w-full lg:w-2/3">
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left text-gray-600 font-semibold">Product</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-semibold">Price</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-semibold">Quantity</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-semibold">Total</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">${item.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="p-2 border border-gray-300 rounded-l-md"
                        >
                          -
                        </button>
                        <span className="p-2 border-t border-b border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="p-2 border border-gray-300 rounded-r-md"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    {/* Delete Icon */}
                    <td className="py-3 px-4 text-center">
                      <button onClick={() => handleDeleteItem(item.id)} className="text-red-500">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Sidebar Section */}
          <div className="w-full lg:w-1/3 lg:ml-8 bg-zinc-100 p-8">
            {/* Free Shipping Banner and Progress */}
            <div
              className={`border p-4 rounded-md mb-4 ${
                subtotal >= FREE_SHIPPING_THRESHOLD ? 'bg-green-100' : 'bg-gray-100'
              }`}
            >
              <p className="font-semibold">
                {subtotal >= FREE_SHIPPING_THRESHOLD
                  ? "Congratulations, you've got free shipping!"
                  : `Spend $${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more to get free shipping!`}
              </p>

              {/* Progress Bar */}
              <div className="relative pt-2">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                  <div
                    style={{ width: `${shippingProgress}%` }}
                    className={`flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      shippingProgress >= 100 ? 'bg-green-500' : 'bg-zinc-500'
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Shipping Estimate */}
            <div className="mb-6">
              {/* <label htmlFor="zipCode" className="block text-sm font-semibold mb-2">
                Get Quote
              </label>
              <input
                type="text"
                id="price"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="price"
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
              /> */}
           
            </div>

            {/* Coupon Code */}
            {/* <div className="mb-6">
              <label htmlFor="couponCode" className="block text-sm font-semibold mb-2">
                Coupon
              </label>
              <input
                type="text"
                id="couponCode"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon code"
                className="w-full border border-gray-300 p-2 rounded-md mb-4"
              />
            </div> */}

            {/* Subtotal and Checkout */}
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-4">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <p>
                  I agree with the{' '}
                  <a href="#" className="underline">
                    terms and conditions
                  </a>
                </p>
              </div>
              <Link to="/checkout">
              <button
                // onClick={handleCheckout}
                disabled={!termsAccepted}
                className={`w-full p-2 rounded-md ${
                  termsAccepted ? 'bg-black text-white ' : 'bg-gray-400 text-gray-800 cursor-not-allowed'
                }`}
              >
                Checkout
              </button>
              </Link>
              <button className="w-full bg-black text-white p-2 rounded-md mt-4">Request Quote</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
