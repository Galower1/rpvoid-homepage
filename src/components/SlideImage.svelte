<script>
	import Lazy from 'svelte-lazy';

	export let slides;
	export let index;

	let loaded = false;

	let backgroundOne;
	let backgroundTwo;

	const layerOneBackgrounds = [
		'bg_1.png',
		'bg_2.png',
		'bg_3.png',
		'bg_4.png',
		'bg_5.png',
		'bg_6.png'
	];

	const layerTwoBackgrounds = ['pt_1.png', 'pt_2.png', 'pt_3.png', 'pt_4.png', 'pt_5.png'];

	const randomizeBackgrounds = (index) => {
		backgroundOne = Math.floor(Math.random() * 6);
		backgroundTwo = Math.floor(Math.random() * 5);
	};

	$: randomizeBackgrounds(index);

	let layerOne;
	let layerTwo;

	$: layerOne = `/media/backgrounds/${layerOneBackgrounds[backgroundOne]}`;
	$: layerTwo = `/media/backgrounds/${layerTwoBackgrounds[backgroundTwo]}`;
</script>

<div class="slide-image-container">
	<div class="loader" class:hide={loaded} class:container={!loaded}>
		<img src="/media/ui/loadingRobot.gif" alt="loading robot" />
	</div>
	{#each layerOneBackgrounds as layer, i (i)}
		<img src="/media/backgrounds/{layer}" alt="mask" class="hide" />
	{/each}

	{#each layerTwoBackgrounds as layer, i (i)}
		<img src="/media/backgrounds/{layer}" alt="mask" class="hide" />
	{/each}

	<Lazy>
		{#each slides as { imageURL }, i (i)}
			<img
				on:load={() => (loaded = true)}
				src={imageURL}
				alt={imageURL}
				class="slide-image"
				class:hide={i !== index}
				style={`background-image: url(${layerTwo}), url(${layerOne})`}
			/>
		{/each}
	</Lazy>
</div>

<style>
	.slide-image-container {
		display: flex;
	}

	.loader {
		width: 400px;
		height: 350px;
	}

	.loader img {
		width: 150px;
		height: 150px;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hide {
		display: none;
	}
</style>
