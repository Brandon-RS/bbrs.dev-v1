<template>
  <div class="main">
    <div class="main-container">
      <div class="header">
        <div class="header-nav">
          <LogoComponent :icon="icon" :name="name" />
          <NavbarComponent />
        </div>
        <span class="theme-button">
          <i class="fa-solid fa-moon"></i>
        </span>
      </div>

      <router-view/>

      <HomeFooter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavbarComponent from './components/NavbarComponent.vue'
import LogoComponent from './components/LogoComponent.vue'
import HomeFooter from './components/HomeFooter.vue'

const icon = 'icon-head.png'
const name = 'Brandon Rojas'

</script>

<style lang="scss">
@import './assets/styles/index';

.header {
  margin: 30px 0 80px 0;

  .theme-button {
    color: rgb(255, 221, 0);
    background-color: #252525;
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    font-size: 25px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 30px;
  }
}

@media screen and (max-width: 600px) {
  .header {
    .theme-button {
      right: calc(100vw / 2.2);
      top: 10px;
    }
  }
}
</style>
