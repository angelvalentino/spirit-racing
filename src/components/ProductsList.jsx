import Product from "./Product";

const ProductsList = ({ products, carousel, addClass}) => {
  return ( 
    <>
      {carousel 
        ? <>
            { products.map(product => <Product product={product} key={product.id} />) }
          </> 
        : <ul className={`products-list-container ${addClass}`}>
            { products.map(product => <Product product={product} key={product.id} />) }
          </ul> 
      }
    </>
  );
}
 
export default ProductsList;