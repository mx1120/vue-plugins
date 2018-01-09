import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import banner from './map/banner.js'

Vue.use(Router)
let routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
	}
]

routes = routes.concat(banner)

export default new Router({
	mode:"history",
	base: __dirname,
  	routes
})
