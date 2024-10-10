import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Dummy data
const userData = {
  firstName: 'Vishal',
  lastName: 'Giri',
  dateOfBirth: '',
  gender: '',
  email: 'vishal@cnetric.com',
  phoneNumber: '09767176108',
};

const ordersData = [
  {
    id: 'SO-00015',
    date: '08/10/2024 06:02 PM',
    status: 'Pending',
    total: 5199.00,
    product: 'Amkette',
    image: 'https://gadgets21.zohocommerce.com/product-images/Product+Image-10.webp/5268485000000097441/600x600',
  },
  {
    id: 'SO-00014',
    date: '08/10/2024 05:58 PM',
    status: 'delivered',
    total: 2700.00,
    product: 'Boat - 675-Light Salmon',
    image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07.jpg?v=1720753642&width=600',
  },
];

// Dummy quote data
const quotesData = [
  {
    id: 'Q-00010',
    date: '08/09/2024 10:32 AM',
    status: 'Pending',
    total: 15000.00,
    items: [
      { name: 'Dell Laptop', quantity: 2, price: 7500.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07.jpg?v=1720753642&width=600' },
    ]
,
  },
  {
    id: 'Q-00009',
    date: '07/25/2024 02:15 PM',
    status: 'Accepted',
    total: 32000.00,
    items: [
      { name: 'Dell Laptop', quantity: 2, price: 7500.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07.jpg?v=1720753642&width=600' },
    ],
  },
  {
    id: 'Q-00008',
    date: '07/10/2024 05:45 PM',
    status: 'Declined',
    total: 20000.00,
    items: [
      { name: 'Dell Laptop', quantity: 2, price: 7500.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07.jpg?v=1720753642&width=600' },
    ],
  },
];

// Dummy address data
const addressData = {
  fullName: 'Vishal Giri',
  addressLine1: '1234 Main Street',
  addressLine2: 'Apt 56',
  city: 'Bangalore',
  state: 'Karnataka',
  postalCode: '560001',
  country: 'India',
  phoneNumber: '09767176108',
};


const TabButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 ${active ? 'border-b-2 border-zinc-900' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const ProfileTab = ({ user }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="mt-4 w-2/3  py-4"
  >
    <div className="flex justify-between mb-4 pb-4 border-b">
      <h2 className="text-xl font-bold">My Profile</h2>
      <div>
        <button className="bg-black text-white px-4 py-2 mr-2">Edit</button>
        <button className="bg-white text-black border border-black px-4 py-2">Change Password</button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(user).map(([key, value]) => (
        <div key={key}>
          <label className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <p>{value || '-'}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const OrdersTab = ({ orders }) =>{
  const navigate = useNavigate();

  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="mt-4 w-2/3"
  >
    <div className="flex justify-between mb-4 border-b pb-2">
      <h2 className="text-xl font-bold">Ongoing Orders</h2>
      <select className="border p-2">
        <option>Last 3 Months</option>
      </select>
    </div>
    {orders.map((order) => (
      <div key={order.id} className="border p-4 mb-4">
        <div className="flex justify-between mb-2">
          <div>
            <p className="font-semibold">Order ID: {order.id}</p>
            <p>Placed on: {order.date}</p>
          </div>
          <div>
            <p className="font-semibold">Status</p>
            <p className="text-yellow-500">{order.status}</p>
          </div>
          <div>
            <p className="font-semibold">Total</p>
            <p>Rs.{order.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={order.image} alt={order.product} className="w-16 h-16 mr-4" />
            <p>{order.product}</p>
          </div>
          <div>
            <button onClick={()=>{navigate(`/order/${order.id}`)}} className="bg-black text-white px-4 py-2 mr-2">Order Details</button>
            <button className="bg-white text-black border border-black px-4 py-2">Cancel</button>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
);}

const QuoteListTab = ({ quotes, }) =>{
  const navigate = useNavigate();

  return (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 w-2/3 py-4">
    <div className="flex justify-between mb-4 border-b pb-2">
      <h2 className="text-xl font-bold">My Quotes</h2>
    </div>
    {quotes.map((quote) => (
      <div key={quote.id} className="border p-4 mb-4">
        <div className="flex justify-between mb-2">
          <div>
            <p className="font-semibold">Quote ID: {quote.id}</p>
            <p>Requested on: {quote.date}</p>
          </div>
          <div>
            <p className="font-semibold">Status</p>
            <p className={`text-${quote.status === 'Accepted' ? 'green' : quote.status === 'Declined' ? 'red' : 'yellow'}-500`}>{quote.status}</p>
          </div>
          <div>
            <p className="font-semibold">Total</p>
            <p>Rs.{quote.total.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={quote.items[0].image} alt={quote.items[0].name} className="w-16 h-16 mr-4" />
          <p>{quote.items[0].name}</p>
        </div>
        <div className="flex justify-end">
          <button onClick={()=>{
            console.log("clicked")
            navigate(`/quote/${quote.id}`)}} className="bg-black text-white px-4 py-2">View Quote</button>
        </div>
      </div>
    ))}
  </motion.div>
);}

const AddressesTab = ({ address }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="mt-4 w-2/3"
  >
    <h2 className="text-xl font-bold mb-4">My Address</h2>
    <div className="border p-4">
      <p><strong>Name:</strong> {address.fullName}</p>
      <p><strong>Address Line 1:</strong> {address.addressLine1}</p>
      <p><strong>Address Line 2:</strong> {address.addressLine2}</p>
      <p><strong>City:</strong> {address.city}</p>
      <p><strong>State:</strong> {address.state}</p>
      <p><strong>Postal Code:</strong> {address.postalCode}</p>
      <p><strong>Country:</strong> {address.country}</p>
      <p><strong>Phone Number:</strong> {address.phoneNumber}</p>
    </div>
  </motion.div>
);




const Account = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('profile');

  // Effect to handle setting the active tab based on location state or query params
  useEffect(() => {
    // Check if there's a state object passed with the location (could be 'orders' or 'quotes')
    const tabFromState = location.state?.tab;

    if (tabFromState) {
      setActiveTab(tabFromState);
    }
  }, [location]);
  return (
    <div className="container mx-auto p-4">
      <div className="border-b mb-4 flex justify-center items-center">
        <TabButton active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>My Profile</TabButton>
        <TabButton active={activeTab === 'order'} onClick={() => setActiveTab('order')}>My Orders</TabButton>
        <TabButton active={activeTab === 'addresses'} onClick={() => setActiveTab('addresses')}>My Addresses</TabButton>
        <TabButton active={activeTab === 'quote'} onClick={() => setActiveTab('quote')}>My Quotes</TabButton>
      </div>
      <div className="h-min-[80vh] flex justify-center items-center">
        {activeTab === 'profile' && <ProfileTab user={userData} />}
        {activeTab === 'order' && <OrdersTab orders={ordersData} />}
        {activeTab === 'addresses' && <AddressesTab address={addressData} />}
        {activeTab === 'quote' && (
          <QuoteListTab quotes={quotesData}  />
        )}
      </div>
    </div>
  );
};

export default Account;
