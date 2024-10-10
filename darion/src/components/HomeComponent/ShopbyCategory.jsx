import React from 'react';

// Constants for recurring Tailwind CSS classes
const commonContainerClasses = "relative overflow-hidden rounded-lg shadow-lg bg-white border border-border";
const commonTextBackgroundClasses = "absolute top-2 left-2  ";
const commonImageClasses = "w-full object-cover";

const categories = [
  { name: "Furniture", imgSrc: "https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-12_540x.jpg?v=1721701186", imgHeight: "h-[480px]",rowSpan: "col-span-2" },
  { name: "Sofa", imgSrc: "https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-15_360x.jpg?v=1721701186", imgHeight: "h-full", rowSpan: "row-span-2" },
  // { name: "Sofa", imgSrc: "https://placehold.co/400x300", imgHeight: "h-48" },
  { name: "Decor", imgSrc: "https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-13_360x.jpg?v=1721701186", imgHeight: "h-[400px]" },
  { name: "Lamp", imgSrc: "https://wpbingo-darion.myshopify.com/cdn/shop/files/banner-14_360x.jpg?v=1721701186", imgHeight: "h-[400px]" },
];

const CategoryCard = ({ name, imgSrc, imgHeight, rowSpan }) => (
  <div className={`${commonContainerClasses} ${rowSpan || ""}`}>
    <img className={`${commonImageClasses} ${imgHeight}`} src={imgSrc} alt={name} />
    <div className={commonTextBackgroundClasses}>{name}</div>
  </div>
);

const ShopByCategory = () => {
  return (
    <div className="p-6 max-w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Shop By Category</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index} 
            name={category.name} 
            imgSrc={category.imgSrc} 
            imgHeight={category.imgHeight}
            rowSpan={category.rowSpan}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopByCategory;