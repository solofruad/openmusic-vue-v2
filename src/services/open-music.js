import trae from 'trae'
import configService from './config'

const openMusicService = trae.create({
    baseUrl: configService.apiUrl
})

export default openMusicService