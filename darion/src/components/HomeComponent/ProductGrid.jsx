import React from 'react';
import { motion } from 'framer-motion'; // For smooth animations
import 'tailwindcss/tailwind.css';

// Product data object
const products = [
  {
    id: 1,
    name: 'Tree Runner Go',
    color: 'Thunder Red',
    price: '$120',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/25kaBcqrF20cfR3D2EVJh7/2a70011de8a9b7a09a9ca4db30061962/A10967_24Q2_Tree_Runner_Go_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png',
  },
  {
    id: 2,
    name: 'Tree Dasher Relay',
    color: 'Blizzard/Thunder Red',
    price: '$135',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/1KP80D2rQtCP8vovpLHHeW/ea5ad914685cf5a7abfb1acca98de4ad/A11061_24Q3_Tree_Dasher_Relay_Blizzard_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png',
  },
  {
    id: 3,
    name: 'Tree Dasher 2',
    color: 'Blizzard/Thunder Red',
    price: '$135',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/3tr7lkOFbPGPXNbtxI0VAY/1a81fb077731f385f7db585ffd1911c9/A11039_24Q3_Tree_Dasher_2_Blizzard_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png',
  },
  {
    id: 4,
    name: 'Tree Dasher Relay',
    color: 'Rugged Beige',
    price: '$135',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/5orWCriOBkoyZRcM5jvWJh/b4df41cbff0dce2bb1f4a9abc87990f1/A11065_24Q3_Tree_Dasher_Relay_Rugged_Beige_Rugged_Beige_PDP_LEFT-2000x2000.png',
  },
];



const ProductGrid = () => {
    return (
      <div className="flex flex-col lg:flex-row my-10">
        {/* Left Banner Section */}
        <div className="w-full lg:w-1/2 relative">
          <motion.img
            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1867/cms/6MN5mrkw6hRncfKz6WSWYA/37ebe57832867529a22fb18df792815f/24Q3_FallFlow2_Site_ShopableFeatured_Desktop_2000x2000.jpg"
            alt="Banner"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/50">
            <h2 className="text-3xl font-bold text-white">Fall Colors Ahead</h2>
            <p className="text-white mt-2">
              Our latest drop takes its cues from the changing seasons.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-white w-[150px] text-black px-4 py-2 hover:scale-105 font-semibold transition duration-300 hover:bg-black hover:text-white">
                Shop Men
              </button>
              <button className="bg-white w-[150px] text-black px-4 py-2 hover:scale-105 font-semibold transition duration-300 hover:bg-black hover:text-white">
                Shop Women
              </button>
            </div>
          </div>
        </div>
  
        {/* Right Product Section */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative p-4 bg-gray-100 hover:bg-white transition duration-300 shadow-lg rounded-lg group"
            >
              <motion.img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="mt-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.color}</p>
                <p className="text-black font-bold mt-2">{product.price}</p>
              </div>
              {/* Hover Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button className="bg-white mb-2 w-[150px] text-black px-4 py-2 hover:scale-105 font-semibold transition duration-300 hover:bg-black hover:text-white">
                  Shop Men
                </button>
                <button className="bg-white text-black w-[150px] px-4 py-2 hover:scale-105 font-semibold transition duration-300 hover:bg-black hover:text-white">
                  Shop Women
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductGrid;

