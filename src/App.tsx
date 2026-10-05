import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { Home } from './pages/Home';
import { ProductListing } from './pages/ProductListing';
import { ProductDetail } from './pages/ProductDetail';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductListing />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="categories/:slug" element={<ProductListing />} />
        </Route>
      </Routes>
    </Router>
  );
};