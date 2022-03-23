import {createStore} from 'vuex';

export default createStore({
	state() {
		return {
			usertype: "",
			email: ""
		}
	},
	mutations: {
		loginAsEmployer(state) {
			state.usertype = "employer"
		},
		loginAsEmployee(state) {
			state.usertype = "employee"
		},
		storeEmail(state, email) {
			state.email = email
		}
	}
})