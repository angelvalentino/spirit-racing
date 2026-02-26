import { useRef } from "react";
import ProductsList from "./ProductsList";
import SkeletonProductsList from "../skeletons/SkeletonProductsList";
import ErrorMessage from "./ErrorMessage";

const Products = ({ carousel, addClass, products, loading, error, limit }) => {
  const displayedProducts = (products && limit) ? products?.slice(0, 6) : products;
  const shuffleRef = useRef(false); // Ref to track whether the array has been shuffled

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[randomIndex]
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  /* Conditionally shuffle the jackets array if it exists and if it hasn't been 
  shuffled yet and also if it isn't the products collection list grid */
  if (displayedProducts && addClass !== 'products-list-grid' && !shuffleRef.current) {
    shuffleArray(displayedProducts);
    shuffleRef.current = true;
  };
 
  return ( 
    <>
      { error && <ErrorMessage error={error} carousel={carousel} addClass={addClass} /> }
      { loading && <SkeletonProductsList carousel={carousel} addClass={addClass} /> }
      { (!loading && !error) && <ProductsList products={displayedProducts} carousel={carousel} addClass={addClass} /> }
    </>
  );
}
 
export default Products;