import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/landingpage.module.css'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/Carousel'

export default function LandingPage() {

    return( 
<main className={styles.main}>






<div className={styles.title}>
     <h1 className={styles.header}>Curated For You</h1>
     <ImageSlider/>
 </div>




 

<div className={styles.section2}>
   <div className={styles.stats}>
      <img className={styles.icon} src='./icons/graph.png'></img>
      <a className={styles.name} href="about">Empowering Through Data</a>
      <p>How you help Canada grow</p>

  </div>
 <div className={styles.resource}>
    <img className={styles.icon} src='./icons/heart.png'></img>
    <a className={styles.name} href="resources">Local Support</a>
    <p>Find help in your area</p>
</div>
</div>


<div className={styles.section3}>
<div className={styles.weather}>
 <img className={styles.icon} src='./icons/umbrella.png'></img>
 <a className={styles.name} href="/">Weather From Home</a>

</div>
<div className={styles.stories}>
    <img className={styles.icon} src='./icons/dashboardstories.png'></img>
    <a className={styles.name} href="stories">Stories of Hope and Help</a>

</div>
</div>





<div>

<Footer/>


</div>




</main>




      
    )
}