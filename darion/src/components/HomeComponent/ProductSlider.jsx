import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBigLeft, ArrowBigRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlider = () => {
  const [activeTab, setActiveTab] = useState('women'); // Default to women's products

  const menProducts = [
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
    { id: 1, name: "Men's Wool Runner Go", color: 'Medium Grey', price: '$110', img: 'https://via.placeholder.com/200' },
    { id: 2, name: "Men's Tree Runner Go", color: 'Thunder Red', price: '$120', img: 'https://via.placeholder.com/200' },
    { id: 3, name: "Men's Tree Dasher Relay", color: 'Blizzard/Thunder Red', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 4, name: "Men's Tree Gliders", color: 'Natural White/Beige', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 5, name: "Women's Tree Dasher Relay", color: 'Blizzard/Thunder Red', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 6, name: "Women's Tree Gliders", color: 'Natural White/Beige', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 7, name: "Women's Wool Runner Go", color: 'Medium Grey', price: '$110', img: 'https://via.placeholder.com/200' },
    { id: 8, name: "Women's Tree Runner Go", color: 'Thunder Red', price: '$120', img: 'https://via.placeholder.com/200' },
    { id: 9, name: "Men's Wool Runner Go", color: 'Medium Grey', price: '$110', img: 'https://via.placeholder.com/200' },
    { id: 10, name: "Men's Wool Runner Go", color: 'Medium Grey', price: '$110', img: 'https://via.placeholder.com/200' },
   
  ];

  const womenProducts = [{
    id: 1,
    name: 'Women Tree Runner Go',
    color: 'Thunder Red',
    price: '$120',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/25kaBcqrF20cfR3D2EVJh7/2a70011de8a9b7a09a9ca4db30061962/A10967_24Q2_Tree_Runner_Go_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png',
  },
  {
    id: 2,
    name: ' women Tree Dasher Relay',
    color: 'Blizzard/Thunder Red',
    price: '$135',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/1KP80D2rQtCP8vovpLHHeW/ea5ad914685cf5a7abfb1acca98de4ad/A11061_24Q3_Tree_Dasher_Relay_Blizzard_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png',
  },
  {
    id: 3,
    name: 'women Tree Dasher 2',
    color: 'Blizzard/Thunder Red',
    price: '$135',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/3tr7lkOFbPGPXNbtxI0VAY/1a81fb077731f385f7db585ffd1911c9/A11039_24Q3_Tree_Dasher_2_Blizzard_Thunder_Red_Natural_White_PDP_LEFT-2000x2000.png',
  },
  {
    id: 4,
    name: 'Women Tree Dasher Relay',
    color: 'Rugged Beige',
    price: '$135',
    img: 'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600/cms/5orWCriOBkoyZRcM5jvWJh/b4df41cbff0dce2bb1f4a9abc87990f1/A11065_24Q3_Tree_Dasher_Relay_Rugged_Beige_Rugged_Beige_PDP_LEFT-2000x2000.png',
  },
    { id: 1, name: "Women's Tree Dasher Relay", color: 'Blizzard/Thunder Red', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 2, name: "Women's Tree Gliders", color: 'Natural White/Beige', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 3, name: "Women's Wool Runner Go", color: 'Medium Grey', price: '$110', img: 'https://via.placeholder.com/200' },
    { id: 4, name: "Women's Tree Runner Go", color: 'Thunder Red', price: '$120', img: 'https://via.placeholder.com/200' },
    { id: 5, name: "Men's Wool Runner Go", color: 'Medium Grey', price: '$110', img: 'https://via.placeholder.com/200' },
    { id: 6, name: "Men's Tree Runner Go", color: 'Thunder Red', price: '$120', img: 'https://via.placeholder.com/200' },
    { id: 7, name: "Men's Tree Dasher Relay", color: 'Blizzard/Thunder Red', price: '$135', img: 'https://via.placeholder.com/200' },
    { id: 8, name: "Men's Tree Gliders", color: 'Natural White/Beige', price: '$135', img: 'https://via.placeholder.com/200' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Shows 4 items by default
    slidesToScroll: 2,
    nextArrow: <ChevronRight color="black" absoluteStrokeWidth />,
    prevArrow: <ChevronLeft color="black"/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Shows 3 items on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Shows 2 items on small screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Shows 1 item on very small screens
        },
      },
    ],
  };

  const activeProducts = activeTab === 'men' ? menProducts : womenProducts;

  return (
    <div className="product-slider-container w-full max-w-[1124px] mx-auto px-4 my-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">More to Shop</h2>
        <div className="flex space-x-6">
          <button
            className={`font-semibold ${activeTab === 'women' ? 'underline text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveTab('women')}
          >
            WOMEN
          </button>
          <button
            className={`font-semibold ${activeTab === 'men' ? 'underline text-gray-900' : 'text-gray-600'}`}
            onClick={() => setActiveTab('men')}
          >
            MEN
          </button>
        </div>
      </div>

      <Slider {...settings}>
        {activeProducts.map((product) => (
          <div key={product.id} className="p-4 m-2 border">
            <div className="product-card group">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="mt-2">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.color}</p>
                <p className="text-black font-bold">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Arrow Components
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  bg-gray-800 hover:bg-gray-600  custom-arrow next-arrow rounded-full`}
      style={{
        ...style,
        
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-400 hover:bg-gray-600 custom-arrow prev-arrow`}
      style={{
        ...style,
        borderRadius: '50%',
       
      }}
      onClick={onClick}
    />
  );
};

export default ProductSlider;