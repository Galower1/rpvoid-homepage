<script>
	import SliderButton from './SliderButton.svelte';

	import { createEventDispatcher } from 'svelte';

	export let index;
	export let slides;
	export let len;

	const dispatch = createEventDispatcher();
</script>

<div class="slider-button-container">
	{#if len > 1}
		{#each slides as _, i (i)}
			<SliderButton on:click={() => dispatch('set-index', { newIndex: i })} {index} id={i} />
		{/each}
	{/if}
</div>

<style>
	.slider-button-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
</style>
