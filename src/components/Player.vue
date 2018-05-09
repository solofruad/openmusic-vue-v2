<template lang="pug">
    .content(v-if="track && track.album")
        p
            img(:src="track.album.images[0].url")
        p
            strong {{ track.name }}
            small [{{ track.duration_ms | ms-to-mm }}]
        p
            audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ... mapState(['track']) // los '...' es de ES7, la función mapState, es para mapear los estados del archivo store.js, en este caso se pone el nombre 'track', nombre de la variable que se asigno en sotore
    }
    /*data () {
        return {
            track: {}
        }
    },
    created () {
        this.$bus.$on('set-track', (track) =>{
            this.track = track
        })
    }*/
}
</script>

<style lang="scss" scoped>
    img {
        width: 124px;
        border-radius: 50%;
    }
</style>


