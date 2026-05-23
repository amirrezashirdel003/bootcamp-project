const ProductCard = ({ item }) => {
  return (
    <div className=" w-28 sm:min-w-45  sm:gap-3 bg-white rounded-xl  flex-col px-3 py-3 sm:py-5 justify-between  shadow-2xl cursor-pointer hover:scale-105 transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-29 sm:h-48 object-cover rounded-md mb-2 sm:mb-3"
      />
      <div className="gap-3 flex flex-col">
        <p className="font-bold text-[9px] sm:text-sm ">{item.name}</p>
        <span className="text-gray-800 text-[8px] sm:text-sm">
          {item.price.toLocaleString()} تومان
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
