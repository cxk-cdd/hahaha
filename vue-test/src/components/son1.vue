<template>
  <div>
    <p>我是子路由</p>
    <p>{{ $route.query }}</p>
  </div>
</template>

<script>
export default {
  name: "son1",
};
</script>
<style lang="scss">
p {
  color: black;
  font: 800;
}
</style>