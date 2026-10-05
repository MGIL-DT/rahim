import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = React.useState(1);
  const [activeImage, setActiveImage] = React.useState(0);
  const [relatedProducts] = React.useState(products.slice(0, 4));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">محصول یافت نشد</h2>
          <Link to="/products" className="text-primary hover:underline">
            بازگشت به صفحه محصولات
          </Link>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    console.log('Adding to cart:', product.id, 'Quantity:', quantity);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary">خانه</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">محصولات</Link>
          <span>/</span>
          <span className="text-gray-800">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    activeImage === i ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={product.image}
                    alt={`Image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Product Header */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
              {product.isNew && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  جدید
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-relaxed">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="text-gray-600">
                {product.rating} از 5 ({product.reviewCount.toLocaleString()} نقد)
              </span>
              <a href="#reviews" className="text-primary hover:underline">
                نظرات مشتریان
              </a>
            </div>

            {/* Price */}
            <div className="flex items-end space-x-3 rtl:space-x-reverse mb-6">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-gray-800">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.discount && product.discount > 0 && (
                <span className="bg-danger text-white px-3 py-1 rounded-lg font-bold">
                  {product.discount}% تخفیف
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{product.stock} محصول در انبار موجود است</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-danger">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>محصول ناموجود است</span>
                </div>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
              <div className="flex items-center space-x-3 rtl:space-x-reverse bg-gray-100 rounded-lg p-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  disabled={product.stock === 0}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
                  disabled={product.stock === 0}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>

              <button
                onClick={addToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-primary text-white py-3 px-8 rounded-lg font-bold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>افزودن به سبد</span>
              </button>

              <button className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-danger hover:border-danger transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">توضیحات محصول</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>

              <h3 className="text-lg font-bold text-gray-800 mb-4">مشخصات فنی</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium text-gray-800 text-left">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">محصولات مرتبط</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};