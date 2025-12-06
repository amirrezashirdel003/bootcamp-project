import Carousel from "../../../components/UI/carousel/carousel";

const HeroSection = () => {
  return (
    <section className="flex items-center gap-10 w-8/12 mx-auto my-20 mb-15 ">
      <div className="w-1/2 flex flex-col justify-center  gap-15 text-justify ">
        <h2 className="font-bold text-2xl [text-shadow:10px_10px_5px_rgba(0,0,0,0.3)] text-shadow-lg  ">
          در گالری آیدا ، جایی که فقط کافیه خیال کنی طرح رویایی خودتو تا ما توی یک چشم بهم زدن
          آرزوهات رو تبدیل به واقعیت کنیم
        </h2>
        <h5>
          ما در گالری آیدا مفتخریم اعلام کنیم روزانه بالای 50 نوع مختلف طلا تولید میکنیم این یعنی هر
          روز یه مدل جدید برای انتخاب داری حواست باشه اینجا تنها گالری در ایرانه که طلاهای سفارشی هم
          تولید میکنه
        </h5>
      </div>
      <div className="w-1/2 ">
        <Carousel />
      </div>
    </section>
  );
};

export default HeroSection;
