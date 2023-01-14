<template>
  <div class="logo-container">
    <img :src="imageUrl(props.icon)" :alt="props.name">
    <router-link class="home-link" :to="{ name: 'home' } ">
      <span class="logo-title">{{ props.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: { type: String, required: true, },
  name: { type: String, required: true, }
})

const imageUrl = (pic: string) => require('../assets/images/' + pic)

</script>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

.logo-container {
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    width: 60px;
    margin-right: 10px;
  }

  .logo-title {
    font-size: 18px;
    font-weight: 600;
    padding-top: 10px;
  }

  .home-link {
    color: $font-color;
    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  .logo-container {
    display: none;
  }
}
</style>
