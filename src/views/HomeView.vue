<template>
  <div class="main-home">
    <HomeBanner name="Brandon" />
    <HomeSkills :skills="skills" />
    <HomeProjects :projects="projects" />
    <HomeContact />
  </div>
</template>

<script lang="ts" setup>

import HomeBanner from '@/components/home/BannerHome.vue'
import HomeSkills from '@/components/home/SkillsHome.vue'
import HomeProjects from '@/components/home/ProjectsHome.vue'
import HomeContact from '@/components/home/ContactHome.vue'
import { projects, skills } from '@/components/data/data'

</script>

<style lang="scss" scoped>

</style>
