
import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { toyService } from '../services/toy.service'

export const ToyEdit = () => {

    const params = useParams()
    const navigate = useNavigate()
    const inputRef = useRef()
    const [toy, handleChange, setToy, handleCheckbox] = useForm({
        name: '',
        price: '',
        labels: []
    })

    async function loadToys() {
        const toyId = params.id
        const toy = toyId ? await toyService.getById(toyId) : toyService.getEmptyToy()
        setToy(toy)
    }

    useEffect(() => {
        loadToys()
    }, [])

    const onSaveToy = async (ev) => {
        ev.preventDefault()
        await toyService.save({ ...toy })
        // .then(() => {
            navigate('/toy')
        // })
    }

    let expanded = false;
    const showCheckboxes = () => {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }

    if (!toy) return <h1>Loading...</h1>
    return (
        <section className="toy-edit">
            <h1 className="edit-title">{toy._id ? "Edit" : "Add"} toy</h1>
            <form onSubmit={onSaveToy}>

                <label htmlFor="name">Name</label>
                <input
                    className="name-input"
                    ref={inputRef}
                    value={toy.name}
                    onChange={handleChange}
                    type="text" name="name"
                    id="name" />
                <br></br>
                <label htmlFor="price">Price</label>
                <input
                    className="price-input"
                    ref={inputRef}
                    value={toy.price}
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="price"
                />
                <br></br>
                <div className="multiselect">
                    <div className="selectBox" onClick={showCheckboxes}>
                        <select>
                            <option>Select Labels</option>
                        </select>
                        <div className="overSelect"></div>
                    </div>
                    <div value={toy.labels} id="checkboxes">
                        <label htmlFor="On wheels">
                            <input onChange={handleCheckbox} name="On wheels" type="checkbox" id="On wheels" />On wheels</label>
                        <label htmlFor="Box game">
                            <input onChange={handleCheckbox} name="Box game" type="checkbox" id="Box game" />Box game</label>
                        <label htmlFor="Art">
                            <input onChange={handleCheckbox} name="Art" type="checkbox" id="Art" />Art</label>
                        <label htmlFor="Baby">
                            <input onChange={handleCheckbox} name="Baby" type="checkbox" id="Baby" />Baby</label>
                        <label htmlFor="Doll">
                            <input onChange={handleCheckbox} name="Doll" type="checkbox" id="Doll" />Doll</label>
                        <label htmlFor="Puzzle">
                            <input onChange={handleCheckbox} name="Puzzle" type="checkbox" id="Puzzle" />Puzzle</label>
                        <label htmlFor="Outdoor">
                            <input onChange={handleCheckbox} name="Outdoor" type="checkbox" id="Outdoor" />Outdoor</label>
                    </div>
                </div>
                <div className="save-btn-container">
                    <button className="save-btn">Save</button>
                </div>
            </form>
        </section >
    )
}