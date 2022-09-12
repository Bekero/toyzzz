import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'
import { userService } from '../services/user.service'
import { useRef } from 'react'

export const ToyDetails = () => {

    const [toy, setToy] = useState()
    const params = useParams()
    const navigate = useNavigate()
    const inputRef = useRef()

    useEffect(() => {
        loadToy()
    }, [params.id])

    const loadToy = async () => {
        const toyId = params.id
        const toy = await toyService.getById(toyId)
        setToy(toy)
    }

    const onBack = () => {
        navigate('/toy')
    }

    const onReviews = () => {
        // inputRef.classList.toggle('shown')
        // navigate('/toy')
    }

    const onSendReview = (ev) => {
        ev.preventDefault()
        const reviewTxt = ev.target[0].value
        const reviewRate = ev.target[1].value
        const reviewCreator = userService.getLoggedinUser()
        if (!reviewCreator) return
        let review = { reviewTxt, reviewRate, reviewCreator }
        console.log('review :', review)
    }

    if (!toy) return <div>Loading...</div>
    return (
        <div className='toy-details'>
            <section>
                <h3>Name: {toy.name}</h3>
            </section>
            <section>
                <img src={`https://robohash.org/${toy.name}/?set=set5`} alt="" />
            </section>
            <section>
                <h3>Labels: {toy.labels}</h3>
            </section>
            <section>
                <h3>Price: {toy.price} $</h3>
            </section>
            <section>
                <h3>{toy.inStock ? 'In stock' : 'Not in stock'}</h3>
            </section>
            <button className="btn back-btn" onClick={onBack}>Back</button>
            {/* <button className="btn reviews-btn" onClick={onReviews}>Reviews</button> */}
            <div className="reviews-container">
                
                {toy.reviews.map((review, index) => {
                    return <li key={index}>Review Creator: {review.creator} | Rated: {review.stars}</li>
                })}
            </div>
            {/* <form onSubmit={onSendReview}>
                <label htmlFor="w3review">Your Review :</label>
                <input type="text" id="w3review" name="w3review" rows="4" cols="50" /><br></br>
                <label htmlFor="rate">Rate</label>
                <select name="rate" id="cars">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select><br></br>
                <button>Add Review</button>
            </form> */}
        </div>

    )
}
