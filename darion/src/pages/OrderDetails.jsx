import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetailsPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState(null);

  // Fetch the shipping address from localStorage
  useEffect(() => {
    const storedAddress = JSON.parse(localStorage.getItem('address'));
    if (storedAddress) {
      setShippingAddress(storedAddress);
    }
  }, []);

  // Dummy order data with product images, order status, type, and payment
  const dummyOrders = {
    '1': {
      id: '1',
      date: '2023-Oct-20',
      status: 'Completed',
      type: 'Online Purchase',
      paymentMethod: 'Credit Card',
      paymentStatus: 'Paid',
      items: [
        { 
          name: 'Item A', 
          qty: 2, 
          price: '$40.00', 
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_947,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10788_S24Q2_Tree_Runner_Rugged_Beige_Natural_White_PDP_SINGLE_3Q_f010bf13-bb62-48b0-aa10-d93a4928cb11.png?v=1719460487' 
        },
        { 
          name: 'Item B', 
          qty: 1, 
          price: '$40.00', 
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_947,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10788_S24Q2_Tree_Runner_Rugged_Beige_Natural_White_PDP_SINGLE_3Q_f010bf13-bb62-48b0-aa10-d93a4928cb11.png?v=1719460487' 
        },
      ],
      total: '$120.00',
    },
    '2': {
      id: '2',
      date: '2023-Oct-21',
      status: 'Processing',
      type: 'In-Store Pickup',
      paymentMethod: 'PayPal',
      paymentStatus: 'Pending',
      items: [
        { 
          name: 'Item C', 
          qty: 1, 
          price: '$50.00', 
          image: 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_947,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10788_S24Q2_Tree_Runner_Rugged_Beige_Natural_White_PDP_SINGLE_3Q_f010bf13-bb62-48b0-aa10-d93a4928cb11.png?v=1719460487' 
        },
      ],
      total: '$50.00',
    },
  };

  const order = dummyOrders[orderId];

  return (
    <div className="min-h-screen bg-[#f8f2ec] flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Order Details</h1>
<hr />
        {/* Order Summary */}
        <div className="flex justify-between py-4">
            <div>
        <p className="text-lg ">Order ID: {order.id}</p>
        <p>Date: {order.date}</p>
        </div>
        <div>
        <p>Status: {order.status}</p>
        <p>Order Type: {order.type}</p>
        </div>
        </div>
{/* <hr /> */}
        {/* Payment Information */}
        <h3 className="my-2 text-xl font-semibold">Payment Details</h3>
        <hr />
        <p className="mt-2">Payment Method: {order.paymentMethod}</p>
        <p>Payment Status: {order.paymentStatus}</p>
        {/* Product List */}
        <table className="w-full mt-4">
          <thead >
            <tr>
              {/* <th className="text-left border-b-2 pb-2">Image</th> */}
              <th className="text-left border-b-2 pl-6 pb-2">Items</th>
              <th className="text-center border-b-2  pb-2">Quantity</th>
              <th className="text-center border-b-2  pb-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="text-center py-2"><div className="flex justify-start px-4 gap-4 item-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 transition-transform duration-500 ease-in-out group-hover:scale-105" />
                  {item.name}
                  </div>
                </td>
                {/* <td className="py-2">                  <img src={item.image} alt={item.name} className="w-16 h-16" />
               </td> */}
                <td className="text-center py-2">{item.qty}</td>
                <td className="text-center py-2">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Price */}
        <p className="text-lg mb-2 font-semibold mt-4">Total: {order.total}</p>
<hr />
        {/* Shipping Address */}
        {shippingAddress && (  
          <div className="mt-6">
            <h3 className="text-xl font-bold">Shipping Address</h3>
            <p>{shippingAddress.firstName} {shippingAddress.lastName}</p>
            <p>{shippingAddress.address1}</p>
            <p>{shippingAddress.city}, {shippingAddress.state}</p>
            <p>{shippingAddress.country}, {shippingAddress.postalCode}</p>
            <p>Phone: {shippingAddress.phone}</p>
          </div>
        )}

        {!shippingAddress && (
          <p className="text-sm text-gray-600 mt-6">
            Shipping address not available.
          </p>
        )}

        {/* Back to Orders Button */}
        <button
          onClick={() => navigate('/account')}
          className="mt-6 px-4 py-2 bg-black text-white font-semibold"
        >
          Back to Orders
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
