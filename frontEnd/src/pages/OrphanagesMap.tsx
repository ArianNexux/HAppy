import React from 'react';
import mapMarkerImg from '../images/map-marker.svg'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import '../styles/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconAnchor: [29, 68],
    iconSize: [58, 68],
    popupAnchor: [172, 0]
})
function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="" />
                    <h2>Escolha um orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>
                        Luanda
                    </strong>
                    <span>
                        Cacuaco
                    </span>
                </footer>
            </aside>


            <Map
                center={[-8.829633, 13.2779031]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX}`} />
                <Marker
                    icon={mapIcon}
                    position={[-8.829633, 13.2779031]}
                >
                    <Popup closeButton={false} minWidth={240} minHeight={240} className="map-popup">
                        Lar Kuzola
                        <Link to="/orphanages/1">
                            <FiArrowRight size={32} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>

    );
}

export default OrphanagesMap;