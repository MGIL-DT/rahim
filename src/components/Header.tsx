import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  searchQuery?: string;
  onSearch?: (query: string) => void;
  cartItemCount?: number;
  wishlistCount?: number;
  user?: {
    name: string;
    email: string;
  };
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearch,
  cartItemCount = 0,
  wishlistCount = 0,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top Bar - Mobile Only */}
      <div className="lg:hidden bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-bold text-primary">فروشگاه فناوری</div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-600 hover:text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 hidden lg:block">
        <div className="flex items-center justify-between mb-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-800">فروشگاه فناوری</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در محصولات..."
                className="w-full py-3 px-4 pr-12 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                value={searchQuery || ''}
                onChange={(e) => onSearch?.(e.target.value)}
              />
              <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors relative group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute top-0 left-0 -mt-1 -ml-1 bg-danger text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors relative group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 left-0 -mt-1 -ml-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button className="p-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-1 rtl:space-x-reverse">
          <Link to="/" className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            خانه
          </Link>
          <Link to="/products" className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            محصولات
          </Link>
          <Link to="/categories" className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            دسته‌بندی‌ها
          </Link>
          <Link to="/deals" className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            پیشنهادها
          </Link>
          <Link to="/brands" className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
            برند‌ها
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl flex flex-col">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-800">منو</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
              >
                خانه
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
              >
                محصولات
              </Link>
              <Link
                to="/categories"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
              >
                دسته‌بندی‌ها
              </Link>
              <Link
                to="/deals"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
              >
                پیشنهادها
              </Link>
              <div className="border-t border-gray-100 mt-4 px-6 py-3">
                <div className="text-sm text-gray-500 mb-4">ورود به حساب کاربری</div>
                <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark">
                  ورود
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};