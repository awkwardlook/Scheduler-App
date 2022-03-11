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

	{
		path: '/employeeprof',
		name: 'Employee Profile',
		component: () => import('../views/EmployeeProf.vue')
	},

	{
		path: '/employeeschedule',
		name: 'Employee Schedule',
		component: () => import('../views/EmployeeSchedule.vue')
	},

	{
		path: '/employeetimesheet',
		name: 'Employee Timesheet',
		component: () => import('../views/EmployeeTimesheet.vue')
	},

	{
		path: '/signout',
		name: 'Sign Out',
		component: () => import('../views/SignOut.vue')
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router