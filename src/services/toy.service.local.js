import { storageService } from './async-storage.service.js'

export const toyService = {
    query,
    save,
    remove,
    getById,
    getEmptyToy,
}

const STORAGE_KEY = 'toysDB'
const gDefaultToys = [
    { _id: 'r1', name: 'Batman', price: 50, labels: 'Box-Game', createdAt: Date.now(), inStock: true, },
    { _id: 'r2', name: 'Muki-Man', price: 523, labels: 'Doll', createdAt: Date.now(), inStock: true, },
    { _id: 'r3', name: 'Bobo-Man', price: 142, labels: 'Art', createdAt: Date.now(), inStock: false, },
    { _id: 'r4', name: 'Shuki', price: 65, labels: 'On-Wheels', createdAt: Date.now(), inStock: true, },
    { _id: 'r5', name: 'Spider', price: 41, labels: 'On-Wheels', createdAt: Date.now(), inStock: false, },
    { _id: 'r6', name: 'Toppy-Man', price: 345, labels: 'On-Wheels', createdAt: Date.now(), inStock: true, },
    { _id: 'r7', name: 'Hukki-Man', price: 32, labels: 'On-Wheels', createdAt: Date.now(), inStock: false, },
    { _id: 'r8', name: 'Buly-Man', price: 87, labels: 'On-Wheels', createdAt: Date.now(), inStock: true, },
]

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(toys => {

        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, gDefaultToys)
            toys = gDefaultToys
        }
        if (filterBy) {
            var { name, price } = filterBy
            price = price || Infinity
            toys = toys.filter(toy => toy.name.toLowerCase().includes(name.toLowerCase()) && toy.price < price)
        }
        return toys
    })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function getEmptyToy() {
    return {
        name: '',
        price: ''
    }
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}