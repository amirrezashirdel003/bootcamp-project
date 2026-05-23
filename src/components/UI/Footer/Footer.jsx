const Footer = () => {
  return (
    <div className="container mx-auto p-4 sm:p-0">
      <footer className=" bg-accent-900 w-full text-white rounded-4xl p-5 ">
        <div className=" flex flex-col sm:flex-row  justify-between items-start gap-10 px-5  ">
          {/* ستون اول */}
          <div className="flex flex-col gap-3">
            <h3 className=" text-sm sm:text-lg font-bold  ">گالری طلا و جواهر آیدا</h3>
            <p className=" text-xs sm:text-sm opacity-80 leading-6 w-64 ">
              بهترین قیمت طلا، ارز و محصولات لوکس همراه با ضمانت اصالت.
            </p>
          </div>

          {/* ستون دوم */}
          <div className="flex flex-col gap-3">
            <h3 className=" text-sm sm:text-md font-bold">دسترسی سریع</h3>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm opacity-90  ">
              <li className="hover:text-primary-300 cursor-pointer  hover:text-primary-800">
                خانه
              </li>
              <li className="hover:text-primary-300 cursor-pointer hover:text-primary-800">
                فروشگاه
              </li>
              <li className="hover:text-primary-300 cursor-pointer hover:text-primary-800">بلاگ</li>
              <li className="hover:text-primary-300 cursor-pointer hover:text-primary-800">
                درباره ما
              </li>
            </ul>
          </div>

          {/* ستون سوم */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm sm:text-md font-bold  ">ارتباط با ما</h3>
            <ul className="flex flex-col gap-2 text-sm sm:text-base font-light opacity-90">
              <li className="cursor-pointer hover:text-primary-800 ">
                {" "}
                شماره تماس : 00 00 000 0912{" "}
              </li>
              <li className="cursor-pointer hover hover:text-primary-800 ">
                {" "}
                اینستاگرام : ayda_gallery{" "}
              </li>
              <li className="cursor-pointer hover hover:text-primary-800 ">
                {" "}
                آدرس : تهران - تهران{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* خط جدا کننده */}
        <div className="w-full h-px bg-white/20 my-8"></div>

        {/* کپی‌رایت */}
        <div className="text-center text-xs opacity-70">
          © تمامی حقوق برای گالری آیدا محفوظ است.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
