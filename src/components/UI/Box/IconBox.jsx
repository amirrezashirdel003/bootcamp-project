import { Link } from "react-router";

const IconBox = ({ children, path }) => {
  return (
    <Link to={path} target="_blank" className="flex bg-gray-600 size-8 items-center justify-center rounded-md p-1">
      {children}
    </Link>
  );
};

export default IconBox;
