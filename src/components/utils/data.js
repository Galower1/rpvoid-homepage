export default {
	home: {
		title: 'This is RpVoid',
		slides: [
			{
				text: 'Inspired by Final Fantasy Tactics',
				videoURL: '/media/videos/1.webm',
				imageURL: '/media/covers/cover_1b.png'
			},
			{
				text: 'Interact with any object',
				videoURL: '/media/videos/6.webm',
				imageURL: '/media/covers/cover_6b.png'
			},
			{
				text: 'Terraform the world',
				videoURL: '/media/videos/2.webm',
				imageURL: '/media/covers/cover_3b.png'
			},
			{
				text: 'Day and night cycle',
				videoURL: '/media/videos/3.webm',
				imageURL: '/media/covers/cover_7b.png'
			},
			{
				text: 'Seasons and weather',
				videoURL: '/media/videos/5.webm',
				imageURL: '/media/covers/cover_8b.png'
			}
		],
		button: {
			buttonText: 'PLAY',
			redirect: '/account'
		}
	},
	account: {
		title: 'Account',
		slides: [
			{
				text: '',
				videoURL: '',
				imageURL: '/media/covers/cover_2b.png'
			}
		],
		button: {
			buttonText: 'LOGIN',
			type: 'submit'
		}
	},
	key: {
		title: 'Key',
		slides: [
			{
				text: 'Soon...',
				videoURL: '/media/videos/3.webm',
				imageURL: '/media/covers/cover_3b.png'
			}
		],
		button: {
			buttonText: 'KEY'
		}
	},
	patreon: {
		title: 'Patreon',
		slides: [
			{
				text: 'Support the project',
				videoURL: '/media/videos/12_OP.webm',
				imageURL: '/media/covers/cover_5b.png'
			}
		],
		button: {
			buttonText: 'SUPPORT',
			redirect: 'https://www.patreon.com/RpVoid'
		}
	},
	discord: {
		title: 'Discord',
		slides: [
			{
				text: 'Join our discord',
				videoURL: '/media/videos/11_OP.webm',
				imageURL: '/media/covers/cover_4b.png'
			}
		],
		button: {
			buttonText: 'DISCORD',
			redirect: 'https://discord.com/invite/a2EwYmj'
		}
	}
};
