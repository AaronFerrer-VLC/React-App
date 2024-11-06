import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import apartamentData from './../../data/apartments.json'

function ItemDetailPage() {

    const { apartmentId } = useParams()

    const selectedApartment = apartamentData.results.find(elm => elm.id === apartmentId)

    const [apartment, setApartment] = useState(selectedApartment)


    return (
        <div>

            <h1>{apartment.name}</h1>

            <hr />

            <Link to='/'>Volver a inicio</Link>

        </div>
    )
}
export default ItemDetailPage