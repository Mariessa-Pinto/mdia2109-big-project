import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/stories.module.css'
import Footer from '@/components/Footer'
import ReadMore from '@/components/ReadMore'
import Link from 'next/link'


export default function Stories() {


return(



<main className={styles.maincontent}>
    

<div className={styles.top}>
    
<h1 className={styles.header}>Stories of Hope and Help</h1>

</div>
 <div className={styles.section1}>
      
<div className={styles.button1}>
    <img className={styles.image1} src='./stories/unhcr.png'></img>
    <Link href={'./s1'}><ReadMore/></Link> 
</div>
    
 <div className={styles.button2}>
    <img className={styles.image3} src='./stories/society.png'></img>
    <Link href={'./s2'}><ReadMore/></Link> 
</div>  
      
</div>

<div className={styles.section2}>

 <div className={styles.button3}>
<img className={styles.image2}  src='./stories/redcross.png'></img>
<Link href={'./s3'}><ReadMore/></Link> 
</div>

<div className={styles.button4}>
<img className={styles.image4} src='./stories/government.png'></img>
<Link href={'./s4'}><ReadMore/></Link> 
</div>

</div>

<div className={styles.bottom}>

<Footer/>
</div>


</main>
)

}