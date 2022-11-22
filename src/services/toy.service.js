
import { httpService } from './http.service.js'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

const BASE_URL = `toy/`

async function query(filterBy = {}) {
    const toys = await httpService.get(BASE_URL, { params: filterBy })
    return toys
}
async function getById(toyId) {
    const toy = await httpService.get(BASE_URL + toyId)
    return toy
}
async function remove(toyId) {
    const toy = await httpService.delete(BASE_URL + toyId)
    return toy
}

function getEmptyToy() {
    return {
        name: '',
        inStock: ''
    }
}

async function save(toy) {
    if (toy._id) {
        const res = httpService.put(BASE_URL + toy._id, toy).then(toys => toys)
        return res
    } else {
        const res = httpService.post(BASE_URL, toy)
        return res
            .then(toys => toys)
    }
}