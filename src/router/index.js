import Vue from 'vue';
import Router from 'vue-router';
import MainView from '../components/MainView';
import AboutView from '../components/AboutView';
import JsonView from '../components/JsonView';


Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/about', component: AboutView},
    {path: '/', component: MainView},
    {path: '/json', component: JsonView},
  ],
});

