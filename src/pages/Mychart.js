import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Русский мост', 'Мемориал «Маска скорби»', 'Ленские столбы', 'Долина гейзеров', 'Авачинская сопка', 'Мертвый лес',
  'Владивостокская крепость','Водопады Курулуур','Космодром Восточный','Командорские острова'],
  datasets: [
    {
      label: '# of Votes',
      data: [500, 385, 153, 452, 467, 123, 768, 214, 657, 432],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(77, 76, 76, 0.2)',
        'rgba(127, 72, 41, 0.2)',
        'rgba(55, 250, 169, 0.2)',
        'rgba(206, 255, 10, 0.2)',
        'rgba(255, 10, 157, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(77, 76, 76, 1)',
        'rgba(127, 72, 41, 1)',
        'rgba(55, 250, 169, 1)',
        'rgba(206, 255, 10, 1)',
        'rgba(255, 10, 157, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Mychart() {
  return <Pie data={data} />;
}

export default Mychart;
