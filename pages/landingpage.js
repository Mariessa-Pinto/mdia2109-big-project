import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/landingpage.module.css'
import Footer from '@/components/Footer'

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
    <img className={styles.pencil} src='./icons/dashboardstories.png'></img>
    <a href="stories">Happy News From Home</a>


</div>



<div>

<Footer/>


</div>




</main>




      
    )
}