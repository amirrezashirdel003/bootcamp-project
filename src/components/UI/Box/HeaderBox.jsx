const HeaderBox = ({ children, isRight, className }) => {
  return (
    <div
      className={`bg-accent-900 py-2 px-4 items-center justify-center sm:px-4 text-white w-24 sm:w-26 ${
        isRight ? "rounded-r-2xl rounded-lg" : "rounded-l-2xl rounded-lg"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default HeaderBox;
