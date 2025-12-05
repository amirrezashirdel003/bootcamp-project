const CurrencyItem = ({ title, price, unit }) => {
  return (
    <div className="w-80 flex justify-between gap-5 bg-green-950 rounded-2xl p-3 hover:scale-105 transition ">
      <h3 className="text-white  ">{title}</h3>
      <div className=" flex text-neutral-300 ">
        <span className="">{unit}</span>
        <p className="">{price}</p>
      </div>
    </div>
  );
};
export default CurrencyItem;
