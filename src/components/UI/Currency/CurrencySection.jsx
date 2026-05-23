import CurrencyInfoBox from "./CurrencyInfoBox";
import CurrencyList from "./CurrencyList";

const CurrencySection = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col md:flex-row justify-evenly gap-10 mb-10 sm:mb-15 ">
        <CurrencyInfoBox />
        <CurrencyList />
      </section>
    </div>
  );
};

export default CurrencySection;
