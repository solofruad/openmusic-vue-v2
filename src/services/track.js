import openMusicService from './open-music'

const trackService = {}

trackService.search = function (q) {
    const type = 'track'

    return openMusicService.get('/search',{
        params: { q, type }
    })
    .then(res => res.data )
}

trackService.getById = function (id) {

    return openMusicService.get(`/tracks/${id}`).then(res => res.data )
}
export default trackService