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
		path: '/eregister',
		name: 'EmployerRegister',
		component: () => import('../views/EmployerRegister.vue')
	},

	{
		path: '/employerprof',
		name: 'Employer Profile',
		component: () => import('../views/EmployerProf.vue')
	},

	{
		path: '/employerschedule',
		name: 'Employer Schedule',
		component: () => import('../views/EmployerSchedule.vue')
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
		path: '/employeeschedule',
		name: 'Employee Schedule',
		component: () => import('../views/EmployeeSchedule.vue')
	},
	{
		path: '/employerschedule',
		name: 'Employer Schedule',
		component: () => import('../views/EmployerSchedule.vue')
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

	{
		path: '/signout',
		name: 'Sign Out',
		component: () => import('../views/SignOut.vue')
	},
	{
		path: '/mainschedule',
		name: 'Main Schedule',
		component: () => import('../views/MainSchedule.vue')
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router