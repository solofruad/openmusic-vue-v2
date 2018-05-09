import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        track: {}
    },
    getters: {
        trackTitle (state) {
            if (!state.track.name) { return '' }
            return `${state.track.name} - ${state.track.artists[0].name}`
        }
    },
    mutations: {
        setTrack (state,track) {
            state.track = track
        }
    },
    actions: {
        getTrackById (context, payload) { // params: context (hereda el contexto de la store) y payload ( es una variable que se pasa como parametro para interactuar con la acción)
            return trackService.getById(payload.id)
                .then( res =>{
                    context.commit('setTrack', res)
                    return res
                })
        }
    }
})

export default store