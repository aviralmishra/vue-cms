import Vue from 'vue';

import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';

import App from './App.vue';
import Home from './components/home/Home.vue';
import DocumentInfo from './components/documents/DocumentInfo.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/document/:id',
    name: 'document',
    props: true,
    component: DocumentInfo
  }
];

const router = new VueRouter({mode: 'history', base: __dirname, routes});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
