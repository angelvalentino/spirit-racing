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
              aria-controls={`product-preview-slider__item-${i + 1}`}
              aria-selected={i === imgIndex}
              aria-label={`Show image ${i + 1}.`}
              tabIndex="0" 
              className={className}
              style={{ border: i === imgIndex ? '2px solid #000' : null }}
              src={url + '-s.jpg'} 
              alt={`${product.title} preview ${i + 1}`} 
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