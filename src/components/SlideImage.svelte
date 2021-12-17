<script>
	import Lazy from 'svelte-lazy';

	export let slides;
	export let index;

	let loaded = false;
</script>

<div class="slide-image-container">
	<div class="loader" class:hide={loaded} class:container={!loaded}>
		<img src="/media/ui/loadingRobot.gif" alt="loading robot" />
	</div>
	{#each slides as { imageURL }, i (i)}
		<Lazy
			><img
				on:load={() => (loaded = true)}
				src={imageURL}
				alt={imageURL}
				class="slide-image"
				class:hide={index !== i || !loaded}
			/></Lazy
		>
	{/each}
</div>

<style>
	.slide-image-container {
		display: flex;
	}

	.loader {
		width: 400px;
		height: 350px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loader img {
		width: 150px;
		height: 150px;
	}

	.hide {
		display: none;
	}
</style>
