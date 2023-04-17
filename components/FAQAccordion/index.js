import { useState } from "react"
import styles from './FAQAccordion.module.css'
import Image from "next/image";

export default function Accordion({
    question,
    answer
}) {

    const [isActive, setIsActive] = useState(false);

    return(
        <>
            <div>
                <div 
                className={`${styles.questionBar} ${isActive ? styles.faqActive : ''}`}
                onClick={() => setIsActive(!isActive)}>
                    {question}
                    <div className={styles.questionChevron}> 
                        {isActive ? 
                            <Image
                                src={'/icons/FAQDown.svg'}
                                alt={'down icon'}
                                height={30}
                                width={30}
                            /> : 
                            <Image
                                src={'/icons/FAQUp.svg'}
                                alt={'up icon'}
                                height={30}
                                width={30}
                            />
                        }
                    </div>
                    <div>
                        {isActive && <div className={styles.answerActive}>{answer}</div>}
                    </div>
                </div>
            </div>
        </>
    )
}