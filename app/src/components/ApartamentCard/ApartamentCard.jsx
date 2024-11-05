
const apartamentCard =  ({id, country, city, neighbourhood, name, cancellation_policy, bedrooms, price, beds, property_type,host_name, deleteApartament }) => {

    let controlPrice;

    if (price > 90) {
        controlPrice = <span className="yellow">{price}</span>;  
    } else if (price < 90) {
        controlPrice = <span className="green">{price}</span>;  
    } else {
        controlPrice = <span className="blue">{price}</span>;  
    }
    

return (
    <div className = "apartamentCard">
        <h3>{name}</h3>
        <p>Country: {country}</p>
        <p>City: {city}</p>
        <p>Neighbourhood: {neighbourhood}</p>
        <p>Number of bedrooms:  {bedrooms}</p>
        <p>Price:  {controlPrice}</p>
        <p>Cancellation policy: {cancellation_policy}</p>
        <p>Number of beds: {beds}</p>
        <p>Property type: {property_type}</p>
        <p>Host Name: {host_name}</p>
        <button onClick={() => deleteApartament(id)}>Delete</button>
    </div>
)
    
}
export default apartamentCard

