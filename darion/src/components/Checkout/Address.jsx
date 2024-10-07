import React, { useState } from 'react';
import { motion } from 'framer-motion';
const AddressForm = ({ handleNext }) => {
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
    const [addresses, setAddresses] = useState([
        "Mr Vishal Giri, new street 102, 413514 pune",
        "Mr Sameer Sheikh, Haudin 2, 560042 Bangalore"
    ]);
    const [deliveryAddress, setDeliveryAddress] = useState(addresses[0]);
    const [billingAddress, setBillingAddress] = useState(addresses[0]); // Initialize with the same as delivery

    const [newDeliveryAddress, setNewDeliveryAddress] = useState({
        salutation: '',
        firstName: '',
        lastName: '',
        company: '',
        street: '',
        houseNumber: '',
        additionalField: '',
        postcode: '',
        city: '',
        country: '',
        phone: ''
    });

    const [newBillingAddress, setNewBillingAddress] = useState({
        salutation: '',
        firstName: '',
        lastName: '',
        company: '',
        street: '',
        houseNumber: '',
        additionalField: '',
        postcode: '',
        city: '',
        country: '',
        phone: ''
    });

    const handleInputChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'delivery') {
            setNewDeliveryAddress(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (type === 'billing') {
            setNewBillingAddress(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleNextClick = () => {
        // Update delivery address based on selection
        if (deliveryAddress === '') {
            setDeliveryAddress(`${newDeliveryAddress.firstName} ${newDeliveryAddress.lastName}, ${newDeliveryAddress.street}, ${newDeliveryAddress.postcode} ${newDeliveryAddress.city}`);
        }

        // Update billing address based on selection
        if (!billingSameAsShipping && billingAddress === '') {
            setBillingAddress(`${newBillingAddress.firstName} ${newBillingAddress.lastName}, ${newBillingAddress.street}, ${newBillingAddress.postcode} ${newBillingAddress.city}`);
        } else if (billingSameAsShipping) {
            setBillingAddress(deliveryAddress); // Set billing address same as delivery if selected
        }

        // Print addresses to console for demonstration
        console.log('Delivery Address:', deliveryAddress);
        console.log('Billing Address:', billingAddress);

        // Pass control to parent component using handleNext prop
        handleNext();
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold mb-2">Delivery Address</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Select a delivery address</label>
                    <select
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                    >
                        <option value="">Define new address</option>
                        {addresses.map((address, index) => (
                            <option key={index} value={address}>{address}</option>
                        ))}
                    </select>
                    {deliveryAddress === '' && (
                         <div className="mt-6 bg-zinc-200 p-4 rounded-md">
                         <h3 className="text-xl font-semibold mb-4">Define new address</h3>
                         <form className="grid grid-cols-2 gap-4">
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Salutation</label>
                                 <select
                                     name="salutation"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.salutation}
                                     onChange={handleInputChange}
                                 >
                                     <option value="Mr.">Mr.</option>
                                     <option value="Ms.">Ms.</option>
                                     <option value="Mrs.">Mrs.</option>
                                     <option value="Dr.">Dr.</option>
                                 </select>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">First Name</label>
                                 <input
                                     type="text"
                                     name="firstName"
                                     placeholder="First Name"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.firstName}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                 <input
                                     type="text"
                                     name="lastName"
                                     placeholder="Last Name"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.lastName}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Company</label>
                                 <input
                                     type="text"
                                     name="company"
                                     placeholder="Company"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.company}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Street</label>
                                 <input
                                     type="text"
                                     name="street"
                                     placeholder="Street"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.street}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">House Number</label>
                                 <input
                                     type="text"
                                     name="houseNumber"
                                     placeholder="House Number"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.houseNumber}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Additional address field</label>
                                 <input
                                     type="text"
                                     name="additionalField"
                                     placeholder="Additional address field"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.additionalField}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Postcode</label>
                                 <input
                                     type="text"
                                     name="postcode"
                                     placeholder="Postcode"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.postcode}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">City</label>
                                 <input
                                     type="text"
                                     name="city"
                                     placeholder="City"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.city}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Country</label>
                                 <select
                                     name="country"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.country}
                                     onChange={handleInputChange}
                                 >
                                     <option value="Germany">Germany</option>
                                     <option value="USA">USA</option>
                                     <option value="India">India</option>
                                 </select>
                             </div>
                             <div>
                                 <label className="block text-sm font-medium text-gray-700">Phone</label>
                                 <input
                                     type="text"
                                     name="phone"
                                     placeholder="Phone"
                                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                     value={newDeliveryAddress.phone}
                                     onChange={handleInputChange}
                                 />
                             </div>
                             <div className="col-span-2">
                                 <label className="block text-sm font-medium text-gray-700">
                                     <input
                                         type="checkbox"
                                         className="mr-2"
                                         checked={billingSameAsShipping}
                                         onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
                                     />
                                     Save new address to address book
                                 </label>
                             </div>
                         </form>
                     </div>
                    )}
                </div>
            </div>

            {/* Billing Address section */}
            <div className="border-b pb-4 mb-4">
                <h2 className="text-2xl font-bold mb-2">Billing Address</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" style={{ color: billingSameAsShipping ? 'black' : 'inherit' }}>
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={billingSameAsShipping}
                            onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
                        />
                        Billing same as shipping
                    </label>
                    {!billingSameAsShipping && (
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Select or define a billing address</label>
                            <select
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                value={billingAddress}
                                onChange={(e) => setBillingAddress(e.target.value)}
                            >
                                <option value="">Define new address</option>
                                {addresses.map((address, index) => (
                                    <option key={index} value={address}>{address}</option>
                                ))}
                            </select>
                            {billingAddress === '' && (
                                 <div className="mt-6 bg-zinc-200 p-4 rounded-md">
                                 <h3 className="text-xl font-semibold mb-4">Define new address</h3>
                                 <form className="grid grid-cols-2 gap-4">
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Salutation</label>
                                         <select
                                             name="salutation"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.salutation}
                                             onChange={handleInputChange}
                                         >
                                             <option value="Mr.">Mr.</option>
                                             <option value="Ms.">Ms.</option>
                                             <option value="Mrs.">Mrs.</option>
                                             <option value="Dr.">Dr.</option>
                                         </select>
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">First Name</label>
                                         <input
                                             type="text"
                                             name="firstName"
                                             placeholder="First Name"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.firstName}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                         <input
                                             type="text"
                                             name="lastName"
                                             placeholder="Last Name"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.lastName}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Company</label>
                                         <input
                                             type="text"
                                             name="company"
                                             placeholder="Company"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.company}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Street</label>
                                         <input
                                             type="text"
                                             name="street"
                                             placeholder="Street"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.street}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">House Number</label>
                                         <input
                                             type="text"
                                             name="houseNumber"
                                             placeholder="House Number"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.houseNumber}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Additional address field</label>
                                         <input
                                             type="text"
                                             name="additionalField"
                                             placeholder="Additional address field"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.additionalField}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Postcode</label>
                                         <input
                                             type="text"
                                             name="postcode"
                                             placeholder="Postcode"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.postcode}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">City</label>
                                         <input
                                             type="text"
                                             name="city"
                                             placeholder="City"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.city}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Country</label>
                                         <select
                                             name="country"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.country}
                                             onChange={handleInputChange}
                                         >
                                             <option value="Germany">Germany</option>
                                             <option value="USA">USA</option>
                                             <option value="India">India</option>
                                         </select>
                                     </div>
                                     <div>
                                         <label className="block text-sm font-medium text-gray-700">Phone</label>
                                         <input
                                             type="text"
                                             name="phone"
                                             placeholder="Phone"
                                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                             value={newBillingAddress.phone}
                                             onChange={handleInputChange}
                                         />
                                     </div>
                                     <div className="col-span-2">
                                         <label className="block text-sm font-medium text-gray-700">
                                             <input
                                                 type="checkbox"
                                                 className="mr-2"
                                                 checked={billingSameAsShipping}
                                                 onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
                                             />
                                             Save new address to address book
                                         </label>
                                     </div>
                                 </form>
                             </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Next button */}
            <motion.button
              type="submit"
           className="w-full h-[80px] bg-black text-white hover:text-black py-3 font-bold transition-colors duration-300 ease-in-out hover:bg-[#f7f1ed] hover:border-2 hover:border-black"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            
                onClick={handleNextClick}
            >
                Next
            </motion.button>
        </div>
    );
};

export default AddressForm;