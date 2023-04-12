import styles from './footer.module.css'

export default function Footer() {


    return(
        
     <div className={styles.container}>
         
    <div className={styles.footer}>
         <img src='../icons/resources.png'></img>
        <img src='../icons/home.png'></img>
         <img src='../icons/stories.png'></img>
         <img src='../icons/settings.png'></img>
     </div>
     <div className={styles.footerlinks}>
     <a href="resources"> Resources</a>
     <a href="landingpage"> Home</a>
     <a href="stories"> Stories</a>
     <a href="settings"> Settings</a>

     </div>
    
        
       
       
       
     </div>
   
   
   
   )
}