import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/landingpage.module.css'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/Carousel'

export default function LandingPage() {

    return( 
<main className={styles.main}>




<div className={styles.top}>
     <img className={styles.logo} src='./logo/smalllogo.svg'></img>
</div>
<div className={styles.title}>
     <h1 className={styles.header}>Curated For You</h1>

 </div>
 
<div className={styles.stories}>
    <img className={styles.icon} src='./icons/dashboardstories.png'></img>
    <a className={styles.name} href="stories">Happy News From Home</a>

</div>
<div className={styles.section2}>
   <div className={styles.stats}>
      <img className={styles.icon} src='./icons/graph.png'></img>
      <a className={styles.name} href="about">Statistics for You</a>

  </div>
 <div className={styles.resource}>
    <img className={styles.icon} src='./icons/heart.png'></img>
    <a className={styles.name} href="resources">Local Resources</a>
</div>
</div>
<div className={styles.weather}>
 <img className={styles.icon} src='./icons/umbrella.png'></img>
 <a className={styles.name} href="/">Weather From Home</a>

</div>
<ImageSlider/>



<div>

<Footer/>


</div>




</main>




      
    )
}