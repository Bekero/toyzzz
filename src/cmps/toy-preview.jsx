import { Link } from 'react-router-dom'

export const ToyPreview = ({ toy, onRemoveToy }) => {

    return (
        <div className="toy-preview">
            {toy.inStock ? <span>🟢</span> : <span>🔴</span>}
            <div>
            <Link to={`/toy/${toy._id}`} className="toy-link">
                <h2 className="toy-name">{toy.name}</h2>
                <img className="toy-img" src={`https://robohash.org/${toy.name}/?set=set5`} alt="" />
            </Link>
            <h5 className="toy-price">{toy.price} $</h5>
            {/* <h6 className="toy-created-at">{createdAt}</h6> */}
            </div>
            <button className="delete-btn" onClick={() => onRemoveToy(toy._id)}>Delete</button>
            <Link className="edit-btn" to={`/toy/edit/${toy._id}`}>Edit</Link>
        </div>
    )
}