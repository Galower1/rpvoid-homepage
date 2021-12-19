<div class="parallax-container"><div class="parallax" /></div>

<style>
	.parallax {
		height: 250px;
		background-size: 1700px;
		background-image: url('/media/backgrounds/1.webp'), url('/media/backgrounds/2.webp'),
			url('/media/backgrounds/3.webp'), url('/media/backgrounds/4.webp');
		background-repeat: repeat-x, repeat-x, repeat-x, repeat-x;
		-webkit-animation: animate-background 50s linear infinite;
		animation: animate-background 50s linear infinite;
	}

	@keyframes animate-background {
		0% {
			background-position: 0 100%, 0 100%, 0 100%, 0 100%;
		}

		100% {
			background-position: 2000px 100%, 1000px 100%, 500px 100%, 250px 100%;
		}
	}
</style>
