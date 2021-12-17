<script>
	import Video from './Video.svelte';
	import SlideImage from './SlideImage.svelte';
	import SliderButton from './SliderButton.svelte';
	import Text from './Text.svelte';

	export let title;
	export let slides;

	let index = 0;

	const len = slides.length;

	const setIndex = (x) => (index = x);
	const setWheelIndex = ({ deltaY }) => {
		deltaY > 0 ? index++ : index--;

		if (index < 0) index = len - 1;
		else if (index > len - 1) index = 0;
	};
</script>

<div class="slide-show" on:mousewheel={setWheelIndex}>
	<h1>{title}</h1>
	<div class="slide-container">
		<div class="left-container">
			<Text {slides} {index} />
			<Video {slides} {index} />
		</div>
		<SlideImage {slides} {index} />
	</div>
	<div class="slider-button-container">
		{#if len > 1}
			{#each slides as item, i (i)}
				<SliderButton on:click={() => setIndex(i)} {index} id={i} />
			{/each}
		{/if}
	</div>
</div>

<style>
	h1 {
		text-align: center;
	}

	.slide-container {
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.slider-button-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
</style>
