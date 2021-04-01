import Vue from 'vue'
import VueRouter from 'vue-router';

import Home from '../Views/Home.vue';
import Profil from '../Views/Profil.vue';
import Contact from '../Views/Contact.vue';
import About from '../Views/About.vue';
import Work from '../Views/Work.vue';
import Skills from '../Views/Skills.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
