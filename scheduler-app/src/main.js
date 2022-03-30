import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import firebase from 'firebase'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

const firebaseConfig = {
	apiKey: "AIzaSyC1skHWlJ4I4B089I0L9fQ220M53gootqQ",
	authDomain: "scheduler-app-bt3103.firebaseapp.com",
	projectId: "scheduler-app-bt3103",
	storageBucket: "scheduler-app-bt3103.appspot.com",
	messagingSenderId: "764001766245",
	appId: "1:764001766245:web:2e1fda71e95b9a5012af8c"
};

firebase.initializeApp(firebaseConfig)
createApp(App).use(router).use(VueChartkick).mount('#app')
