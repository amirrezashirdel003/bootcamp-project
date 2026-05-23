import Carousel from "../../../components/UI/Carousel/Carousel";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-15  w-full mx-auto my-10 sm:my-20  ">
        <div className="w-1/2 flex flex-col space-y-5 p-5 sm:p-0 sm:gap-15 text-justify ">
          <h2 className="font-bold mt-6 sm:mt-0 text-[10px] [text-shadow:10px_10px_5px_rgba(0,0,0,0.3)] text-shadow-lg sm:text-base  ">
            در گالری آیدا ، جایی که فقط کافیه خیال کنی طرح رویایی خودتو تا ما توی یک چشم بهم زدن
            آرزوهات رو تبدیل به واقعیت کنیم
          </h2>
          <h6 className="text-[8px] sm:text-base">
            ما در گالری آیدا مفتخریم اعلام کنیم روزانه بالای 50 نوع مختلف طلا تولید میکنیم این یعنی
            هر روز یه مدل جدید برای انتخاب داری حواست باشه اینجا تنها گالری در ایران که طلاهای
            سفارشی هم تولید میکنه
          </h6>
        </div>
        <Carousel />
      </section>
    </div>
  );
};

export default HeroSection;
