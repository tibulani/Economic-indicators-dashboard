fetch('http://127.0.0.1:5000/api/unemployment')
  .then(response => response.json())
  .then(result => {
const ctxUnemployment = document.getElementById('unemployment-chart').getContext('2d'); 
const ctxInflation = document.getElementById('inflation-chart').getContext('2d'); 
const ctxGDP = document.getElementById('GDP-chart').getContext('2d'); 

new Chart(ctxUnemployment,{
    type:'line',
    data:{
        labels:result.labels,
        datasets:[{
            label:'Unemploymnet rate(%)',
            data:result.data,
            borderWidth:3,
            fill:true,
            tension:0.4,
            borderColor: '#1e40af',
            backgroundColor: 'rgba(30,64,175,0.15)',
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
    }
});

new Chart(ctxInflation,{
    type:'line',
    data:{
        labels:result.labels,
        datasets:[{
            label:'Inflation rate(%)',
            data:result.data,
            borderWidth:3,
            fill:true,
            tension:0.4,
            borderColor: '#1e40af',
            backgroundColor: 'rgba(30,64,175,0.15)',
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
    }
});

new Chart(ctxGDP,{
    type:'line',
    data:{
        labels:result.labels,
        datasets:[{
            label:'GDP rate(%)',
            data:result.data,
            borderWidth:3,
            fill:true,
            tension:0.4,
            borderColor: '#1e40af',
            backgroundColor: 'rgba(30,64,175,0.15)',
        }]
    },
    options: {
        responsive:true,
        maintainAspectRatio:false,
    }
});

})

 .catch(error => console.error('Error catching data:', error));