import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  filter?: 'featured' | 'bestseller' | 'new';
  limit?: number;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title = 'محصولات ویژه',
  subtitle = 'پیشنهادهای منتخب امروز',
  filter = 'featured',
  limit = 6,
}) => {
  const filteredProducts = React.useMemo(() => {
    let filtered = [...products];

    switch (filter) {
      case 'featured':
        filtered = filtered.filter(p => p.isFeatured);
        break;
      case 'bestseller':
        filtered = filtered.filter(p => p.isBestSeller);
        break;
      case 'new':
        filtered = filtered.filter(p => p.isNew);
        break;
    }

    return filtered.slice(0, limit);
  }, [filter, limit]);

  if (filteredProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showCategory={true}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">محصولی یافت نشد</h3>
            <p className="text-gray-500">در حال حاضر محصولی در این بخش موجود نیست</p>
          </div>
        )}
      </div>
    </section>
  );
};