import React from 'react';
import { motion } from 'framer-motion';

// Dummy Dropdown Data
const dropdownItems = [
  { id: 1, label: 'Grid 1 Column', link: '/grid-1' },
  { id: 2, label: 'Grid 2 Column', link: '/grid-2' },
  { id: 3, label: 'Product 360', link: '/product-360' },
  { id: 4, label: 'Countdown Timer', link: '/countdown' },
];

const Dropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <ul>
        {dropdownItems.map(item => (
          <li key={item.id} className="hover:bg-gray-100 px-4 py-2">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Dropdown;
