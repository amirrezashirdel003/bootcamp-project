import { useEffect, useState } from "react";

function Carousel() {
  const images = [
    { path: "/src/assets/picture/photo_1.jpg", alt: "Image 1" },
    { path: "/src/assets/picture/photo_2.jpg", alt: "Image 2" },
    { path: "/src/assets/picture/photo_3.jpg", alt: "Image 3" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[350px] h-[350px] mx-auto rounded-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.path}
          alt={img.alt}
          className={`
            absolute inset-0 w-full h-full object-cover object-center
            transition-all duration-1200 ease-in-out rounded-lg
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        />
      ))}

      {/* dots */}
      <div className="absolute -bottom-6 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`
              size-2 rounded-full transition-all
              ${i === index ? "bg-gray-800 scale-125" : "bg-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
