import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Categories from "./Category/Categories";
import ProductShowcase from "./ProductShowcase/ProductShowcase";
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import CurrencySection from "../../components/UI/Currency/CurrencySection";
import SectionCurrency from "../../components/UI/SectionTitle/SectionCurrency";
import SectionBlog from "../../components/UI/SectionTitle/SectionBlog";
import BlogSection from "../../components/UI/BlogCard/BlogSection";
import Footer from "../../components/UI/Footer/Footer";


const Home = () => {
  const [activeCategory, setActiveCategory] = useState("female");

  return (
    <main>
      <HeroSection />
      <SectionTitle title="دسته بندی‌ها" />
      <Categories active={activeCategory} setActive={setActiveCategory} />

      <ProductShowcase category={activeCategory} />
      <SectionCurrency title="قیمت ارز" />
      <CurrencySection />
      <SectionBlog title=" بلاگ آموزشی" id="BlogSection" />
      <BlogSection />
      <Footer/>
    </main>
  );
};

export default Home;
