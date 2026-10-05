import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { DealsSection } from '../components/DealsSection';

export const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Slider */}
      <HeroSection />

      {/* Categories */}
      <CategoriesSection />

      {/* Featured Products */}
      <FeaturedProducts
        title="محصولات ویژه"
        subtitle="برترین محصولات با کیفیت بالا و قیمت مناسب"
        filter="featured"
        limit={4}
      />

      {/* Deals Section */}
      <DealsSection />

      {/* Best Sellers */}
      <FeaturedProducts
        title="پرفروش‌ترین‌ها"
        subtitle="محصولاتی که بیشترین فروش را داشته‌اند"
        filter="bestseller"
        limit={4}
      />

      {/* New Products */}
      <FeaturedProducts
        title="جدیدترین محصولات"
        subtitle="تازه‌ترین محصولات وارد شده به فروشگاه"
        filter="new"
        limit={4}
      />

      {/* Features Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">گارانتی اصالت</h3>
              <p className="text-sm text-gray-500">ضمانت اصل بودن تمام محصولات</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">ارسال سریع</h3>
              <p className="text-sm text-gray-500">ارسال به سراسر کشور</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">پرداخت امن</h3>
              <p className="text-sm text-gray-500">درگاه پرداخت معتبر</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">پشتیبانی ۲۴/۷</h3>
              <p className="text-sm text-gray-500">پاسخگویی در هر ساعت</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};