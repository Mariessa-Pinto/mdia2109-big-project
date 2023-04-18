import { useState } from "react"
import styles from './FAQAccordion.module.css'
import Image from "next/image";

export default function Accordion({
    question,
    answer,
    isActive,
    setIsActive,
    index
}) {

    return(
        <div className={`${styles.questions} ${isActive ? styles.faqActive : ""}`}>
            <div 
                className={styles.questionBar}
                onClick={() => setIsActive(!isActive)}
            >
                {question}
                <div className={styles.questionChevron}> 
                    {isActive ? (
                        <Image
                            src={'/icons/FAQUp.svg'}
                            alt={'down icon'}
                            height={30}
                            width={30}
                        />
                     ) : (
                        <Image
                            src={'/icons/FAQDown.svg'}
                            alt={'up icon'}
                            height={30}
                            width={30}
                        />
                    )}
                    </div>
                    </div>
                        {isActive && <div className={styles.answerActive}>{answer}</div>}
                    </div>
    )
}