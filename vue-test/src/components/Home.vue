<template>
  <div>
    <p>我是父路由</p>
    <button @click="sendMessage">点点</button>
    <router-link
      :to="{ path: '/home/scss', query: { name: '李四', age: '18' } }"
      tag="button"
      >scss</router-link
    >
    <router-link :to="'/home/son/' + userid" tag="button">son</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userid: "张三",
    };
  },
  methods: {
    sendMessage() {
      return this.$router.push({
        path: "/home/son1",
        query: {
          asfa: "sjkfnakjs",
          dda: "sdasfjals",
        },
      });
    },
  },
};
</script>
<style lang="scss">
p {
  color: black;
  font: 800;
}
</style>