<script>
	import Lazy from 'svelte-lazy';

	export let index;
	export let slides;

	let computeText = '';

	const updateText = (index) => (computeText = slides[index].text);

	$: updateText(index);
</script>

<Lazy><p>{computeText}</p></Lazy>

<style>
	p {
		text-align: center;
		font-size: 20px;
	}
</style>
