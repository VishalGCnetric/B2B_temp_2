import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AddToCartModal from '../components/cart/AddToCartModal';

const productData = {
  name: "Women's Tree Runner Go",
  price: 90,
  rating: 4.5,
  reviewCount: 175,
  freeShipping: true,
  colors: [
    { name: 'Natural White', value: '#F5F5DC' },
    { name: 'Natural Grey', value: '#808080' },
    { name: 'Natural Black', value: '#000000' },
    { name: 'Natural Navy', value: '#000080' },
    { name: 'Burgundy', value: '#800020' },
    { name: 'Blue', value: '#0000FF' },
  ],
  limitedEditionColors: [
    { name: 'Thunder', value: '#4a4a4a' },
    { name: 'Storm', value: '#708090' },
    { name: 'Natural White', value: '#F5F5DC' },
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Navy', value: '#000080' },
    { name: 'Grey', value: '#808080' },
  ],
  saleColors: [
    { name: 'Black', value: '#000000' },
    { name: 'Beige', value: '#F5F5DC' },
    { name: 'Grey', value: '#808080' },
    { name: 'Blue', value: '#0000FF' },
  ],
  sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
  images: [
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10955_24Q2_Tree_Runner_Go_Light_Grey_True_Navy_Blizzard_PDP_SINGLE_3Q_d6351abd-8d2d-4f8a-9d50-ff09e8746f72.png?v=1719251152',
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA0023W_Shoe_Angle_Global_Womens_Tree_Dasher_2_Natural_Black_Natural_Black_a3f706d8-75e3-4679-8f57-3d20bab1ea35.png?v=1707182247',
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/files/A10766M080_Tree_Dasher_2_SVP_Global_Mens_Tree_Hazy_Cocoa_Dark_Cocoa_Stony_Cream.png?v=1724260302',
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA000UM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_2.0_Medium_Grey_Light_Grey.png?v=1707182295',
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/A10467W080-Tree_Dasher_2-45-Global-Tree-Blizzard-Natural_Black-Blizzard-OREO_copy_ca5486d7-97bd-4eed-95d0-5d0e42d40446.png?v=1707181980',
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA0023W_Shoe_Angle_Global_Womens_Tree_Dasher_2_Natural_Black_Natural_Black_a3f706d8-75e3-4679-8f57-3d20bab1ea35.png?v=1707182247',
    'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA000UM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_2.0_Medium_Grey_Light_Grey.png?v=1707182295',
   
  ],
  highlights: [
    'Design offers enhanced durability in the toe and features a sleek, elevated look',
    'Reimagined midsole with more soft underfoot cushioning',
    'Lightweight, breathable Tree Fiber in the upper material delivers a cool, comfortable ride',
  ],
  details: [
    'Tree-to-sole with Tree Fiber upper, FSC-certified natural rubber outsole',
    'Refreshed cushion with a new sugarcane-based green EVA midsole',
    'Base Fit: Warm-weather, everyday wear; socks optional',
    'Breezy Material: Lightweight, breathable Tree Fiber in the upper delivers airy, next-level comfort',
    'Versatile Design: Wear with everything style, great for travel',
    'Where It\'s Made: Made in Vietnam. Learn more about our operations',
  ],
  accordionSections: [
    { title: 'Details', content: 'Product details...' },
    { title: 'Sustainability', content: 'Our commitment to sustainable practices...' },
    { title: 'Care Guide', content: 'To keep your Tree Runners in top shape...' },
    { title: 'Shipping & Returns', content: 'Free shipping on orders over $75...' },
  ],
};

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(productData.colors[4]); // Burgundy
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (selectedSize) {
      setIsCartModalOpen(true);
    } else {
      alert("Please select a size before adding to cart.");
    }
  };

  const cartItem = {
    name: "Men's Tree Dasher 2",
    color: "Blizzard (Light Gray Sole)",
    size: selectedSize,
    price: productData.price,
    image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA000UM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_2.0_Medium_Grey_Light_Grey.png?v=1707182295"
  };

  const recommendedProducts = [
    { name: "Anytime Ankle Sock", price: 16, image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA000UM_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHER_2.0_Medium_Grey_Light_Grey.png?v=1707182295" },
    { name: "Anytime No Show Sock", price: 14, image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA0023W_Shoe_Angle_Global_Womens_Tree_Dasher_2_Natural_Black_Natural_Black_a3f706d8-75e3-4679-8f57-3d20bab1ea35.png?v=1707182247" },
    { name: "Men's Tree Runner Sis", price: 100, image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA0023W_Shoe_Angle_Global_Womens_Tree_Dasher_2_Natural_Black_Natural_Black_a3f706d8-75e3-4679-8f57-3d20bab1ea35.png?v=1707182247" },
    { name: "Men's Tree Gliders", price: 135, image: "https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1066,f_auto,q_auto/https://www.allbirds.com/cdn/shop/products/AA0023W_Shoe_Angle_Global_Womens_Tree_Dasher_2_Natural_Black_Natural_Black_a3f706d8-75e3-4679-8f57-3d20bab1ea35.png?v=1707182247" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        {/* Image gallery */}
        

        
        <div className=" flex flex-reverse gap-2 lg:w-3/5 pr-8">
         
          <div className="flex flex-col flex-wrap gap-2 w-[10%]">
            {productData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer ${
                  selectedImage === index ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-[80%]"
          >
            <img
              src={productData.images[selectedImage]}
              alt={`${productData.name} - ${selectedColor.name}`}
              className="w-full h-[90vh] rounded-lg  border transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Product details */}
        <div className="lg:w-2/5 mt-8 lg:mt-0">
          <h1 className="text-2xl font-bold mb-2">{productData.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold">${productData.price}</span>
            {productData.freeShipping && (
              <span className="ml-4 text-sm text-green-600">FREE SHIPPING</span>
            )}
          </div>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(productData.rating) ? 'fill-current' : 'stroke-current'
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              ({productData.reviewCount})
            </span>
          </div>

          {/* Color selection */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">CLASSICS:</h2>
            <div className="flex flex-wrap gap-2">
              {productData.colors.map((color) => (
                <motion.button
                  key={color.name}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor.name === color.name
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">LIMITED EDITION:</h2>
            <div className="flex flex-wrap gap-2">
              {productData.limitedEditionColors.map((color) => (
                <motion.button
                  key={color.name}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor.name === color.name
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">SALE:</h2>
            <div className="flex flex-wrap gap-2">
              {productData.saleColors.map((color) => (
                <motion.button
                  key={color.name}
                  className={`w-6 h-6 rounded-full border ${
                    selectedColor.name === color.name
                      ? 'border-blue-500'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">SELECT SIZE:</h2>
            <div className="grid grid-cols-4 gap-2">
              {productData.sizes.map((size) => (
                <motion.button
                  key={size}
                  className={`py-2  border ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900 border-gray-300'
                  }`}
                  onClick={() => setSelectedSize(size)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {size}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Select a size button */}
          {selectedSize? <motion.button
        className="w-full bg-gray-900 text-white py-3 rounded font-semibold mb-4"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
      >
        ADD TO CART
      </motion.button>: <motion.button
            className="w-full bg-gray-200 text-zinc-500 py-3 rounded font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SELECT A SIZE
          </motion.button>}
         
         
          <div className="text-sm text-center mb-6">
            <a href="#" className="text-gray-600 underline">See Size Chart</a>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-2">FIND IN STORE</h2>
            <p className="text-sm text-gray-600">Please select a size to see availability at a store near you.</p>
          </div>

          {/* Product highlights */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Tree Runner Go Highlights</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {productData.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Accordion sections */}
          <div className="mt-8">
            {productData.accordionSections.map((section, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left"
                  onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                >
                  <span className="font-semibold">{section.title}</span>
                  {expandedSection === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedSection === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-4 text-sm"
                  >
                    <p>{section.content}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <AddToCartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cartItem={cartItem}
        recommendedProducts={recommendedProducts}
      />
    </div>
  );
};

export default ProductDetail;