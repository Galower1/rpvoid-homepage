<script>
	import Navbar from '../components/Navbar.svelte';
	import Lazy from 'svelte-lazy';

	let loaded = false;
</script>

<Navbar />

{#if !loaded}
	<div class="loader">
		<img src="/media/ui/loadingRobot.gif" alt="loading robot" />
	</div>
{/if}
<Lazy fadeOption={{ duration: 200 }} onload={() => (loaded = true)}>
	<slot />
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
