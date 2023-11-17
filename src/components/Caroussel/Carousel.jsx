import './style.scss'
import { useState } from 'react'


const Carousel = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);
  
    const goNext = () => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1;
        if (newIndex > slides.length - 1) {
          newIndex = 0;
        }
        return newIndex;
      });
    };
  
    const goPrev = () => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex - 1;
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        }
        return newIndex;
      });
    };
  
      return (
        <>
            <div>
                <button onClick={goPrev}>Précédent</button>
                {slides.length > 0 && <img src={slides[index]} alt="Carousel" />}
                <button onClick={goNext}>Suivant</button>
            </div>
        </>
    );
};
  export default Carousel;