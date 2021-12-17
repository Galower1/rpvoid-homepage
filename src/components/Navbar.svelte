<script>
	import NavbarCard from './NavbarCard.svelte';
</script>

<nav>
	<NavbarCard image={'/media/navbar/home.png'} linkURL={'/'} />
	<NavbarCard image={'/media/navbar/login.png'} linkURL={'/account'} />
	<NavbarCard image={'/media/navbar/key.png'} linkURL={'/key'} />
	<NavbarCard image={'/media/navbar/patreon.png'} linkURL={'/patreon'} />
	<NavbarCard image={'/media/navbar/discord.png'} linkURL={'/discord'} />
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
	}
</style>
