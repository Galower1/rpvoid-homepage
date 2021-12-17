<script>
	export let slides;
	export let index;
</script>

<div class="video-container">
	<img src="/media/ui/video_border3.png" alt="video-mask" />
	{#each slides as { videoURL }, i (i)}
		<video class="video-player {index !== i && 'hide'}" autoplay loop muted>
			<source src={videoURL} type="video/webm" />
		</video>
	{/each}
</div>

<style>
	.video-container {
		width: 400px;
		height: 325px;
	}

	.video-container img {
		width: inherit;
		height: inherit;
		position: absolute;
	}

	.video-player {
		width: inherit;
		height: inherit;
	}

	.hide {
		display: none;
	}
</style>
