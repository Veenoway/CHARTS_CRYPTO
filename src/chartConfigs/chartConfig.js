export const historyOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
    animation: {
      duration: 2000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        x: {
            ticks:{
                type: 'time',
                distribution: "linear",  
            } 
        }, 
        y: {
            ticks:{
                beginAtZero: false,
            } 
        }, 
    },
  };