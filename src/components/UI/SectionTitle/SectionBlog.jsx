const SectionBlog = ({ title , id }) => {
  return (
    <div id={id} className="flex w-3/4 gap-5 mr-53 items-center mb-15">
      <div className="bg-primary-800 px-3 py-1 rounded-bl-full rounded-tr-full flex items-center justify-center">
        <h2 className="text-white font-light text-xs">{title}</h2>
      </div>

      <div className="flex items-center justify-center w-5/6 h-0.5 mt-3 bg-gray-600 rounded-full"></div>
    </div>
  );
};

export default SectionBlog;
