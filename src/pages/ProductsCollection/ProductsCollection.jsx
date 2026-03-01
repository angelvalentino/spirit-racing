import '../../styles/productsCollection.css';
import { useState, useMemo } from "react";
import SortBy from './componenets/SortBy';
import Products from '../../components/Products';
import useFetch from '../../hooks/useFetch';

const ProductsCollection = () => {
  const { data: products, loading, error } = useFetch('/data/products.json');
  const [sortOption, setSortOption] = useState('featured');

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    const sorted = [...products];

    switch (sortOption) {
      case 'price-descending':
        return sorted.sort((a, b) => b.price - a.price);
      case 'price-ascending':
        return sorted.sort((a, b) => a.price - b.price);
      default:
        return sorted;
    }
  }, [products, sortOption]);

  return ( 
    <main>
      <header>
        <h1 className="page-title products-collection-title">Jackets</h1> 
      </header>
      <div className="products-collection-filters">
        <SortBy setSortOption={setSortOption} />     
      </div>
      <Products 
        products={sortedProducts} 
        loading={loading}
        error={error}
        addClass="products-list-grid" 
      />
    </main>
  );
}
 
export default ProductsCollection;