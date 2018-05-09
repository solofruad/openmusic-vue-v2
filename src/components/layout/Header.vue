<template lang="pug">
	section.hero.is-success
		.hero-head
			header.nav 
				.container
					.nav-left 
						.nav-item
							strong 📻  OpenMusic
						.nav-right.nav-menu
							router-link.nav-item(:to="{ name: 'search' }") Buscar
							router-link.nav-item(to="about") Nosotros

		.hero-body
			.container.has-text-centered
				h1.title OpenMusic
				h2.subtitle Canciones que estan Vue
				om-player
</template>

<script>
	import OmPlayer from '@/components/Player.vue'
	export default {
		components:{
			OmPlayer
		}
	}
</script>

