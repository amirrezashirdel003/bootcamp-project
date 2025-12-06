import { Instagram, Phone } from "lucide-react";
import HeaderBox from "../UI/Box/HeaderBox";
import IconBox from "../UI/Box/iconBox";
import { Link } from "react-router";

const navItems = [
  { name: "خانه", path: "/" },
  { name: "فروشگاه", path: "/market" },
  { name: "بلاگ آموزشی", path: "#BlogSection" },
  { name: "درباره ما", path: "/about-us" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-2 mx-auto w-full">
      <HeaderBox className={"text-center text-xs font-bold"} isRight>
        <div>گالری طلا و</div>
        <div>جواهــــــــــر آیدا</div>
      </HeaderBox>
      {/* navigation */}
      <nav className="bg-primary-800 py-3 text-white w-1/2 rounded-lg flex items-center justify-center">
        <ul className="flex items-center gap-10">
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
      <HeaderBox className={"text-center text-xs"}>
        <div className="flex items-center gap-2">
          <IconBox path={"https://www.instagram.com/"}>
            <Instagram size={20} />
          </IconBox>
          <IconBox path={"tel:+989120000000"}>
            <Phone size={20} />
          </IconBox>
        </div>
      </HeaderBox>
    </header>
  );
};

export default Header;
