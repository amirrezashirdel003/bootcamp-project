const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center  gap-5 items-center mb-15 ">
      {/* کپسول نارنجی */}
      <div className="bg-primary-800 px-3 py-1 rounded-bl-full rounded-tr-full flex items-center justify-center">
        <h2 className="text-white font-light text-xs">{title}</h2>
      </div>
      {/* خط زیر کپسول */}
      <div className=" flex-[0.64] items-center justify-center  h-0.5 mt-3 bg-gray-600 rounded-full"></div>
    </div>
    
  );
};
export default SectionTitle;
