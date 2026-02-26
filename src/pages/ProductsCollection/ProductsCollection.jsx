import '../../styles/productsCollection.css';
import { useState, useEffect } from "react";
import SortBy from './componenets/SortBy';
import Products from '../../components/Products';
import useFetch from '../../hooks/useFetch';

const ProductsCollection = () => {
  const { data: products, loading, error } = useFetch('/data/products.json');
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    if (products) setDisplayedProducts(products);
  }, [products]);

  return ( 
    <main>
      <header>
        <h1 className="page-title products-collection-title">Jackets</h1> 
      </header>
      <div className="products-collection-filters">
        <SortBy setProducts={setDisplayedProducts} products={products} />     
      </div>
      <Products 
        products={displayedProducts} 
        loading={loading}
        error={error}
        addClass="products-list-grid" 
      />
    </main>
  );
}
 
export default ProductsCollection;