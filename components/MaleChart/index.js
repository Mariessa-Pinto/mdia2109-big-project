import { useState, useEffect } from "react"
import styles from './MaleChart.module.css'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Canadian Born', 'Refugees'],
  datasets: [
    {
      label: 'Rates Of Entrepreneurship (in percent)',
      data: [12, 14],
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

export default function MaleChart() {
  return (
    <>
    <h1 className={styles.heading}> Rates of Entrepreneurship in Canada</h1>
    <p className={styles.describer}>Refugee entrepreneurship not only provides a means of self-sufficiency and economic independence for refugees, but also contributes to the growth and diversity of local economies. By starting their own businesses, refugees bring unique perspectives, skills, and cultural experiences to the table, which can lead to innovative ideas and new opportunities for both themselves and their communities.</p>
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

