<template>
  <div class="projects-container">
    <h2 class="second-title">Projects</h2>

    <div class="projects-cards generic-card-grid">
      <div class="card" v-for="pr in projects" :key="pr.id">
        <span class="card-year">{{ pr.year }}</span>
        <h3>{{ pr.name }}</h3>
        <p>{{ pr.desc }}</p>
        <div class="card-tags">
          <span v-for="tag in pr.tags" :key="tag">#{{ tag }}</span>
        </div>
      </div>
    </div>

    <p class="pr-footer">You can see all my public projects on GitHub</p>
  </div>
</template>

<script lang="ts" setup>
import { ProjectType } from '@/types'

defineProps<{ projects: ProjectType[] }>()

</script>

<style lang="scss" scoped>
.projects-container {
  margin-top: 60px;

  .projects-cards {
    .card {
      background-color: #1f1f1f;
      padding: 24px 10px 24px 24px;
      border: 2px solid rgb(45, 45, 45);
      border-radius: 10px;

      .card-year {
        color: #af0e99;
      }

      h3 {
        letter-spacing: 1px;
        margin: 10px 0 15px 0;
      }

      p {
        font-size: 16px;
        letter-spacing: .5px;
        margin-bottom: 20px;
      }

      .card-tags {
        margin-bottom: 10px;

        span {
          background-color: #252525;
          border: 2px solid rgb(55, 55, 55);
          border-radius: 20px;
          padding: 3px 10px;
          margin-right: 10px;
        }
      }
    }
  }

  .pr-footer {
    margin-top: 30px;
    font-size: 18px;
  }
}
</style>
