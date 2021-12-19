<script>
	import NavbarCard from './NavbarCard.svelte';
</script>

<nav>
	<NavbarCard image={'/media/navbar/home.webp'} linkURL={'/'} />
	<NavbarCard image={'/media/navbar/login.webp'} linkURL={'/account'} />
	<NavbarCard image={'/media/navbar/key.webp'} linkURL={'/key'} />
	<NavbarCard image={'/media/navbar/patreon.webp'} linkURL={'/patreon'} />
	<NavbarCard image={'/media/navbar/discord.webp'} linkURL={'/discord'} />
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
	}
</style>
