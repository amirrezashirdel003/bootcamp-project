const CategoryItem = ({ currentData , icon: Icon, title, active, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-5 sm:gap-8 cursor-pointer
        box-border min-w-12  px-2 py-4 rounded-3xl transition-colors duration-200
        ${active ? "bg-primary-800 text-white" : "text-gray-700 hover:bg-orange-50"}
      `}
      aria-pressed={active}
      role="button"
      title={title}
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center size-10 sm:size-17 rounded-full 
          ${active ? "bg-white text-primary-800" : "bg-transparent text-gray-700"}
        `}
        aria-hidden="true"
      >
        <Icon className={" size-7 sm:size-10  max-sm:w-5 "} />
      </div>
      <span className="text-[10px] sm:text-sm leading-tight text-center">{title}</span>
    </div>
  );
};

export default CategoryItem;
