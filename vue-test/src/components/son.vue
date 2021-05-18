<template>
  <div>
    <p>我是子路由</p>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
export default {
  name: "son",
  computed: {
    userId() {
      return this.$route.params.userid;
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