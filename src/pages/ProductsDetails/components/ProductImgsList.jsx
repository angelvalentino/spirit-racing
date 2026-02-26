const ProductImgsList = ({ product, imgIndex }) => {
  return ( 
    <>
      {product.images.map((img, i) => (
        <div 
          aria-roledescription="slide" 
          id={`product-preview-slider__item-${i + 1}`} 
          role="tabpanel" 
          className="product-image-container" 
          key={img.regular} 
          aria-hidden={imgIndex !== i} 
          style={{ translate: `${-100 * imgIndex}%` }}  
        >
          <img 
            aria-label={`${i + 1} of ${product.images.length}`}
            className="product-image" 
            src={img.regular} 
            alt={`${product.title} ${i + 1}`} 
          />
        </div>
      ))}
  </>
  );
}
 
export default ProductImgsList;