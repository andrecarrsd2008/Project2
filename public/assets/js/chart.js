Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted () {
      this.renderChart({
        labels: ['5/1/2018', '5/2/2018', '5/3/2018', '5/4/2018', '5/5/2018', '5/6/2018', '5/7/2018'],
        datasets: [
          {
            label: 'Weight',
            backgroundColor: '#f87979',
            data: [70, 71, 72, 68, 66, 65, 64]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
    
  })
  
  var vm = new Vue({
    el: '.weight',
    data: {
      message: 'Weight (kgs)'
    }
  })
  
  Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted () {
      this.renderChart({
        labels: ['5/1/2018', '5/2/2018', '5/3/2018', '5/4/2018', '5/5/2018', '5/6/2018', '5/7/2018'],
        datasets: [
          {
            label: 'Step Count',
            backgroundColor: '#1b7979',
            data: [1000, 1100, 1000, 1200, 900, 800, 1000]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
    
  })
  
  var vm = new Vue({
    el: '.stepCount',
    data: {
      message: 'Step Count'
    }
  })

  Vue.component('line-chart', {
    extends: VueChartJs.Line,
    mounted () {
      this.renderChart({
        labels: ['5/1/2018', '5/2/2018', '5/3/2018', '5/4/2018', '5/5/2018', '5/6/2018', '5/7/2018'],
        datasets: [
          {
            label: 'Hours Of Sleep',
            backgroundColor: '#5c49b9',
            data: [6, 8, 7, 5, 9, 7, 10]
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
    
  })
  
  var vm = new Vue({
    el: '.hoursOfSleep',
    data: {
      message: 'Hours Of Sleep'
    }
  })