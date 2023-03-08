const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require("../models/models");
const ApiError = require('../errors/ApiError')


class DeviceController {

    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(el => DeviceInfo.create({
                    title: el.title,
                    desc: el.desc,
                    deviceId: device.id
                }))
            }


            return res.json(device)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }
    }


    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query;
        limit = limit || 3
        page = page || 1
        let offset = page * limit - limit
        let devices;

        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }

        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })
        return res.json(device)
    }

    async getJson(req, res) {
        let data = await fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
        return res.json(data)
    }

}

module.exports = new DeviceController()