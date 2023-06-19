import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js/auto';

const BezierLineChart = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        Chart.register(...registerables);

        const chartConfig = {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [1, 6.5, 8, 1, 1, 8, 6],
                        borderColor: 'rgba(255, 255, 255, 1)',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        tension: 0.4,
                        pointRadius: [0, 0, 0, 0, 0, 5, 0],
                        pointStyle: 'circle',
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'white',
                        pointBorderWidth: 2,
                        pointHoverRadius: 7,
                    },
                ],
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            display: true,
                            filter: function (legendItem, chartData) {
                                return legendItem.datasetIndex !== 0;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: 'white',
                            fontsize: 10,
                            autoSkip: false,
                            maxRotation: 0,
                            minRotation: 0,
                        },
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,
                        },
                    },
                },
                layout: {
                    padding: {
                        left: 10,
                    },
                    margin:{
                        top: 90
                    }
                },
            },
        };

        chartInstanceRef.current = new Chart(ctx, chartConfig);
    }, []);

    return <canvas ref={chartRef} style={{ width: '300px', height: '90px' }}></canvas>;
};

export default BezierLineChart;
