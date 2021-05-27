<template>
  <div id="nav">
    <h2>何况不服你离开了</h2>
    <div class="box">
      <span>nasd</span>
    </div>
  </div>
  <!-- <router-view/> -->
</template>

<style lang="scss">
#app {
  h2 {
    font-size: 36px;
    color: transparent;
    -webkit-text-fill-color: #694ee2; /*文字的填充色*/
    -webkit-text-stroke: 1.5px rgb(35, 214, 29);
  }
  #nav {
    width: 200px;
    height: 200px;
    background-color: #165199;
    .box {
      width: 50px;
      height: 50px;
      background-color: #845153;
      display: flex;
      justify-content: center;
      span {
        align-items: center;
      }
    }
  }
}
</style>
