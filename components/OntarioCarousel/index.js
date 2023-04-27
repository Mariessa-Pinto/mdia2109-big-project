
import react, {useState} from 'react';
import { pictures } from '@/data/ontariodata.js'
import styles from './OntarioCarousel.module.css'
import Image from 'next/image';

const OntarioSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = pictures.length
  

    
    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
     setCurrent(current === 0 ? length - 1 : current -1);
    }
    console.log(current);

   
    

return (
        <section>
          
        {pictures.map((slide, index) => {
            return(
                <div className={styles.pictures}>
                <div className={index === current ? 'slide active' : 'slide'} key = {index}>
                    {index === current && (
                    <div className={styles.main}>
                        <h3 className={styles.headers}>{slide.title}</h3>
                    <Image className={styles.images} 
                     src={slide.Image}  
                     width={340}
                     height={150}
                     alt='refugee-images' 
                     /> 
                       
                  </div>
                    )}
                  
                    </div>
             </div>
            );
             })}
               <div className={styles.arrows}>
            <Image className={styles.leftarrow} onClick={prevSlide} width={20} height={20}  src="/icons/leftArrow.png" />
            <Image className={styles.rightarrow} onClick={nextSlide} width={20} height={20} src="/icons/rightArrow.png"/>
            </div>
        </section>
        
    )
};

export default OntarioSlider;