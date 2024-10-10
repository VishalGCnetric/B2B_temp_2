import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

const AccountForm = () => {
  const [formType, setFormType] = useState('signIn');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formType === 'create' && !formData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (formType === 'create' && !formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      showToast('success', `Account ${formType === 'signIn' ? 'signed in' : 'created'} successfully!`);
    } else {
      showToast('error', 'Please correct the errors in the form.');
    }
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md my-8">
      <h1 className="text-2xl font-bold mb-6">{formType === 'signIn' ? 'Account' : 'Create Account'}</h1>
      <form onSubmit={handleSubmit}>
        {formType === 'create' && (
          <>
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 border rounded"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 border rounded"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </>
        )}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        {formType === 'signIn' && (
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Lost your password?
          </a>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-black text-white p-2 rounded mt-4"
        >
          {formType === 'signIn' ? 'SIGN IN' : 'REGISTER'}
        </motion.button>
      </form>
      <div className="mt-4 text-center">
        {formType === 'signIn' ? (
          <>
            <p className="text-sm text-gray-600">New customer?</p>
            <p className="text-sm text-gray-600">
              Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our
              emails.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormType('create')}
              className="mt-2 bg-white text-black border border-black p-2 rounded w-full"
            >
              REGISTER
            </motion.button>
          </>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormType('signIn')}
            className="mt-2 bg-white text-black border border-black p-2 rounded w-full"
          >
            SIGN IN
          </motion.button>
        )}
      </div>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4  p-4 rounded-lg shadow-lg ${
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="inline-block mr-2" size={20} />
          ) : (
            <AlertCircle className="inline-block mr-2" size={20} />
          )}
          {toast.message}
        </motion.div>
      )}
    </div>
  );
};

export default AccountForm;