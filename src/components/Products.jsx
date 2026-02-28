import { useMemo } from "react";
import ProductsList from "./ProductsList";
import SkeletonProductsList from "../skeletons/SkeletonProductsList";
import ErrorMessage from "./ErrorMessage";

const Products = ({ carousel, addClass, products, loading, error, limit }) => {
  const displayedProducts = useMemo(() => {
    if (!products) return [];

    const list = limit ? products.slice(0, 6) : [...products];

    if (limit) {
      const shuffled = [...list];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    return list;
  }, [products]);

  return ( 
    <>
      { error && <ErrorMessage error={error} carousel={carousel} addClass={addClass} /> }
      { loading && <SkeletonProductsList carousel={carousel} addClass={addClass} /> }
      { (!loading && !error) && <ProductsList products={displayedProducts} carousel={carousel} addClass={addClass} /> }
    </>
  );
}
 
export default Products;