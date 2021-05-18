<template>
  <div>
    <h2>哈哈哈，我是scss</h2>
    <p>{{ $route.query.name }}</p>
    <p>{{ $route.query.age }}</p>
    <router-link to="/home/son">点我</router-link>
    <router-view></router-view>
    <div ref="charts" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>
<script>
export default {
  name: "scss",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.charts);
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss">
div {
  h2 {
    color: aqua;
    font: 1000;
  }
}
</style>