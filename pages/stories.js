import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/stories.module.css'
import Footer from '@/components/Footer'


export default function Stories() {


return(



<main className={styles.maincontent}>
    
<h1 className={styles.header}>Stories of Hope and Help</h1>
 <div className={styles.section1}>
      
        <img className={styles.image1} src='./stories/unhcr.png'></img>
        <img className={styles.image3} src='./stories/society.png'></img>

    
</div>

<div className={styles.section2}>

<img className={styles.image2}  src='./stories/redcross.png'></img>
<img className={styles.image4} src='./stories/government.png'></img>

</div>

<Footer/>


</main>
)

}