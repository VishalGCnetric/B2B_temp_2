import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Egg Dining Table', price: 55.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-40.jpg?v=1720754898&width=600' },
  { id: 2, name: 'Century Starburst Clock', price: 70.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-10_1bf59adc-8340-44f5-a49b-4e869a84af07.jpg?v=1720753642&width=600' },
  { id: 3, name: 'Bouquet Flower Vase', price: 70.00, oldPrice: 890.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-9.jpg?v=1720753208&width=600', discount: '-30%' },
  { id: 4, name: 'Caravaggio Read Wall Light', price: 57.00, maxPrice: 80.00, image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22_1080x1080.jpg?v=1720753501' },
];

const ProductCard = ({ product }) => {
  const navigation =useNavigate();

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg bg-white shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-[290px] object-cover"
        whileHover={{ scale: 1.1 }}
      />
      {product.discount && (
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          {product.discount}
        </span>
      )}
      <motion.div
        className="absolute inset-0 bottom-20 bg-black bg-opacity-10 flex flex-col justify-end items-center opacity-0"
        whileHover={{ opacity: 1 }}
      >
        <div className="flex space-x-2 mb-2">
          <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-white rounded-full">
            <Heart size={20} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-white rounded-full">
            <ShoppingCart size={20} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-white rounded-full">
            <RefreshCw size={20} />
          </motion.button>
        </div>
        <motion.button
          className="px-4 py-2 w-full bg-black text-white font-semibold rounded"
          whileHover={{ scale: 1.05 }}
          onClick={()=>navigation("/products/1")}
        >
          Quickview
        </motion.button>
      </motion.div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center mt-1">
          {product.oldPrice && (
            <span className="text-gray-500 line-through mr-2">${product.oldPrice.toFixed(2)}</span>
          )}
          <span className="text-black font-bold">${product.price.toFixed(2)}</span>
          {product.maxPrice && (
            <span className="text-black font-bold ml-1">- ${product.maxPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Bestseller</h2>
        <p className="text-sm text-gray-600">Experience the best products at our store!</p>
        <motion.button           whileHover={{ scale: 1.05 }}
 className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white rounded-lg">View All</motion.button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;