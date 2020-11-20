import { getRepository } from 'typeorm'
import Orphanages from '../models/Orphanages'
import { Request, Response } from 'express'
import orphanageView from '../views/orphanages_views'
export default {
    async create(request: Request, response: Response) {
        /*const {
               name,
               latitude,
               longitude,
               about,
               instructions,
               opening_hours,
               open_on_weekends,
           } = request.body;*/
        const data = {
            name: 'Lar Kuzola',
            latitude: '234234,34',
            longitude: '34324234,343',
            about: 'dfdfadf',
            instructions: 'dfdf',
            opening_hours: 'asdasd',
            open_on_weekends: true,
        }

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        })
        const orphanageRepository = getRepository(Orphanages)

        const orphanage = orphanageRepository.create(data)
        await orphanageRepository.save(orphanage)
        console.log(request)
    },

    async index(request: Request, response: Response) {
        const orphanageRepository = getRepository(Orphanages)

        const orphanages = await orphanageRepository.find({
            relations: ['images']
        })

        return response.json(orphanageView.renderMany(orphanages));
    },
    async show(request: Request, response: Response) {
        const orphanageRepository = getRepository(Orphanages)

        const orphanage = await orphanageRepository.findOneOrFail(request.params.id, { relations: ['images'] })

        return response.json(orphanageView.render(orphanage));
    }
}
