<script>
	import Video from './Video.svelte';
	import SlideImage from './SlideImage.svelte';
	import SliderButtonGrid from './SliderButtonGrid.svelte';
	import Text from './Text.svelte';
	import SlideTitle from './SlideTitle.svelte';
	import Lazy from 'svelte-lazy';

	export let title;
	export let slides;

	let index = 0;

	const len = slides.length;

	const setIndex = (e) => (index = e.detail.newIndex);
	const setWheelIndex = ({ deltaY }) => {
		deltaY > 0 ? index++ : index--;

		if (index < 0) index = len - 1;
		else if (index > len - 1) index = 0;
	};
</script>

<div class="slide-show" on:mousewheel={setWheelIndex}>
	<SlideTitle {title} />
	<div class="slide-container">
		<div class="left-container">
			<Text {slides} {index} />
			<Lazy>
				<Video {slides} {index} />
			</Lazy>
		</div>
		<SlideImage {slides} {index} />
	</div>
	<SliderButtonGrid {slides} {index} {len} on:set-index={setIndex} />
</div>

<style>
	.slide-container {
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
</style>
