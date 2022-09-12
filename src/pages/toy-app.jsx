import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToyList } from '../cmps/toys-list.jsx'
import { ToyFilter } from '../cmps/toys-filter.jsx'
import { loadToys, removeToy, setFilterBy } from '../store/actions/toy.action'

export const ToyApp = () => {

    const { toys } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    useEffect(() => {
    }, [toys])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())
    }

    return (
        <div className="main-app-container">
            <h2>Toys App!</h2>
            <ToyFilter onChangeFilter={onChangeFilter} />
            <Link className="add-toy-btn" to="/toy/edit"><span>Add Toy!</span></Link>
            <ToyList toys={toys} onRemoveToy={onRemoveToy} />
        </div>
    )
}