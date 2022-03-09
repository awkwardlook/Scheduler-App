import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/register',
		name: 'EmployerRegister',
		component: () => import('../views/EmployerRegister.vue')
	},

	{
		path: '/employerprof',
		name: 'Employer Profile',
		component: () => import('../views/EmployerProf.vue')
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router