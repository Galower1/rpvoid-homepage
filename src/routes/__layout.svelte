<script>
	import Navbar from '../components/Navbar.svelte';
	import Lazy from 'svelte-lazy';
	import Parallax from '../components/Parallax.svelte';

	let loaded = false;

	const loadedComponent = () => (loaded = true);
</script>

<Navbar />

{#if !loaded}
	<div class="loader">
		<img src="/media/ui/loadingRobot.gif" alt="loading robot" />
	</div>
{/if}
<Lazy onload={loadedComponent}>
	{#if loaded}
		<slot />
		<Parallax />
	{/if}
</Lazy>

<style>
	.loader {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		margin-top: 100px;
	}

	.loader img {
		width: 150px;
		height: 150px;
	}
</style>
