
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'Angular', level: 60 },
  { name: 'React', level: 80 },
  { name: 'SpringBoot', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'Java', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 80 },
  { name: 'Version Control', level: 70 },
];

// Define levels for display
const levels = {
  Rockstar: 80,
  'Kickass': 60,
  'Average': 40,
  'Beginner': 20,
};

const SkillsChart = () => {
  const data = {
    labels: skillsData.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Level (%)',
        data: skillsData.map(skill => skill.level),
        backgroundColor: 'rgba(247, 147, 30, 0.7)',
        borderColor: 'rgba(247, 147, 30, 1)',
        borderWidth: 1,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: 'Skills Chart',
        color: '#f7931e',
        font: {
          size: 24,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const skillLevel = tooltipItem.raw;
            return `Level: ${skillLevel}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: (context) => {
            // Display dotted lines for the custom levels
            if (Object.values(levels).includes(context.tick.value)) {
              return 'rgba(255, 255, 255, 0.6)'; // lighter grid line
            }
            return 'rgba(255, 255, 255, 0.2)'; // regular grid line
          },
          borderDash: [5, 5], // Dotted line style
        },
        ticks: {
          color: '#ccc',
          callback: (value) => {
            // Display level names next to each threshold
            const levelName = Object.keys(levels).find(key => levels[key] === value);
            return levelName || '';
          },
        },
        title: {
          display: true,
          text: 'Proficiency Level',
          color: '#fff',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ccc',
        },
      },
    },
  };

  return (
    <div className="skills-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsChart;
