<script>
	export let index;
	export let id;

	let source = '/media/ui/slide_button_small.png';
	$: source = index === id ? '/media/ui/slide_button_big.png' : '/media/ui/slide_button_small.png';
</script>

<img
	on:click
	src={source}
	alt="slider button"
	class={index === id ? 'custom-size-big' : 'custom-size-small'}
/>

<style>
	.custom-size-small {
		width: 50px;
		height: 6px;
	}

	.custom-size-big {
		width: 50px;
		height: 10px;
	}
</style>
