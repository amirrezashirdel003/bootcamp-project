const SectionTitle = ({ title ,id }) => {
  return ( 
    <div id={id} className="container mx-auto max-w-[1000px]">
    <div className="flex gap-3 items-center mb-10 sm:mb-15 px-4 ">
      {/* کپسول نارنجی */}
      <div className="bg-primary-800 px-3 py-1 rounded-bl-full rounded-tr-full flex items-center justify-center">
        <h2 className="text-white font-light text-[9px] sm:text-xs ">{title}</h2>
      </div>
      {/* خط زیر کپسول */}
      <div className=" flex-1  h-px sm:h-0.5 bg-gray-600 rounded-full" />
    </div>

    </div>
  );
};
export default SectionTitle;
