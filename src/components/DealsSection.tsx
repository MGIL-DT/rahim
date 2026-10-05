import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

interface DealsSectionProps {
  title?: string;
  subtitle?: string;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  title = 'پیشنهادهای شگفت‌انگیز',
  subtitle = 'تخفیف‌های محدود برای مدت محدود',
}) => {
  const deals = products.filter(p => p.discount && p.discount > 0);

  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <span className="ml-2 rtl:ml-0 rtl:mr-2">🔥</span>
              {title}
            </h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          <Link
            to="/deals"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            <span>مشاهده همه پیشنهادها</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Countdown Banner */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-danger/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-800">فرصت محدود</div>
                <div className="text-sm text-gray-500">پیشنهاد تا پایان روز</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">02</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">ساعت</div>
              </div>
              <div className="text-2xl text-gray-300">:</div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">45</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">دقیقه</div>
              </div>
              <div className="text-2xl text-gray-300">:</div>
              <div className="text-center">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">30</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">ثانیه</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};