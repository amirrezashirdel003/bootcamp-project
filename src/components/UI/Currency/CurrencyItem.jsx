const CurrencyItem = ({ title, price, unit }) => {
  return (
    <div className="w-full flex justify-between bg-green-950 rounded-2xl p-5  hover:scale-105 transition ">
      <h3 className="text-white text-[10px] sm:text-base  ">{title}</h3>
      <div className=" flex text-neutral-300 ">
        <span className="text-[10px] sm:text-base">{unit}</span>
        <p className="text-[10px] sm:text-base ">{price}</p>
      </div>
    </div>
  );
};
export default CurrencyItem;
