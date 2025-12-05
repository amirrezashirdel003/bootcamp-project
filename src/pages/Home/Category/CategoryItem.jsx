const CategoryItem = ({ icon: Icon, title, active }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-5 cursor-pointer
        box-border size-34 px-2 py-2 rounded-3xl transition-colors duration-200
        ${active ? "bg-primary-800 text-white" : "text-gray-700 hover:bg-orange-50"}
      `}
      aria-pressed={active}
      role="button"
      title={title}
    >
      <div
        className={`flex items-center justify-center size-15 rounded-full 
          ${active ? "bg-white text-primary-800" : "bg-transparent text-gray-700"}
        `}
        aria-hidden="true"
      >
        <Icon className={`size-10`}  />
      </div>

      <span className="text-sm leading-tight w-full text-center">{title}</span>
    </div>
  );
};

export default CategoryItem;
