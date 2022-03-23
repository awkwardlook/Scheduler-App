import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/employerprof',
		name: 'Employer Profile',
		component: () => import('../views/EmployerProf.vue')
	},
	{
		path: '/employeranalytics',
		name: 'Employer Analytics',
		component: () => import('../views/EmployerAnalytics.vue')
	},
	{
		path: '/employeeprof',
		name: 'Employee Profile',
		component: () => import('../views/EmployeeProf.vue')
	},
	{
		path: '/addemployee',
		name: 'Add Employee',
		component: () => import('../views/AddEmployee.vue')
	},
	{
		path: '/schedule',
		name: 'Schedule',
		component: () => import('../views/Schedule.vue')
	},
	{
		path: '/analytics',
		name: 'Analytics',
		component: () => import('../views/EmployerAnalytics.vue')
	},
	{
		path: '/employeetimesheet',
		name: 'Employee Timesheet',
		component: () => import('../views/EmployeeTimesheet.vue')
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router