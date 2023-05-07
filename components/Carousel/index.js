
import {useState} from 'react';
import { photos } from '../../data/ImageData'
import styles from './carousel.module.css'
import Image from 'next/image';

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
            {
                photos.map((slide, index) => {
                    return (
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
                                        <h4 className={styles.describer}>{slide.paragraph}</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })
            }
            <div className={styles.arrows}>
                <Image 
                    className={styles.leftarrow} 
                    onClick={prevSlide} 
                    width={20} 
                    height={20} 
                    alt={'previous button'} 
                    src="/icons/leftArrow.png" 
                />
                <Image 
                    className={styles.rightarrow} 
                    onClick={nextSlide} 
                    width={20} 
                    height={20} 
                    src="/icons/rightArrow.png"
                    alt={'next button'}
                />
            </div>
        </section>
    )
};

export default ImageSlider;