<script>
	export let image = '';
	export let linkURL = '';
</script>

<a href={linkURL}>
	<img src={image} alt={linkURL} />
</a>

<style>
	img {
		width: 160px;
		height: 130px;
	}
</style>
