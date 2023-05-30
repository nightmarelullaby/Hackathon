"use client"

import {MapContainer,TileLayer,Marker,Popup,ZoomControl,GeoJSON,FeatureGroup} from "react-leaflet"
import AutoZoom from "@/components/AutoZoom"
import CustomMarker from "@/components/CustomMarker"
import Legend from "../components/Legend"
import ProvincesLayer from "@/components/ProvincesLayer"

export default function MapComponent(){
  return(   <MapContainer 
                  zoomControl={false}
                  style={{borderRadius:6,overflow:"hidden",minWidth:"100%",height:600}} 
                  center={[40.2085, -3.713]} 
                  zoom={4.8} 
                  scrollWheelZoom={true}>
                  <AutoZoom /> 
                  <CustomMarker/>
                <TileLayer
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />

   
                <ZoomControl 
                  zoomInText={`<div style="display:flex;align-items:center;justify-content:center;height:100%;"><svg style="width:16px;height:16px;"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></div>`} 
                  zoomOutText={`<div style="display:flex;align-items:center;justify-content:center;height:100%;"><svg style="width:16px;height:16px;"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" /></svg></div>`}/>
           

                <Legend />
                <ProvincesLayer /> 
                </MapContainer>
    )
}   
