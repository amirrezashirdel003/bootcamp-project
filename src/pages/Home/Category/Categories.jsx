import { Coins, Combine, Gem, HandCoins, Mars, Venus } from "lucide-react";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Categories = ({ active, setActive }) => {
  const data = [
    { title: "زنانه", Icon: Venus, key: "female" },
    { title: "مردانه", Icon: Mars, key: "male" },
    { title: "جواهر", Icon: Gem, key: "jewelry" },
    { title: "سکه", Icon: Coins, key: "coin" },
    { title: "سرمایه گذاری", Icon: HandCoins, key: "investment" },
    { title: "همه دسته بندی", Icon: Combine, key: "all" },
  ];

  // return (
  //   <div className="flex gap-3 justify-center items-center w-full mb-10 sm:mb-15 ">
  //     {data.map((item , index) => (
  // <div key={item.key} onClick={() => setActive(item.key)}>
  //   <CategoryItem title={item.title} icon={item.Icon} active={active === item.key} />
  // </div>
  //     ))}
  //   </div>
  // );

  return (
    <>
      <div className="container flex mx-auto mb-10 sm:mb-16">
        <div className="w-auto max-w-full mx-auto px-3">
          <Swiper
            spaceBetween={35}
            breakpoints={{
              0: {
                slidesPerView: 2.8,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={item.key}
                // key={`category-${item.key}-${index}`}
                className="!w-[140px] max-sm:!w-[110px]"
              >
                <CategoryItem
                  title={item.title}
                  icon={item.Icon}
                  active={active === item.key}
                  onClick={() => setActive(item.key)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Categories;
