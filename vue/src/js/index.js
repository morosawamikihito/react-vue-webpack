'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import App from './App'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router: new VueRouter(router),
    components: { App },
    template: '<App />'
})