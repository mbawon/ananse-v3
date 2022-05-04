import { GoogleApiWrapper, Map, Marker } from 'google-maps-react'
import { useSelector } from 'react-redux'

const CustomMap = ({google})=>{

    const locations = []
    
    return (
        <Map
            google={google}
            center={locations[0]}
            initialCenter={locations[0]}
            zoom={locations.length === 1 ? 18 : 13}
        >
            {
                locations.map(
                    coords => <Marker position={coords} />
                )
            }
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey:""
})(CustomMap)