import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3xhrv1RT-5fUYzxnNP4bX7MhE52N2t0Q",
  authDomain: "desafio-emiolo.firebaseapp.com",
  projectId: "desafio-emiolo",
  storageBucket: "desafio-emiolo.appspot.com",
  messagingSenderId: "1063087125828",
  appId: "1:1063087125828:web:709a9887b0f663a0725311"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount('#app')
