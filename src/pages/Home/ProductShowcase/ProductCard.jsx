const ProductCard = ({ item }) => {
  return (
    <div className=" min-w-45 gap-3 bg-white rounded-xl inline-flex flex-col px-3 py-5 justify-between shadow-2xl hover:scale-105 transition">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-3" />
      <div className="gap-3 flex flex-col" >
        <p className="font-bold text-sm mb-1">{item.name}</p>
        <span className="text-gray-600 text-sm">{item.price.toLocaleString()} تومان</span>
      </div>
    </div>
  );
};

export default ProductCard;
