import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div id="BlogSection" className="flex justify-center gap-8 my-20">
      <BlogCard
        title="ارز چیست"
        description="ارز واحد پول کشورهای دیگر است و برای مبادلات بین‌المللی استفاده می‌شود."
        buttonText="مشاهده کامل"
      />

      <BlogCard
        title="دلار چیست"
        description="دلار واحد پول ایالات متحده است و مهم‌ترین ارز دنیا در اقتصاد جهانی محسوب می‌شود."
        buttonText="مشاهده کامل"
      />

      <BlogCard
        title="یورو چیست"
        description="یورو واحد پولی اتحادیه اروپا است و یکی از باارزش‌ترین ارزهای جهان به شمار می‌رود."
        buttonText="مشاهده کامل"
      />
    </div>
  );
};

export default BlogSection;
