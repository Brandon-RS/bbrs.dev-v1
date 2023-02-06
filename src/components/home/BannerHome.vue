<script setup lang="ts">

defineProps<{ name: string }>()

const repos = 'https://github.com/Brandon-RS?tab=repositories'

</script>

<template>
  <div class="home-banner">
    <div class="banner-content">
      <h1>Hey, I'm {{ name }}!</h1>
      <h2>Welcome to my digital place. 🏡</h2>
      <p>
        I'm Systems Engineer and software developer from Perú. I like to build <a :href="repos"
          target="_blank">mobile</a>, <a :href="repos" target="_blank">web</a>, and <a :href="repos"
          target="_blank">desktop</a> applications, and my favorite framework is Flutter.
      </p>
    </div>
    <div class="banner-image">
      <img src="@/assets/images/icon-all.png" alt="brandon-pic">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;

  .banner-content {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-weight: 200;
      margin-top: 20px;
      font-size: 22px;
    }

    p {
      margin-top: 20px;
      font-size: 17px;
      line-height: 30px;
      letter-spacing: 1px;

      a {
        text-decoration: none;
        color: #5a43f1;
        border-bottom: 3px solid #5a43f1;
      }
    }
  }

  .banner-image {
    img {
      width: 250px;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 600px) {
  .home-banner {
    .banner-image {
      img {
        width: 150px;
        object-fit: cover;
      }
    }
  }
}
</style>
