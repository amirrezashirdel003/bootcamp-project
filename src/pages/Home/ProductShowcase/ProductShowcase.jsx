import productsData from "./ProductsData";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useAutoHorizontalScroll } from "../../../Hooks/AutoScroll";

const ProductShowcase = ({ category = "all" }) => {
  const items =
    category === "all" ? Object.values(productsData).flat() : productsData[category] || [];
  // const containerRef = useAutoHorizontalScroll({
  //   speed: 1,
  // });

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full flex gap-5 mb-10 sm:mb-15 ">
          {/* --- باکس سبز (سمت راست) --- */}
          <div className="bg-green-950 text-white rounded-xl w-42 sm:w-60 pt-4 flex flex-col justify-between text-center sm:gap-8  hover:scale-101 transition ">
            <div className=" gap-5 sm:gap-9 flex flex-col px-3 pt-1">
              <h2 className=" text-sm sm:text-xl  font-bold  ">شگفت گالری</h2>
              <p className="text-[10px] opacity-80 leading-6">
                تنها فرصت همین امروزه! عجله کن تا از بقیه جا نمونی✨
              </p>
            </div>
            <button
              type="button"
              className=" hover:bg-accent-900 hover:text-white bg-white text-green-900 px-1 m-2 sm:px-4 py-3 sm:py-5 rounded-lg shadow text-xs sm:text-sm cursor-pointer font-bold transition-colors duration-200"
            >
              مشاهده همه محصولات
            </button>
          </div>

          {/* --- اسلایدر محصولات (سمت چپ) --- */}
          <div
            // ref={containerRef}
            className="bg-primary-800 flex gap-6 rounded-xl p-3 sm:p-5 shadow flex-1 min-w-0"
          >
            {items?.length > 0 ? (
              <div className="w-full min-w-0">
                <Swiper
                  spaceBetween={55}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.5,
                    },
                    768: {
                      slidesPerView: 4.5,
                    },
                  }}
                >
                {items.map((item) => (
                  <SwiperSlide
                  key={item.id}
                  >
                    <ProductCard item={item} />
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
            ) : (
              <div className="text-gray-200 p-4">محصولی برای نمایش وجود ندارد.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductShowcase;
