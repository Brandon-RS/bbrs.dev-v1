import type { skillType } from '@/types'
import { defineStore } from 'pinia'

interface useSkillType {
  skills: skillType[]
}

export const useSkillsStore = defineStore('skills', {
  state: (): useSkillType => ({
    skills: [
      {
        id: '1',
        name: 'Flutter, Cross-platform Framework',
        icon: 'flutter-logo_p88svm',
        date: 'February, 2020'
      },
      {
        id: '2',
        name: 'Vue, Progressive TS Framework',
        icon: 'vue-logo_oasbpi',
        date: 'March, 2021'
      },
      {
        id: '3',
        name: 'Node.js, an open-source, cross-platform JS runtime environment',
        icon: 'node-js-logo_d5ruo4',
        date: 'July, 2022'
      },
      {
        id: '4',
        name: 'TypeScript, JavaScript with syntax for types',
        icon: 'typescript-logo_slwszc',
        date: 'October, 2022'
      },
      {
        id: '5',
        name: 'Java, a high-level, class-based, object-oriented pr language',
        icon: 'java-logo_ui9yhs',
        date: 'January, 2019'
      },
      {
        id: '6',
        name: 'Express.js, Fast, unopinionated, minimalist web framework',
        icon: 'express-logo_kttppj',
        date: 'July, 2022'
      },
      {
        id: '7',
        name: 'Sql and NoSql, Language to create DBs',
        icon: 'sql-logo_jpcfzd',
        date: 'March, 2019'
      },
      {
        id: '8',
        name: 'Linux, Free and open-source OS',
        icon: 'linux-logo_elhj1q',
        date: 'December, 2020'
      },
      {
        id: '9',
        name: 'JS, HTML5, CSS3, SASS, PHP',
        icon: 'others-logo_z2gx0u',
        date: 'Other technologies that I use'
      },
    ]
  }),
  getters: {
    getAllSkills: (state) => {
      return state.skills
    }
  }
})