<script>
	export let slides;
	export let index;
</script>

<div class="slide-image-container">
	{#each slides as { imageURL }, i (i)}
		<img src={imageURL} alt={imageURL} class="slide-image" class:hide={index !== i} />
	{/each}
</div>

<style>
	.slide-image-container {
		display: flex;
	}

	.hide {
		display: none;
	}
</style>
