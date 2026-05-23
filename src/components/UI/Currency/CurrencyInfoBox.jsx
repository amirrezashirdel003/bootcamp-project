const CurrencyInfoBox = () => {
  return (
    <div className="bg-accent-900 text-white p-6 rounded-xl w-full   flex flex-col justify-between hover:scale-103 transition ">
      {/* متن بالا */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xs sm:text-lg font-bold">در اینجا شما میتوانید</h2>
        <p className="text-[9px] sm:text-sm mb-10 ">قیمت انواع ارز را مشاهده کنید و نسبت به خرید آن اقدام کنید</p>
      </div>

      {/* دکمه‌ها */}
      <div className="flex w-full justify-around gap-5">
        {/* دکمه خرید */}
        <button
          type="button"
          className="flex flex-row items-center justify-evenly p-2 bg-white text-accent-900 rounded-md w-72 h-12 shadow font-bold  hover:bg-green-900 hover:text-white transition-colors duration-200 cursor-pointer "
        >
          <span className="text-sm sm:text-xl">خرید</span>
          <span className="text-[10px] sm:text-sm">انواع ارز در گالری آیدا</span>
        </button>

        {/* دکمه فروش */}
        <button
          type="button"
          className="flex flex-row items-center justify-evenly p-2 bg-white text-accent-900 rounded-md w-72 h-12 shadow font-bold  hover:bg-red-800 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <span className=" text-sm sm:text-xl">فروش</span>
          <span className=" text-[10px] sm:text-sm">در سریع‌ترین زمان ممکن</span>
        </button>
      </div>
    </div>
  );
};

export default CurrencyInfoBox;
