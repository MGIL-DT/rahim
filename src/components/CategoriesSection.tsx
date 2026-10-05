import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              دسته‌بندی‌های محبوب
            </h2>
            <p className="text-gray-600">
              محصولات مورد علاقه خود را در دسته‌بندی‌های متنوع پیدا کنید
            </p>
          </div>
          <Link
            to="/categories"
            className="text-primary hover:text-primary-dark font-medium flex items-center space-x-1 rtl:space-x-reverse"
          >
            <span>مشاهده همه</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className="group bg-white rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg hover:border-primary/20 border border-gray-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-3 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <div className="text-primary text-2xl">
                  {category.icon === 'smartphone' && '📱'}
                  {category.icon === 'laptop' && '💻'}
                  {category.icon === 'monitor' && '🖥️'}
                  {category.icon === 'cpu' && '⚙️'}
                  {category.icon === 'gamepad' && '🎮'}
                  {category.icon === 'display' && '📺'}
                  {category.icon === 'headphone' && '🎧'}
                  {category.icon === 'keyboard' && '⌨️'}
                  {category.icon === 'mouse' && '🖱️'}
                  {category.icon === 'bag' && '🎒'}
                  {category.icon === 'battery' && '🔋'}
                  {category.icon === 'bolt' && '⚡'}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-medium text-gray-800 mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>

              {/* Count */}
              <div className="text-sm text-gray-500">
                {category.productCount} محصول
              </div>
            </Link>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6">برند‌های معتبر</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gray-800 font-bold text-lg">Samsung</div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gray-800 font-bold text-lg">Apple</div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gray-800 font-bold text-lg">ASUS</div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gray-800 font-bold text-lg">Sony</div>
            </div>
            <div className="bg-white rounded-lg p-4 flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-gray-800 font-bold text-lg">Razer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};