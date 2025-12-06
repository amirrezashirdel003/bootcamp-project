const BlogCard = ({ title, description, buttonText }) => {
  return (
    <div className="bg-primary-800 text-white p-6 rounded-3xl w-80 h-70 justify-between  hover:scale-105 transition">
      <h2 className="text-lg font-bold mb-10">{title}</h2>
      <p className="text-sm leading-6 opacity-90 mb-6">{description}</p>
      <button className="font-bold text-md mt-10 cursor-pointer hover:text-accent-900 ">
        {buttonText}
      </button>
    </div>
  );
};

export default BlogCard;
