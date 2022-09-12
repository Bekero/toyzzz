
import { httpService } from './http.service.js'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy
}

const BASE_URL = `toy/`

function query(filterBy = { name: '', price: '' }) {
    return httpService.get(BASE_URL, { params: filterBy }).then(toys => toys)
}
function getById(toyId) {
    return httpService.get(BASE_URL + toyId).then(toy => toy)
}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId).then(toys => toys)
}

function getEmptyToy() {
    return {
        name: '',
        price: ''
    }
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy).then(toys => toys)
    } else {
        return httpService.post(BASE_URL, toy)
            .then(toys => toys)
    }
}