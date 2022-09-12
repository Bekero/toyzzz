import { useFormRegister } from '../hooks/useFormRegister'

export const ToyFilter = (props) => {

    const [register] = useFormRegister({
        name: '',
        price: '',
        date: new Date(),
    }, props.onChangeFilter)

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
        </form>
    )
}