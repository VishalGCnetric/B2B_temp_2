import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();

  // Dummy orders for the table
  const dummyOrders = [
    { id: '1', date: '2023-09-20', total: '$120.00', status: 'Completed' },
    { id: '2', date: '2023-09-21', total: '$50.00', status: 'Processing' },
  ];

  // Fetch address from localStorage
  const address = JSON.parse(localStorage.getItem('address'));

  return (
    <div className="min-h-screen bg-[#f8f2ec] flex flex-col items-center gap-8 py-10">
      {/* Header Section */}
      <div className="w-full flex flex-col justify-center px-10 items-center gap-4">
        <h1 className="text-3xl font-bold tracking-wide">MY ACCOUNT</h1>
        <button className="text-sm font-semibold">LOGOUT</button>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl gap-8 flex justify-between items-start mt-12 px-10">
        {/* Left side: Order Info */}
        <div className="flex-1">
          {dummyOrders.length > 0 ? (
            <><h1 className="text-xl p-4 font-semibold text-center">                Your Recent Orders
</h1>
            <table className="w-full bg-white shadow-lg">
              <thead className=" border-2 border-gray-400">
                <tr>
                  <th className="text-left p-4">Order ID</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Total</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody className="">
                {dummyOrders.map((order) => (
                  <tr
                    key={order.id}
                    onClick={() => navigate(`/order/${order.id}`)}
                    className="cursor-pointer hover:bg-gray-100 border-b-gray-600 border-x-2 border-b-2 border-gray-400"
                  >
                    <td className="p-4">{order.id}</td>
                    <td className="p-4">{order.date}</td>
                    <td className="p-4">{order.total}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
          ) : (
            <p className="text-lg font-light">You haven't placed any orders yet.</p>
          )}
        </div>

        {/* Right side: Profile Info */}
        <div className="w-[300px] bg-white shadow-lg p-6">
          <h2 className="text-xl font-bold">VISHAL GIRI</h2>
          <p className="mt-2 text-sm text-gray-600">VISHAL@CNETRIC.COM</p>
          {address ? (
            <div className="mt-6">
              <h3 className="text-sm font-semibold">Shipping Address</h3>
              <p>{address.firstName} {address.lastName}</p>
              <p>{address.address1}</p>
              <p>{address.city}, {address.state}</p>
              <p>{address.country}, {address.postalCode}</p>
            </div>
          ) : (
            <p className="mt-6 text-sm font-light text-gray-600">
              YOU HAVEN'T ADDED AN ADDRESS YET.
            </p>
          )}
          <a href="./account/add-address" className="text-sm text-zinc-500 mt-2 block">
            ADD AN ADDRESS
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
