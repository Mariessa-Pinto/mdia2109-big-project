
import react, {useState} from 'react';
import { photos } from '../../data/ImageData'
import styles from './carousel.module.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = photos.length
  

    
    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
     setCurrent(current === 0 ? length - 1 : current -1);
    }
    console.log(current);

   
    

return (
        <section className={styles.slider}>
            <img className={styles.leftarrow} onClick={prevSlide}   src="/icons/leftArrow.png"/>
            <img className={styles.rightarrow} onClick={nextSlide}  src="/icons/rightArrow.png"/>
        {photos.map((slide, index) => {
            return(
                <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && ( <img className={styles.images} src={slide.Image} alt='school-images' />
                    )}
             </div>
            );
             })}
        </section>
    )
};

export default ImageSlider;