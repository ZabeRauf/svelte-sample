import App from './App.svelte';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const app = new App({
	target: document.body,
	props: {
		name: 'Zooben McDooben'
	}
});

export default app;


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClADCaRjOrFUDQhgf31SLM0tYZP-W8kWI",
  authDomain: "hello-svelte-a3843.firebaseapp.com",
  projectId: "hello-svelte-a3843",
  storageBucket: "hello-svelte-a3843.appspot.com",
  messagingSenderId: "674893839379",
  appId: "1:674893839379:web:69c2f30aac034cea7593e6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

// Firestore init and config
const db = getFirestore()
const colRef = collection(db, 'forecaster')

getDocs(colRef)		// get collection reference
	.then((snapshot) => {
		let forecasters = []
		snapshot.docs.forEach((doc) => {
			forecasters.push({...doc.data(), id: doc.id})
		})
		console.log(forecasters)
	})
	.catch(err => {
		console.log(err.message)
	})

// signup form
const userSignup = document.querySelector('.signup')

userSignup.addEventListener('submit', (e) => {
	e.preventDefault()

	const email = userSignup.email.value
	const password = userSignup.password.value

	createUserWithEmailAndPassword(auth, email, password)
	.then((cred) => {
		console.log('Account creation successful', cred.user)
		userSignup.reset()
	})
	.catch((err) => {
		console.log(err.message)
	})
})

// login form
const userLogin = document.querySelector('.login')

userLogin.addEventListener('submit', (e) => {
	e.preventDefault()

	const email = userLogin.email.value
	const password = userLogin.password.value

	signInWithEmailAndPassword(auth, email, password)
	.then((cred) => {
		console.log('Successfully signed in', cred.user)
		userLogin.reset()
	})
	.catch((err) => {
		console.log(err.message)
	})
})

// logout button
const userLogout = document.querySelector('.logout')

userLogout.addEventListener('click', () => {
	signOut(auth)
	.then(()=> {
		console.log('User has logged out')
	})
	.catch((err) => {
		console.log(err.message)
	})
})