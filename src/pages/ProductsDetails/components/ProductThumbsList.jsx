const ProductThumbsList = ({ product, imgIndex, className, setImgIndex }) => {
  return ( 
    <>
      {product.images.map(({ url, alt }, i) => (
        <li 
          role="presentation" 
          key={url}
        >
            <img 
              role="tab"
              aria-selected={i === imgIndex}
              aria-controls={`product-preview-slider__item-${i + 1}`}
              aria-label={`Thumbnail of: ${alt} (image ${i + 1} of ${product.images.length})`}
              className={className}
              style={{ border: i === imgIndex ? '2px solid #000' : null }}
              src={url + '-s.jpg'} 
              alt='' 
              tabIndex="0"
              draggable="false"
              onClick={() => {
                setImgIndex(i);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') setImgIndex(i);
              }}
            />
        </li>
      ))}
    </>
  );
}
 
export default ProductThumbsList;