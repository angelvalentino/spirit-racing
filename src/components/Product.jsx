import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

const Product = ({ product }) => {
  return ( 
    <li className="product-preview">
      <Link to={`/jackets/${product.id}`}> 
        <div className="product-preview__image-wrapper">
          <img className="product-preview__image" src={product.images[0].regular} alt={product.title} />
          <img aria-hidden="true" role="presentation" className="product-preview__image-secondary" src={product.images[1].regular} alt='' />
        </div>
        <h2 className="product-preview__title">{product.title}</h2>
        <h3 className="product-preview__price">{formatCurrency(product.price)}</h3>
      </Link>
    </li>
  );
}
 
export default Product;