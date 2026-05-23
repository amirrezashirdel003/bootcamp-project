import CurrencyItem from "./CurrencyItem";

const CurrencyList = () => {
  const data = [
    { title: "دلار آمریکا", price: "120,780", unit: "USD" },
    { title: "یورو", price: "140,670", unit: "EUR" },
    { title: "پوند بریتانیا", price: "161,150", unit: "GBP" },
    { title: "درهم", price: "33,000", unit: "AED" },
    { title: "دلار کانادا", price: "87,280", unit: "CAD" },
    { title: "دلار استرالیا", price: "80,185", unit: "AUD" },
  ];
  return (

    <div className="w-full space-y-1" >
      {data.map((item, index) => (
        <CurrencyItem key={index} title={item.title} price={item.price} unit={item.unit} />
      ))}
    </div>
  );
};
export default CurrencyList;
