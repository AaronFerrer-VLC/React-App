import { useState } from "react"


const NewApartmentForm = ({ addNewApartment }) => {
    const [name, setName] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")
    const [price, setPrice] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)

    const handleNameChange = e => {
        const { value } = e.target
        setName(value)
    }
    const handleCountryChange = e => {
        const { value } = e.target
        setCountry(value)
    }
    const handleCityChange = e => {
        const { value } = e.target
        setCity(value)
    }
    const handleNeighbourhoodChange = e => {
        const { value } = e.target
        setNeighbourhood(value)
    }
    const handlePriceChange = e => {
        const { value } = e.target
        setPrice(value)
    }
    const handleBedroomsChange = e => {
        const { value } = e.target
        setBedrooms(value)
    }
    const handleFormSubmit = e => {
        e.preventDefault()
        const apartmentData = { name: name, country: country, city: city, neighbourhood: neighbourhood, price: price, bedrooms: bedrooms }
        addNewApartment(apartmentData)
    }
    return (
        <div className="NewApartmentForm">
            <form onSubmit={handleFormSubmit}>
                NAME
                <input type="text" value={name} onChange={handleNameChange} />
                <br />
                COUTRY
                <input type="text" value={country} onChange={handleCountryChange} />
                <br />
                CITY
                <input type="text" value={city} onChange={handleCityChange} />
                <br />
                NEIGHBOURHOOD
                <input type="text" value={neighbourhood} onChange={handleNeighbourhoodChange} />
                <br />
                PRICE
                <input type="number" value={price} onChange={handlePriceChange} />
                <br />
                BEDROOMS
                <input type="number" value={bedrooms} onChange={handleBedroomsChange} />
                <br />
                <input type="submit" value={'Agregar un apartamento'} />
            </form>
        </div>
    )
}
export default NewApartmentForm 