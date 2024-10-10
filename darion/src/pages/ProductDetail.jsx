

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, RefreshCw, Share2, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentVariant, setCurrentVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  const [selectedVariants, setSelectedVariants] = useState({});
  const productVariants = [
    { id: 1, color: 'Pink', image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22_1080x1080.jpg?v=1720753501' },
    { id: 2, color: 'Blue', image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22-1_1080x1080.jpg?v=1720753501' },
    { id: 3, color: 'Green', image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22-1_1080x1080.jpg?v=1720753501' },
  ];
  const productData = {
    name: "Caravaggio Read Wall Light",
    basePrice: 57.00,
    maxPrice: 60.00,
    rating: 4.8,
    reviewCount: 25,
    viewCount: 24,
    imageUrl:[
      {  url: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22_1080x1080.jpg?v=1720753501' },
      {  url: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22-1_1080x1080.jpg?v=1720753501' },
      {  url: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22-1_1080x1080.jpg?v=1720753501' },
      {  url: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22-1_1080x1080.jpg?v=1720753501' },

    ],
    variants: [
      { 
        id: 1, 
        name: 'Handle/Shade 750mm', 
        price: 800.00,
        image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22_1080x1080.jpg?v=1720753501'
      },
      { 
        id: 2, 
        name: 'Suspension/Arms/Base', 
        price: 872.00,
        image: 'https://wpbingo-darion.myshopify.com/cdn/shop/files/pro-22_1080x1080.jpg?v=1720753501'
      }
    ],
    description: "The Caravaggio Read Wall Light is a modern and elegant lighting solution perfect for bedrooms, living rooms, or office spaces. Its adjustable arm and shade allow for precise light direction.",
    reviews: [
      { id: 1, author: "John D.", rating: 5, comment: "Excellent quality and beautiful design!" },
      { id: 2, author: "Sarah M.", rating: 4, comment: "Good light, but a bit pricey." },
    ],
    shipping: {
      estimatedDelivery: "Jun 22 - Jun 30",
      methods: [
        { name: "Standard Shipping", price: 5.99 },
        { name: "Express Shipping", price: 15.99 },
      ]
    },
    returns: {
      policy: "30-day return policy",
      conditions: "Item must be unused and in original packaging."
    }
  };
  const nextVariant = () => {
    setCurrentVariant((prev) => (prev + 1) % productVariants.length);
  };

  const prevVariant = () => {
    setCurrentVariant((prev) => (prev - 1 + productVariants.length) % productVariants.length);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p>{productData.description}</p>;
      case 'reviews':
        return (
          <div>
            <h3 className="font-semibold mb-2">Customer Reviews</h3>
            {productData.reviews.map(review => (
              <div key={review.id} className="mb-4">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">{review.author}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < review.rating ? "currentColor" : "none"} size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        );
      case 'shipping':
        return (
          <div>
            <h3 className="font-semibold mb-2">Shipping Information</h3>
            <p>Estimated delivery: {productData.shipping.estimatedDelivery}</p>
            <ul className="list-disc list-inside mt-2">
              {productData.shipping.methods.map((method, index) => (
                <li key={index}>{method.name}: ${method.price.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        );
      case 'return':
        return (
          <div>
            <h3 className="font-semibold mb-2">Return Policy</h3>
            <p>{productData.returns.policy}</p>
            <p className="mt-2"><strong>Conditions:</strong> {productData.returns.conditions}</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="container flex flex-col text-center justify-center items-center mx-auto px-4 py-8">
       <nav className="cursor-pointer mb-4 w-full text-left text-lg text-semibold">
      <ol className="list-reset flex text-gray-700">
        <li>
          <a href="/" className="hover:text-gray-900">Home</a>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li>
          <a href="/bathroom" className="hover:text-gray-900">Bathroom</a>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="text-gray-500">
          Caravaggio Read Wall Light
        </li>
      </ol>
    </nav>
      <div className="  grid grid-cols-1">
        {/* Product Image Slider */}
        <div className=" w-full flex gap-8">
        <div className="flex flex-row gap-2 md:flex-col">
            {/* Thumbnails */}
            {productData.imageUrl.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentVariant(index)}
                className={`border p-1 my-1 ${index === currentVariant ? 'border-black' : 'border-gray-300'}`}
              >
                <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-48 h-48 object-cover" />
              </button>
            ))}
          </div> 
          <div className='relative'>       
          <motion.div
            key={currentVariant}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-square  relative overflow-hidden rounded-lg"
          >
            <img
              src={productData.imageUrl[currentVariant].url}
              alt={`Century Starburst Clock -`}
              className="w-[100%] h-auto object-cover"
            />
          </motion.div>
          <button
            onClick={prevVariant}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextVariant}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight />
          </button>
          </div>  

        </div>

        {/* Product Details */}
        <div className="w-full my-10" >
          <h1 className="text-3xl font-bold mb-2">Century Starburst Clock</h1>
          <div className="flex justify-center items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">32 reviews</span>
          </div>
          <p className="text-2xl font-bold mb-4">$70.00</p>
          <p className="text-gray-600 mb-4">
            32 people are viewing this right now
          </p>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button className="flex items-center text-red-500">
              <Heart className="mr-1" /> 26 people love it
            </button>
            <button className="flex items-center text-blue-500">
              <RefreshCw className="mr-1" /> In stock
            </button>
          </div>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
<div className='flex flex-col items-center justify-center'>
          {productData.variants.map(variant => (
              <div key={variant.id} className="w-1/2 flex items-center justify-around border mx-auto px-4 mb-4 py-4">
                <div className="flex  items-center">
                  <img src={variant.image} alt={variant.name} className="w-12 h-12 object-cover mr-4" />
                  <span>{variant.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-4">${variant.price.toFixed(2)}</span>
                  <input
                    type="checkbox"
                    checked={selectedVariants[variant.id] || false}
                    onChange={() => handleVariantSelection(variant.id)}
                    className="w-5 h-5"
                  />
                </div>
              </div>
            ))}
            </div>
          <div className="flex justify-center items-center mb-6 gap-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 border rounded-l"
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 text-center border"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 border rounded-r"
            >
              <Plus size={16} />
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" w-1/3  px-6 py-2 bg-black text-white rounded"
            >
              Add To Cart
            </motion.button>
          </div>
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               className="w-1/2 py-3 border border-gray-300  mb-6 hover:bg-black hover:text-white rounded-lg">
            Buy it now
          </motion.button>
          <div className="flex justify-center items-center gap-20">
            <button className="flex items-center">
              <RefreshCw className="mr-1" /> Compare
            </button>
            <button className="flex items-center">
              <Star className="mr-1" /> Question
            </button>
            <button className="flex items-center">
              <Share2 className="mr-1" /> Share
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 border-t pt-4 mb-6 p-6 bg-zinc-100 rounded-md my-4">
        <h3 className="font-semibold mb-2 text-zinc-800">Guaranteed Checkout</h3>
        <div className="flex justify-center space-x-2">
          <img src="https://wpbingo-darion.myshopify.com/cdn/shop/files/Variable-Color.webp?crop=center&height=30&v=1721272978&width=432" alt="Visa" className="h-6" />
      
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-center border-b">
          {['description', 'reviews', 'shipping', 'return'].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-black font-semibold' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="mt-4 h-[100px]">
          {renderTabContent()}
        </div>
      </div>
   
     
    </div>
  );
};

export default ProductDetailPage;



