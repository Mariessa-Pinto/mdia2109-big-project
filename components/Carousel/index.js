
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
        <section>
          
        {photos.map((slide, index) => {
            return(
                <div className={styles.pictures}>
                <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && (
                    <div className={styles.main}>
                        <h3 className={styles.headers}>{slide.title}</h3>
                    <img className={styles.images} 
                     src={slide.Image}  
                     alt='refugee-images' 
                     /> 
                       
                  </div>
                    )}
                  
                    </div>
             </div>
            );
             })}
               <div className={styles.arrows}>
            <img className={styles.leftarrow} onClick={prevSlide}   src="/icons/leftArrow.png"/>
            <img className={styles.rightarrow} onClick={nextSlide}  src="/icons/rightArrow.png"/>
            </div>
        </section>
        
    )
};

export default ImageSlider;