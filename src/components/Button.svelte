<script>
	export let buttonText;
	export let type = '';
	export let redirect = '';
</script>

<a href={redirect} target={redirect !== '/account' ? '_blank' : ''} class="button-url">
	<button {type} class="general-button">{buttonText}</button>
</a>

<style>
	.button-url {
		margin-top: 30px;
		display: flex;
		justify-content: center;
		text-decoration: none;
	}

	.general-button {
		font-size: 35px;
		font-weight: 700;
		color: white;
		background: black;
		border-color: black;
		border-style: none;
		background-repeat: no-repeat;
		background-image: url('/media/ui/general.webp');
		width: 200px;
		height: 70px;
		padding: 0;
	}
</style>
