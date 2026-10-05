import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const slides = [
    {
      id: 1,
      title: 'تخفیف ویژه تابستان',
      subtitle: 'خرید هوشمندانه با بهترین قیمت‌ها',
      description: 'از ۵۰٪ تخفیف روی محصولات انتخاب شده بهره‌مند شوید',
      image: 'https://placehold.co/1200x400/2563eb/ffffff?text=Summer+Sale',
      cta: 'مشاهده پیشنهادها',
      bgClass: 'bg-gradient-to-br from-primary to-primary-dark',
    },
    {
      id: 2,
      title: 'لپ‌تاپ‌های بازی',
      subtitle: 'قدرت فوق‌العاده برای بازی‌های حرفه‌ای',
      description: 'لپ‌تاپ‌های Gaming با آخرین فناوری NVIDIA RTX',
      image: 'https://placehold.co/1200x400/64748b/ffffff?text=Gaming+Laptops',
      cta: 'مشاهده لپ‌تاپ‌ها',
      bgClass: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
      id: 3,
      title: 'گوشی‌های هوشمند جدید',
      subtitle: 'طراحی بی‌نظیر و عملکرد فوق‌العاده',
      description: 'جديد‌ترین مدل‌های سامسونگ و اپل در اینجا',
      image: 'https://placehold.co/1200x400/f59e0b/ffffff?text=Smartphones',
      cta: 'مشاهده گوشی‌ها',
      bgClass: 'bg-gradient-to-br from-accent to-orange-600',
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`${slide.bgClass} h-full w-full flex items-center`}>
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 text-center md:text-right text-white space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl opacity-90">{slide.subtitle}</p>
                <p className="text-base md:text-lg opacity-80 max-w-lg mx-auto md:mx-0">
                  {slide.description}
                </p>
                <Link
                  to="/products"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  {slide.cta}
                </Link>
              </div>
              <div className="flex-1 hidden md:block">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </section>
  );
};