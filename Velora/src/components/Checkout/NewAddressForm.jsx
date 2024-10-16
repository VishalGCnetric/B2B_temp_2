import React from 'react'

const NewAddressForm = () => {
  return (
    <div className="mt-6 bg-zinc-200 p-4 rounded-md">
    <h3 className="text-xl font-semibold mb-4">Define new address</h3>
    <form className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Salutation</label>
            <select
                name="salutation"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                value={newAddress.salutation}
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
                value={newAddress.firstName}
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
                value={newAddress.lastName}
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
                value={newAddress.company}
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
                value={newAddress.street}
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
                value={newAddress.houseNumber}
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
                value={newAddress.additionalField}
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
                value={newAddress.postcode}
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
                value={newAddress.city}
                onChange={handleInputChange}
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
                name="country"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                value={newAddress.country}
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
                value={newAddress.phone}
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
  )
}

export default NewAddressForm