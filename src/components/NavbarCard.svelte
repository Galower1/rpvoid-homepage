<script>
	import { page } from '$app/stores';

	export let image = '';
	export let linkURL = '';

	let matchURL = false;
	$: matchURL = $page.path !== linkURL;
</script>

<a sveltekit:prefetch href={linkURL}>
	<img src={image} alt={linkURL} class:active={!matchURL} />
</a>

<style>
	img {
		position: relative;
		width: 160px;
		height: 130px;
		bottom: 20px;
		transition: 0.7s;
		filter: brightness(0.5) grayscale(0.4);
	}

	.active {
		transition: 0.7s;
		bottom: 0px;
		filter: none;
	}
</style>
