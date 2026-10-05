import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export const ProductListing: React.FC = () => {
  const [sortBy, setSortBy] = React.useState('newest');
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 200000000]);

  const sortedProducts = React.useMemo(() => {
    let sorted = [...products];

    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return sorted.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );
  }, [sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-800 mb-4">فیلترها</h2>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">دسته‌بندی‌ها</h3>
                <div className="space-y-2">
                  {categories.slice(0, 6).map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-gray-600">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">محدوده قیمت</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200000000"
                    step="1000000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>۰</span>
                    <span>{priceRange[1].toLocaleString()} تومان</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-medium text-gray-700 mb-3">برند</h3>
                <div className="space-y-2">
                  {['Samsung', 'Apple', 'ASUS', 'Sony', 'Razer'].map((brand) => (
                    <label
                      key={brand}
                      className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">محصولات</h1>
                <p className="text-gray-500">{sortedProducts.length} محصول یافت شد</p>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <label className="text-gray-600">مرتب‌سازی:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:border-primary outline-none"
                >
                  <option value="newest">جدیدترین</option>
                  <option value="price-low">ارزان‌ترین</option>
                  <option value="price-high">گران‌ترین</option>
                  <option value="rating">محبوب‌ترین</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">محصولی یافت نشد</h3>
                <p className="text-gray-500">فیلترهای خود را تغییر دهید</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};