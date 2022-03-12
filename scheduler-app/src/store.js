import {createStore} from 'vuex';

export default createStore({
	state() {
		return {
			user: ""
		}
	},
	mutations: {
		loginAsEmployer(state) {
			state.user = "employer"
		},
		loginAsEmployee(state) {
			state.user = "employee"
		}
	}
})