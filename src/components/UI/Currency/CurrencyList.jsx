import CurrencyItem from "./CurrencyItem";

const CurrencyList = () => {
  const data = [
    { title: "دلار آمریکا", price: "۲۵,۰۰۰", unit: "USD" },
    { title: "یورو", price: "۳۰,۰۰۰", unit: "EUR" },
    { title: "پوند بریتانیا", price: "۳۵,۰۰۰", unit: "GBP" },
    { title: "ین ژاپن", price: "۲۰۰", unit: "JPY" },
    { title: "دلار کانادا", price: "۲۰,۰۰۰", unit: "CAD" },
    { title: "دلار استرالیا", price: "۱۸,۰۰۰", unit: "AUD" },
  ];
  return (
    <div className="flex flex-col gap-1">
      {data.map((item, index) => (
        <CurrencyItem key={index} title={item.title} price={item.price} unit={item.unit} />
      ))}
    </div>
  );
};
export default CurrencyList;
