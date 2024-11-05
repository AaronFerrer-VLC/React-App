import { useState } from "react"
import {apartamentData} from "../../data/apartaments"
import ApartamentCard from "../ApartamentCard/ApartamentCard"


const ApartamentList = () => {

    const [apartament, setApartament] = useState (apartamentData)

    const handleApartamentRemoval = idToDelete => {
        const filteredApartament = apartament.filter(eachApartament => eachApartament.id != idToDelete)
        setApartament(filteredApartament)
    }

    return (
        <div className = "ApartamentList">
            <h2>listado de apartamentos</h2>
        
        {
            apartament.map(eachApartament =>{
                return (
                <ApartamentCard
                 key = {eachApartament.id}
                 deleteApartament={handleApartamentRemoval}
                 {...eachApartament}
                 />)

            })
        }
    
        </div>
    )
}
 
 
  export default ApartamentList
  
