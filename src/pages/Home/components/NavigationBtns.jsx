import { heroImgsData } from "../../../data/heroImgsData";
import { useEffect, useRef } from "react";

const NavigationBtns = ({ imgIndex, setImgIndex, handleKeydown}) => {
  const btnsRef = useRef([]);

  useEffect(() => {
    if (btnsRef.current[imgIndex]) {
      btnsRef.current[imgIndex].focus();
    }
  }, [imgIndex]);

  return ( 
    <> 
      <ul role="tablist" className="hero-slider__navigation-btns-list" onKeyDown={handleKeydown}>
        {heroImgsData.map((_, i) => (
          <li role="presentation" key={i}>
            <button 
              ref={lm => btnsRef.current[i] = lm}
              role="tab" 
              aria-selected={i === imgIndex}
              aria-controls={`hero-slider__item-${i + 1}`}
              aria-label={`Show image ${i + 1}.`}
              style={i === imgIndex ? { backgroundColor: '#fff' } : { backgroundColor: '#ffffff5f' }}
              className="hero-slider__navigation-btn"
              tabIndex={i === imgIndex ? '0' : '-1'}
              draggable="false" 
              onClick={() => {
                setImgIndex(i);
              }}>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
 
export default NavigationBtns;