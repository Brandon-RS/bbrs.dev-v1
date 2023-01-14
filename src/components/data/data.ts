import { ProjectType, SkillType } from '@/types'

const skills: SkillType[] = [
  {
    id: '1',
    name: 'Flutter, Cross-platform Framework',
    icon: 'flutter_logo_eg5eif',
    date: 'February, 2020'
  },
  {
    id: '2',
    name: 'Vue, Progressive TS Framework',
    icon: 'vue_logo_ut7y14',
    date: 'March, 2021'
  },
  {
    id: '3',
    name: 'Node.js, an open-source, cross-platform JS runtime environment',
    icon: 'node-js_kd3jrj',
    date: 'July, 2022'
  },
  {
    id: '4',
    name: 'TypeScript, JavaScript with syntax for types',
    icon: 'typescript_jiu00k',
    date: 'October, 2022'
  },
  {
    id: '5',
    name: 'Java, a high-level, class-based, object-oriented pr language',
    icon: 'java_logo_a8xidr',
    date: 'January, 2019'
  },
  {
    id: '6',
    name: 'Express.js, Fast, unopinionated, minimalist web framework',
    icon: 'express_ymzdd0',
    date: 'July, 2022'
  },
  {
    id: '7',
    name: 'Sql and NoSql, Language to create DBs',
    icon: 'sql_alobdh',
    date: 'March, 2019'
  },
  {
    id: '8',
    name: 'Linux, Free and open-source OS',
    icon: 'linux_logo_il82zn',
    date: 'December, 2020'
  },
  {
    id: '9',
    name: 'JS, HTML5, CSS3, SASS, PHP',
    icon: 'others_w5zq9t',
    date: 'Other technologies that I use'
  },
]

const projectBaseUrl = 'https://github.com/Brandon-RS/'

const projects: ProjectType[] = [
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

export { skills, projects }
