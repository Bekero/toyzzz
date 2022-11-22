import { useFormRegister } from '../hooks/useFormRegister'
import Switch from '@mui/material/Switch';

export const ToyFilter = (props) => {

    const [register, setFilterBy, filterBy] = useFormRegister({
        name: '',
        inStock: false,
        price: 0
    }, props.onChangeFilter)

    const onCheck = (...args) => {
        setFilterBy((prevFilterBy) => ({ ...prevFilterBy, inStock: args[1] }))
    }

    const classObj = { className: 'toy-filter' }
    return (

        <form {...classObj} >
            <section className="filter-section">
                <label htmlFor="name">Name</label>
                <input className="filter-input" placeholder="Filter By Name: " {...register('name', 'text')} />
            </section>
            <section className="filter-section">
                <label htmlFor="price">Max-Price</label>
                <input className="filter-input" placeholder="Filter By Price: " {...register('price', 'number')} />
            </section>
            <div>
                <label>Show in Stock</label>
                <Switch onChange={onCheck} checked={filterBy.inStock} />
            </div>
        </form>
    )
}