<script>
	import Login from "./Login.svelte";
	import {onMount, setContext } from "svelte";

	import {
		key as userContextKey,
		initialValue as userContextInitialValue
	} from "./userContext";
 
	onMount(() => {
		setContext(userContextKey, userContextInitialValue);
	});
	const submit = ({ email, password }) =>
		new Promise((resolve, reject) => {
		setTimeout(() => {
			setContext(userContextKey, {
			name: "Zooben",
			lastName: "McDooben",
			email: "rauf.zabe@gmail.com"
			});
			resolve();
		}, 1000);
	});
</script>

<section>
	<Login {submit} />
</section>

<style>
	section {
		height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>