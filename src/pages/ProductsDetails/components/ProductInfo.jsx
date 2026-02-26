import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils/formatCurrency";
import { productDetailsData } from "../../../data/productDetailsData";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import ProductPreviewSlider from "./ProductPreviewSlider";
import ProductSizeForm from "./ProductSizeForm";
import Accordion from "../../../components/Accordion";

const ProductInfo = ({ product }) => {
  return ( 
    <>
      <ProductBreadcrumbs product={product}/>
      <div className="product-details-container">
        <ProductPreviewSlider product={product}/>
        <section className="product-details-info">
          <h1 className="product-details__title">{product.title}</h1>
          <h2 className="product-details__price">{formatCurrency(product.price)}</h2>
          <p className="product-details__policies">
            Tax included. <Link className="product-details__policies-shipping-link slide-in-and-back underline fixed-height" to="/about">Shipping</Link> calculated at checkout.
          </p>
          <ProductSizeForm product={product}/>
          <Accordion 
            keepOthersOpen={true} 
            description={product.description} 
            factsData={productDetailsData} 
            btnClass="accordion__product-details-title-btn"
            ulClass="accordion-product-details"
          />
        </section>
      </div>
    </>
  );
}
 
export default ProductInfo;