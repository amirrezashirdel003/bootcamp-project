import { Instagram, Phone } from "lucide-react";
import HeaderBox from "../UI/Box/HeaderBox";

import { Link } from "react-router";
import IconBox from "../UI/Box/IconBox";

const navItems = [
  { name: "خانه", path: "/." },
  { name: "محصولات", path: "#Products" },
  { name: "بلاگ آموزشی", path: "#BlogSection" },
  { name: "درباره ما", path: "/src/pages/About/AboutUs.jsx" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex items-center justify-center max-sm:items-stretch gap-2 w-full">
        <HeaderBox className={"text-center text-[9px]  sm:text-xs font-bold"} isRight>
          <div>گالری طلا و</div>
          <div>جواهــــــــــر آیدا</div>
        </HeaderBox>
        {/* navigation */}
        <nav className="bg-primary-800 py-3 text-white flex-1 rounded-lg  items-center justify-center  sm:text-base">
          <ul className=" items-center justify-center gap-10 hidden sm:flex ">
            {navItems.map((item) => {
              return (
                <li key={item.name} className="cursor-pointer">
                  {item.path.startsWith("#") ? (
                    <a href={item.path}>{item.name}</a>
                  ) : (
                    <Link to={item.path}>{item.name}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        {/* social media */}
        <HeaderBox>
          <div className="w-full flex items-center gap-1.5 justify-evenly">
            <IconBox path={"https://www.instagram.com/"}>
              <Instagram />
            </IconBox>
            <IconBox path={"tel:+989120000000"}>
              <Phone />
            </IconBox>
          </div>
        </HeaderBox>
      </header>
    </div>
  );
};

export default Header;
