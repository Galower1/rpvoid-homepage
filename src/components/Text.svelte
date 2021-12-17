<script>
	export let index;
	export let slides;

	let computeText = '';

	const updateText = (index) => (computeText = slides[index].text);

	$: updateText(index);
</script>

<p>{computeText}</p>

<style>
	p {
		text-align: center;
	}
</style>
