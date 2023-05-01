<script>
	export let name;
</script>

<main>
	<!-- signup form -->
	<h2>Signup</h2>
	<form class="signup">
		<label for="email">Email:</label>
		<input type="email" name="email">
		<label for="password">Password:</label>
		<input type="password" name="password">
		<button>Signup</button>
	</form>

	<!-- login form -->
	<h2>Login</h2>
	<form class="login">
		<label for="email">Email:</label>
		<input type="email" name="email">
		<label for="password">Password:</label>
		<input type="password" name="password">
		<button>Login</button>
	</form>

	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button class="logout">Logout</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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