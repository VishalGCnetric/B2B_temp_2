const borderColor = "border-b pb-4 mb-4";
const textStyles = "text-zinc-500 py-2 dark:text-zinc-400";

const ProductItem = () => {
    return (
      <div className="flex justify-between items-center mb-4 bg-zinc-200 border-b-2 py-2">
      {/* Product Image */}
      <img
        src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_147,f_auto,q_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/A11038_24Q3_Tree_Dasher_2_Blizzard_Multi_Blizzard_PDP_SINGLE_3Q_9bc96cbc-ea25-4fee-9150-56a2d74276b8.png?v=1720477550"
        alt="Product"
        className="w-20 h-20 object-cover rounded transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Product Details */}
      <div className="flex-1 px-4">
        <h4 className="text-sm font-medium">Men's Tree Dasher 2</h4>
        <p className="text-xs text-gray-500">Blizzard/Bloom Coral (Blizzard Sole)</p>
        <p className="text-xs text-gray-500">Size: 9.5</p>
        <p className="text-sm font-bold text-red-600">Price : $101 <span className="line-through text-gray-400">$135</span></p>
        <p>quantity : 1</p>
      </div>

    
   
    </div>
    );
  };

  export default ProductItem;