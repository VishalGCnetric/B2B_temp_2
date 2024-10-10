import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const navigate= useNavigate();
  const order = {
    id: 'SO-00014',
    date: '08/10/2024 05:58 PM',
    total: 2700.00,
    status: 'Pending',
    product: {
      name: 'Boat - 675-Light Salmon',
      color: 'Light Salmon',
      email: 'zohocommerce@gmail.com',
      price: 2500.00,
      quantity: 1,
      image: 'https://gadgets21.zohocommerce.com/product-images/Product%20Image.webp/5268485000000097597/200x200',
    },
    payment: {
      subtotal: 2500.00,
      shipping: 200.00,
      tax: 0.00,
      total: 2700.00,
      method: 'test',
    },
    shipping: {
      name: 'Vishal Giri',
      address: 'at post irla, dharashiv, Maharashtra - 413509, India.',
      phone: '09767176108',
      email: 'vishal@cnetric.com',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-4 p-4 px-8"
    >
      {/* Header Section */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Order Details</h2>
        <div>
        <button className="bg-black text-white px-4 py-2 mr-2 " onClick={() => navigate('/account', { state: { tab: 'order' } })}>Back to Orders</button>
        <button className="bg-black text-white px-4 py-2">Request Cancellation</button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="border p-4 mb-4 flex justify-between">
        <p>Order ID: {order.id} <br /> Placed on: {order.date} <br /> Total: Rs.{order.total.toFixed(2)}</p>
        <p className="mt-2">Order Status: <span className="text-yellow-500">{order.status}</span></p>
      </div>

      {/* Product Information */}
      <div className="border p-4 mb-4">
        <div className="flex items-center mb-4">
          <motion.img 
            src={order.product.image} 
            alt={order.product.name} 
            className="w-16 h-16 mr-4" 
            whileHover={{ scale: 1.1 }}
          />
          <div>
            <p className="font-semibold">{order.product.name}</p>
            <p>Color: {order.product.color}</p>
            <p>Mail: {order.product.email}</p>
            <p>Price: Rs.{order.product.price.toFixed(2)}</p>
            <p>Quantity: {order.product.quantity}</p>
          </div>
        </div>
      </div>

      {/* Payment, Shipping, and Order Data (Using Tables) */}
      <motion.div className="grid grid-cols-3 gap-4">
        
        {/* Payment Information */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border p-4 mb-4">
          <h3 className="font-semibold mb-2">Payment Information</h3>
          <hr />
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="py-2">Subtotal:</td>
                <td className="text-right">Rs.{order.payment.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Shipping:</td>
                <td className="text-right">Rs.{order.payment.shipping.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Tax:</td>
                <td className="text-right">Rs.{order.payment.tax.toFixed(2)}</td>
              </tr>
              <tr className='border-y'>
                <td className="font-semibold py-2">Total:</td>
                <td className="text-right font-semibold">Rs.{order.payment.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-2">Payment Method:</td>
                <td className="text-right">{order.payment.method}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        
        {/* Shipping Information */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border p-4 mb-4">
          <h3 className="font-semibold mb-2">Shipping Address</h3>
          <hr />
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="py-2">Name:</td>
                <td className="text-right">{order.shipping.name}</td>
              </tr>
              <tr>
                <td className="py-2">Address:</td>
                <td className="text-right py-2">{order.shipping.address}</td>
              </tr>
              <tr>
                <td className="py-2">Phone:</td>
                <td className="text-right">{order.shipping.phone}</td>
              </tr>
              <tr>
                <td className="py-2">Email:</td>
                <td className="text-right">{order.shipping.email}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        
        {/* Order Data */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border p-4 mb-4">
          <h3 className="font-semibold mb-2">Order Data</h3>
          <hr />
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="py-2">Email:</td>
                <td className="text-right">{order.shipping.email}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default OrderDetails;
