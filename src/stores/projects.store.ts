import { defineStore } from 'pinia'
import type { projectType } from '@/types'

interface useProjectType {
  projects: projectType[]
}

const projectBaseUrl = 'https://github.com/Brandon-RS/'

export const useProjectStore = defineStore('projects', {
  state: (): useProjectType => ({
    projects: [
      {
        id: '1',
        name: 'Brandon.dev',
        year: '2021',
        desc: 'Personal portfolio. *This website',
        tags: ['Vue', 'Vuex', 'Router'],
        link: `${projectBaseUrl}brandon.dev`
      },
      {
        id: '2',
        name: 'Movies',
        year: '2021',
        desc: 'An application to see movies info in listings',
        tags: ['Flutter', 'TheMovieDB'],
        link: `${projectBaseUrl}Movies`
      },
      {
        id: '3',
        name: 'MapBox GL in Flutter',
        year: '2022',
        desc: 'Geolocation using MapBox and Google Maps API',
        tags: ['Flutter', 'MapBox'],
        link: `${projectBaseUrl}MapBox-GL-flutter`
      },
      {
        id: '4',
        name: 'API Rest with Node',
        year: '2022',
        desc: 'Rest API with node.js, JWT and MongoDB',
        tags: ['Node.js', 'JWT', 'MongoDB'],
        link: `${projectBaseUrl}NodeApi`
      },
      {
        id: '5',
        name: 'GruvBox GNOME Theme',
        year: '2021',
        desc: 'Linux theme for GNOME based environments',
        tags: ['API-Rest', 'OpenWeather'],
        link: `${projectBaseUrl}Gruvbox-Darck-Theme`
      },
      {
        id: '6',
        name: 'Weather App',
        year: '2021',
        desc: 'Weather app using OpenWeather API',
        tags: ['API-Rest', 'OpenWeather'],
        link: `${projectBaseUrl}Weather-app`
      },
    ]
  }),
  getters: {
    getAllProjects: (state) => {
      return state.projects
    }
  }
})
