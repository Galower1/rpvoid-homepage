<script>
	import data from '../components/utils/data';
	import SlideShow from '../components/SlideShow.svelte';

	const { account } = data;
</script>

<SlideShow {...account} />
