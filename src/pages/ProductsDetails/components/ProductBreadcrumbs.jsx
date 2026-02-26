import { Link } from "react-router-dom";

const ProductBreadcrumbs = ({ product }) => {
  return (  
    <nav aria-label="Breadcrumbs">
      <ul className="product-breadcrumbs">
        <li>
          <Link className="slide-bg-from-bottom fixed-height sienna-brown" to="/">Home</Link>
        </li>
        <li>
          <Link className="slide-bg-from-bottom fixed-height sienna-brown" to="/jackets">Jackets</Link>
        </li>
        <li aria-current="page">
          <p className="product-breadcrumbs__current-page-product">{product.title}</p>
        </li>
      </ul>
    </nav>
  );
}
 
export default ProductBreadcrumbs;