const CurrencyInfoBox = () => {
  return (
    <div className="bg-accent-900 text-white p-6 rounded-xl w-2xl h-77 flex flex-col justify-between mb-15 hover:scale-103 transition ">
      {/* متن بالا */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">در اینجا شما میتوانید</h2>
        <p>قیمت انواع ارز را مشاهده کنید و نسبت به خرید آن اقدام کنید</p>
      </div>

      {/* دکمه‌ها */}
      <div className="flex gap-10  mt-6">
        {/* دکمه خرید */}
        <button
          type="button"
          className="flex flex-row items-center justify-around p-2 bg-white text-accent-900 rounded-md w-66 h-12 shadow font-bold  hover:bg-green-900 hover:text-white transition-colors duration-200 cursor-pointer "
        >
          <span className="text-xl">خرید</span>
          <span className="text-xs">انواع ارز در گالری آیدا</span>
        </button>

        {/* دکمه فروش */}
        <button
          type="button"
          className="flex flex-row items-center justify-around p-2 bg-white text-accent-900 rounded-md w-66 h-12 shadow font-bold  hover:bg-red-800 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <span className="text-xl">فروش</span>
          <span className="text-xs">در سریع‌ترین زمان ممکن</span>
        </button>
      </div>
    </div>
  );
};

export default CurrencyInfoBox;
