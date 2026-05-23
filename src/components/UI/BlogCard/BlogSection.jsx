import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const data = [
    {
      title: "ارز چیست",
      description: "ارز واحد پول کشورهای دیگر است و برای مبادلات بین‌المللی استفاده می‌شود.",
    },
    {
      title: "دلار چیست",
      description:
        "دلار واحد پول ایالات متحده است و مهم‌ترین ارز دنیا در اقتصاد جهانی محسوب می‌شود.",
    },
    {
      title: "یورو چیست",
      description:
        "یورو واحد پولی اتحادیه اروپا است و یکی از باارزش‌ترین ارزهای جهان به شمار می‌رود.",
    },
  ];
  return (
    <div className="container mx-auto">
      <div id="BlogSection" className="mb-10 sm:mb-15 ">

        <Swiper
          className="py-5!"
          spaceBetween={65}
          centerInsufficientSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          >
          {data.map((item, inx) => (
            <SwiperSlide key={inx}>
              <BlogCard
                title={item?.title}
                description={item?.description}
                buttonText={"مشاهده کامل"}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;

{/* <Swiper
  spaceBetween={5}
  breakpoints={{
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
  }}
>
  {Data.map((index) => (
    <SwiperSlide key={index}>
      <BlogCard title={} description={description} buttonText={buttonText} />
    </SwiperSlide>
  ))}
</Swiper> */}