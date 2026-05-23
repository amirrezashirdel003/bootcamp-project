import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Categories from "./Category/Categories";
import ProductShowcase from "./ProductShowcase/ProductShowcase";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import CurrencySection from "../../components/UI/Currency/CurrencySection";
import SectionCurrency from "../../components/UI/SectionTitle/SectionCurrency";
import BlogSection from "../../components/UI/BlogCard/BlogSection";

const Home = () => {

  const [activeCategory, setActiveCategory] = useState("female");

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SectionTitle title="دسته بندی‌ها" id="Products" />

      <Categories active={activeCategory} setActive={setActiveCategory} />

      <ProductShowcase category={activeCategory} />

      <SectionCurrency title="قیمت ارز" />

      <CurrencySection />

      <SectionTitle title=" بلاگ آموزشی" id="BlogSection" />

      <BlogSection />
      {/* <Footer /> */}
    </main>
    
  );
};

export default Home;
