import styles from './FemaleChart.module.css'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

export const data = {
  labels: ['Canadian Born immigrants', 'Refugees'],
  datasets: [
    {
      label: 'Sense Of Belonging in Canada (in percent)',
      data: [91, 95],
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

export default function FemaleChart() {
  return (
    <>
      <h1 className={styles.heading}> Sense of belonging in Canada</h1>
      <p className={styles.describer}>Refugees often have a deep and unwavering sense of belonging to Canada, which is a testament to their strong commitment to integrating into Canadian society and making this country their permanent home. This sense of belonging not only reflects their appreciation for the opportunities and support that Canada offers, but also their willingness to contribute to and participate in Canadian communities.</p>
      <div className={styles.doughnut}>
        <Doughnut data={data}/>
      </div>  
    </>
  )
}
