const BlogCard = ({ title, description, buttonText }) => {
  return (
    <div className="bg-primary-800 text-white p-5 rounded-3xl w-64 sm:w-72 h-64 sm:h-72 flex flex-col justify-evenly  hover:scale-105 transition">
      <h2 className=" text-xs sm:text-lg font-bold mb-10">{title}</h2>
      <p className="text-[10px] sm:text-sm  leading-6 opacity-90 mb-6">{description}</p>
      <button className="font-bold text-xs text-end sm:text-md mt-10 cursor-pointer hover:text-accent-900 ">
        {buttonText}
      </button>
    </div>
  );
};

export default BlogCard;
