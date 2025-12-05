import CurrencyInfoBox from "./CurrencyInfoBox"
import CurrencyList from "./CurrencyList"

const CurrencySection = () => {
  return (
    <section className="flex justify-center gap-6 " >
      <CurrencyInfoBox />
      <CurrencyList />
    </section> 
  );
}

export default CurrencySection;