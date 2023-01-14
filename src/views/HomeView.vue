<template>
  <div class="main-home">
    <HomeBanner name="Brandon" />
    <HomeSkills :skills="skills" />
    <HomeProjects :projects="projects" />
    <HomeContact />
  </div>
</template>

<script lang="ts" setup>

import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeSkills from '@/components/home/HomeSkills.vue'
import HomeProjects from '@/components/home/HomeProjects.vue'
import { projects, skills } from '@/components/data/data'
import HomeContact from '@/components/home/HomeContact.vue'

</script>

<style lang="scss" scoped>

</style>
