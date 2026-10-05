import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showCategory = false,
  className = '',
}) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleAddToCart = () => {
    console.log('Added to cart:', product.id);
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden group ${className}`}
    >
      {/* Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            جدید
          </span>
        )}
        {product.discount && product.discount > 0 && (
          <span className="bg-danger text-white text-xs px-2 py-1 rounded-full">
            {product.discount}٪ تخفیف
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 left-3 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
      >
        <svg
          className={`w-5 h-5 ${isLiked ? 'text-danger fill-current' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-bold bg-danger/80 px-4 py-2 rounded-lg">
              ناموجود
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Category */}
        {showCategory && (
          <Link
            to={`/categories/${product.categorySlug}`}
            className="inline-block text-xs text-gray-500 hover:text-primary"
          >
            {product.category}
          </Link>
        )}

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
          <Link
            to={`/products/${product.id}`}
            className="hover:text-primary transition-colors"
          >
            {product.name}
          </Link>
        </h3>

        {/* Brand */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{product.brand}</span>
          {/* Stock Status */}
          {product.stock > 0 ? (
            <span className="text-xs text-green-600">
              {product.stock} عدد در انبار
            </span>
          ) : (
            <span className="text-xs text-danger">ناموجود</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-gray-800">
              {product.price.toLocaleString()} تومان
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString()} تومان
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              product.stock === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-dark'
            }`}
          >
            {product.stock === 0 ? 'ناموجود' : 'افزودن به سبد'}
          </button>
        </div>
      </div>
    </div>
  );
};