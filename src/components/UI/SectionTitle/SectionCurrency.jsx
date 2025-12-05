const SectionCurrency = ({ title }) => {
  return (
    <div className="flex items-center w-full justify-center gap-4 my-6 mb-15">
      {/* خط سمت چپ */}
      <div className="flex-[0.315] h-0.5 bg-gray-500"></div>

      {/* باکس عنوان */}
      <div className="bg-accent-900 px-10 py-1 rounded-md">
        <h2 className="text-white font-semibold text-sm">{title}</h2>
      </div>

      {/* خط سمت راست */}
      <div className="flex-[0.315] h-0.5 bg-gray-500"></div>
    </div>
  );
};

export default SectionCurrency;
