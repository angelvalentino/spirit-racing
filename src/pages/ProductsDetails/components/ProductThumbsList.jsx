import { useEffect, useRef } from "react";

const ProductThumbsList = ({ product, imgIndex, className, setImgIndex }) => {
  const thumbsRef = useRef([]);

  useEffect(() => {
    if (thumbsRef.current[imgIndex]) {
      thumbsRef.current[imgIndex].focus();
    }
  }, [imgIndex]);

  return ( 
    <>
      {product.images.map(({ url, alt }, i) => (
        <li 
          role="presentation" 
          key={url}
        >
            <img 
              ref={lm => thumbsRef.current[i] = lm}
              role="tab"
              aria-selected={i === imgIndex}
              aria-controls={`product-preview-slider__item-${i + 1}`}
              aria-label={`Thumbnail of: ${alt} (image ${i + 1} of ${product.images.length})`}
              className={className}
              style={{ border: i === imgIndex ? '2px solid #000' : null }}
              src={url + '-s.jpg'} 
              alt='' 
              tabIndex={i === imgIndex ? '0' : '-1'}
              draggable="false"
              onClick={() => {
                setImgIndex(i);
              }}
            />
        </li>
      ))}
    </>
  );
}
 
export default ProductThumbsList;