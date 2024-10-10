import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();
  
  const order = {
    id: 'SO-00014',
    date: '08/10/2024 05:58 PM',
    total: 2700.00,
    status: 'Pending',
    products: [ // Changed from single product to an array of products
      {
        name: 'Boat - 675-Light Salmon',
        color: 'Light Salmon',
        price: 2500.00,
        quantity: 1,
        image: 'https://gadgets21.zohocommerce.com/product-images/Product%20Image.webp/5268485000000097597/200x200',
      },
      {
        name: 'Sony Headphones - WH-1000XM4',
        color: 'Black',
        price: 2000.00,
        quantity: 1,
        image: 'https://gadgets21.zohocommerce.com/product-images/Product%20Image.webp/5268485000000097597/200x200', // Replace with actual image URL
      }
    ],
    payment: {
      subtotal: 4500.00, // Update this based on multiple products
      shipping: 200.00,
      tax: 0.00,
      total: 4700.00, // Update this based on multiple products
      method: 'Credit Card',
    },
    shipping: {
      name: 'Vishal Giri',
      address: 'at post irla, dharashiv, Maharashtra - 413509, India.',
      phone: '09767176108',
      email: 'vishal@cnetric.com',
    },
  };

  useEffect(() => {
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center  min-h-screen bg-gray-100 p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-zinc-50 p-8 rounded-lg shadow-lg text-center  w-2/3"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-xl mb-6">Your payment was successful.</p>
<div className="flex justify-center items-center gap-4">


        {/* Product Cards */}
        {/* <div className="grid grid-cols-1 gap-2 mb-6">
          <h1 className='text-xl py-2 font-bold text-left border-b'>Items</h1>
          {order.products.map((product, index) => (
            <div key={index} className="bg-gray-50 text-sm border rounded-md p-4 flex text-left gap-2">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
              <h2 className="text-sm font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">Color: {product.color}</p>
              <p className="">Price: Rs.{product.price.toFixed(2)}</p>
              <p className="text-gray-600">Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Order Details Table */}
        <div className="overflow-x-auto ">
          <table className=" border divide-y text-left divide-gray-200">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Detail</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Information</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-50 divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-semibold">Order ID</td>
                <td className="px-4 py-2">{order.id}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Date</td>
                <td className="px-4 py-2">{order.date}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Total</td>
                <td className="px-4 py-2">Rs.{order.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Payment Method</td>
                <td className="px-4 py-2">{order.payment.method}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Shipping Address</td>
                <td className="px-4 py-2">{order.shipping.name}, {order.shipping.address}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Contact</td>
                <td className="px-4 py-2">{order.shipping.phone}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Email</td>
                <td className="px-4 py-2">{order.shipping.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-2 rounded mt-4"
          onClick={() => navigate('/account', { state: { tab: 'order' } })}
        >
          View Order History
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ThankYouPage;
