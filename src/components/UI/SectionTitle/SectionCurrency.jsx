const SectionCurrency = ({ title }) => {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center w-full justify-center gap-4 my-6 mb-10 sm:mb-15">
        {/* خط سمت چپ */}
        <div className="flex-1 h-0.5 bg-gray-500"></div>

        {/* باکس عنوان */}
        <div className="bg-accent-900 px-10 py-1 rounded-md">
          <h2 className="text-white font-semibold text-[10px] sm:text-sm ">{title}</h2>
        </div>

        {/* خط سمت راست */}
        <div className="flex-1 h-0.5 bg-gray-500"></div>
      </div>
    </div>
  );
};

export default SectionCurrency;
