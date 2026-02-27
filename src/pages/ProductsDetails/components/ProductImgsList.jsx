const ProductImgsList = ({ product, imgIndex }) => {
  return ( 
    <>
      {product.images.map(({ url, alt }, i) => (
        <div 
          aria-roledescription="slide" 
          aria-hidden={imgIndex !== i} 
          role="tabpanel" 
          className="product-image-container" 
          id={`product-preview-slider__item-${i + 1}`} 
          key={url} 
          style={{ translate: `${-100 * imgIndex}%` }}  
        >
          <img 
            className="product-image" 
            src={url + '-m.jpg'} 
            alt={`${alt} (image ${i + 1} of ${product.images.length})`} 
          />
        </div>
      ))}
  </>
  );
}
 
export default ProductImgsList;