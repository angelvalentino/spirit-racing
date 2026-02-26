import '../../styles/productDetails.css'
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ErrorMessage from '../../components/ErrorMessage';
import ProductInfo from './components/ProductInfo';
import Products from '../../components/Products';
import ProductCarousel from '../../components/ProductCarousel';
import BouncingBallsLoader from '../../loaders/BouncingBallsLoader';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, loading, error } = useFetch('/data/products.json');

  const product = products?.find(product => product.id === id);

  return ( 
    <main>
      <section className="product-details-wrapper">
        { loading && <div className="product-details__loader-container"><BouncingBallsLoader /></div> }
        { error && <ErrorMessage error={error} /> }
        {/* Adding a key forces the component re-render on route change */}
        { (!loading && !error) && <ProductInfo key={id} product={product} /> } 
      </section>
      <section className="product-details-recommended">
        <h2 className="product-details-recommended__title">You may also like</h2>
        {/* Adding a key forces the component re-render on route change */}
        <Products 
          key={id + 1} 
          addClass="recommended-products-list-grid" 
          products={products}
          loading={loading}
          error={error}
          limit={true}
        />
        <ProductCarousel 
          key={id} 
          hidden={true} 
          products={products}
          loading={loading}
          error={error}
        />
      </section>
    </main>
  );
}
 
export default ProductDetails;