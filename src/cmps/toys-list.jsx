import {ToyPreview} from "./toy-preview"

export const ToyList = ({ toys, onRemoveToy }) => {
    if (!toys) return <div>Loading...</div>
    return (
        <div className="toy-list simple-cards-grid">
            {toys.map(toy => <ToyPreview key={toy._id} toy={toy} onRemoveToy={onRemoveToy} />)}
        </div>
    )
}