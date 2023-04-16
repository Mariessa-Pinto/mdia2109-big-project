import { useState, useEffect } from "react"
import styles from './chart1.module.css'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export const data = {
    labels: ['Canadian Born', 'Refugees'],
    datasets: [
      {
        label: 'Home Ownership (in percent)',
        data: [65, 79],
        backgroundColor: [
          'rgba(75, 192, 100, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        
         
        ],
        borderColor: [
          'rgba(75, 192, 100, 0.9)',
          'rgba(54, 162, 235, 1)',
         
        
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export default function DoughnutChartUniversal() {
    return (
      <>
      <h1 className={styles.heading}> Home Ownership </h1>
      <p className={styles.describer}>Owning a home is not only a symbol of financial stability but also represents a family's investment in a community. Despite facing initial financial challenges, a significant number of refugee families in Canada have been able to achieve this milestone</p>
      <div className={styles.doughnut}>
        
        <Doughnut data={data}/>
    </div>
         
  <div className={styles.description}>
  
  <h2 className={styles.describer}>Canadian Refugees</h2>
  <h2 className={styles.describer}>Canadian Born</h2>
  </div>
      </>
    )
   
  
  }
  