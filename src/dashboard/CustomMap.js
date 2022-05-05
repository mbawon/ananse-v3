import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import potential from '../assets/images/Marker_Potential.png'
import vodafone from '../assets/images/Marker_Vodafone.png'
import dp from '../assets/images/Marker_DP.png'

const CustomMap = ({ google }) => {
    const [selectedPlace, setSelectedPlace] = useState({})
    const [activeMarker, setActiveMarker] = useState({})
    const [showingInfoWindow, setShowingInfoWindow] = useState(false)

    const locations = [
        {
            id: "1",
            description: "First business",
            lng: -0.23718422510230958,
            lat: 5.643621169002436,
            customer_status: "vodafone"
        },
        {
            id: "2",
            description: "Second business",
            lng: -0.17526964915539617,
            lat: 5.629472501321808,
            customer_status: "potential"
        }
    ]

    const onMarkerClick = (props, marker, e) => {
        console.log(marker);
        setSelectedPlace(props)
        setActiveMarker(marker)
        setShowingInfoWindow(true)
    }

    const onClose = props => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false)
            setActiveMarker(null)
        }
    };

    return (
        <Map
            google={google}
            initialCenter={{ lng: -0.17768062896098036, lat: 5.600075949714887 }}
            zoom={locations.length === 1 ? 18 : 13}
            style={{ height: "100%", position: "relative", width: "100%" }}
        >
            {
                locations.map(
                    coords =>
                        <Marker
                            onClick={onMarkerClick}
                            position={coords}
                            name={coords.description}
                            icon={coords.customer_status === "vodafone" ? vodafone : potential} />)
            }
            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}
                onClose={onClose}
            >
                <div style={{ width: 300, height: 60 }}>
                    <p>
                        {selectedPlace.name}
                    </p>
                </div>
            </InfoWindow>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBb84THY4whzRfym83HfIdwjGhI-Rwy-rI"
})(CustomMap)