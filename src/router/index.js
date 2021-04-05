import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from '../Views/Home.vue';
import Contact from '../Views/Contact.vue';
import About from '../Views/About.vue';
import Work from '../Views/Work.vue';
import Skills from '../Views/Skills.vue';
import Experiences from '../Views/Experiences.vue';
import Error from '../Views/Error.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/realisation',
    name: 'Work',
    component: Work
  },
  {
    path: '/competences',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
