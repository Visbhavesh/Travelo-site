import React, { useEffect, useState } from 'react';
import { Navi } from './components/Navbar/Navi';
import { Footer } from './components/Footer/Footer';
import { ProductCard } from './components/ProductCard';

export const Product = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Navi />
      <div className="flex flex-wrap justify-center">
        {products.length > 0 &&
          products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <Footer />
    </div>
  );
};
