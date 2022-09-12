
import { toyService } from '../../services/toy.service.js'

export function loadToys() {

    return (dispatch, getState) => {
        const { filterBy } = getState().toyModule
        toyService.query(filterBy)
            .then(toys => {
                dispatch({ type: 'SET_TOYS', toys })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function removeToy(toyId) {
    return (dispatch, getState) => {
        toyService.remove(toyId)
            .then(() => {
                dispatch({ type: 'REMOVE_TOY', toyId })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}