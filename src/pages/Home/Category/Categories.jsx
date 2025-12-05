import { Coins, Combine, Gem, HandCoins, Mars, Venus } from "lucide-react";
import CategoryItem from "./CategoryItem";

const Categories = ({ active, setActive }) => {
  const data = [
    { title: "زنانه", Icon: Venus, key: "female" },
    { title: "مردانه", Icon: Mars, key: "male" },
    { title: "جواهر", Icon: Gem, key: "jewelry" },
    { title: "سکه", Icon: Coins, key: "coin" },
    { title: "سرمایه گذاری", Icon: HandCoins, key: "investment" },
    { title: "همه دسته بندی", Icon: Combine, key: "all" },
  ];

  return (
    <div className="flex gap-10 justify-center items-center w-full mb-15 ">
      {data.map((item) => (
        <div key={item.key} onClick={() => setActive(item.key)}>
          <CategoryItem title={item.title} icon={item.Icon} active={active === item.key} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
