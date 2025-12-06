import productsData from "./ProductsData";
import ProductCard from "./ProductCard";
// import { useAutoHorizontalScroll } from "../../../Hooks/AutoScroll";

const ProductShowcase = ({ category = "all" }) => {
  const items =
    category === "all" ? Object.values(productsData).flat() : productsData[category] || [];
  // const containerRef = useAutoHorizontalScroll({
  //   speed: 1,
  // });

  return (
    <div className="w-full flex justify-center gap-5 my-5 mb-15 ">
      {/* --- باکس سبز (سمت راست) --- */}
      <div className="bg-green-950 text-white rounded-xl px-3 pt-10 pb-3 w-60 flex flex-col justify-between text-center  gap-8  hover:scale-101 transition ">
        <div className=" gap-9 flex flex-col">
          <h2 className="text-xl font-bold  ">شگفت گالری</h2>
          <p className="text-sm opacity-80 leading-6">
            تنها فرصت همین امروزه! عجله کن تا از بقیه جا نمونی✨
          </p>
        </div>
        <button
          type="button"
          className=" hover:bg-accent-900 hover:text-white bg-white text-green-900 px-4 py-5 rounded-lg shadow text-sm cursor-pointer font-bold transition-colors duration-200"
        >
          مشاهده همه محصولات
        </button>
      </div>

      {/* --- اسلایدر محصولات (سمت چپ) --- */}
      <div
        // ref={containerRef}
        className="bg-primary-800 flex gap-6 rounded-xl p-5 w-2/4 overflow-x-auto whitespace-nowrap shadow"
      >
        {items.length ? (
          <div className="flex gap-6 w-max">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-gray-200 p-4">محصولی برای نمایش وجود ندارد.</div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
