"use client"

import {Popup,GeoJSON,useMap} from "react-leaflet"
// import provicesGeoJSON from "/public/spain-provinces.metadata.json"
import {useState,useEffect,useRef} from "react"
import getColor from "@/utils/getColor"
import {geoJSONState} from "@/atoms/geoJSON"
import style from "@/utils/style"
// import L from "leaflet"
import {Metric, Subtitle, Bold, Italic, Text, TabList, Tab,ProgressBar,Divider } from "@tremor/react";
import "@/styles/ProvincesLayer.css"
import {useRecoilState} from "recoil"
import {fetchDataState} from "@/atoms/fetchData"
// import {Control} from "leaflet"
// const layerGroup = L.layerGroup();

export default function ProvincesLayer(){
  const [popupData,setPopupData] = useState({})
  const [geoJSONData,setgeoJSONData] = useRecoilState(geoJSONState)
  const layer = useRef()
  const [fetchData,setFetchData] = useRecoilState(fetchDataState)
  const map = useMap()
  // var info = L.control();

  // info.onAdd = function (mapInput) {
      
  //     this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  //     this.update();
  //     return this._div;
  // };


  // // method that we will use to update the control based on feature properties passed
  // info.update = function (props) {
  //     this._div.innerHTML = '<h4>Distribución de empleo por provincia</h4>' +  (props ?
  //         '<b>' + props.name + '</b><br />' + props.population + ' trabajos'
  //         : 'Desliza el mouse para más información');
  //   // this._div.appendChild("xd");
  // };



  // function resetHighlight(e) {
  //       provincesSpain.resetStyle(e.target);
  //       info.update();
  // }
  // function highlightFeature(e) {
  //     var layer = e.target;
  //     info.update(layer.feature.properties);

  //   layer.setStyle({
  //       weight: 1.5,
  //       color: 'blue',
  //       dashArray: '',
  //       fillOpacity: 0.7
  //   });

  //   layer.bringToFront();}
  // const provincesSpain = new L.GeoJSON(geoJSONData,{
  //       // style:style,
  //       onEachFeature:( feature, layer )=>{
  //       // layer.on({
  //       //   mouseover: highlightFeature,
  //       //   mouseout: resetHighlight,
  //       // })
  //       const { properties = {} } = feature;
  //       const {population} = properties;
  //       if(!population) return layer.bindPopup(`<div style="display:flex;gap:6px;align-items:center;"><p style="color:gray;">No data here...</p></div>`)
  //       // return layer.bindPopup(`<div style="display:flex;gap:6px;align-items:center;border-radius:4px;"><p>[ ${properties.name} ]</p><p style="color:gray">Jobs avalible here: </p><strong>${feature.properties.population}</strong></div>`)
  //       return layer.bindPopup(<Text>Te odio Venezuela</Text>)
  //       }
  //     });
  // useEffect(() => {
  // console.log(layer)
  // },[geoJSONData])
  useEffect(() => {
    if(!layer.current) return

    layer.current?.addData(geoJSONData)
    return ()=> layer.current?.clearLayers()
  },[geoJSONData])
  return(
               <GeoJSON data={geoJSONData} style={style} ref={layer} eventHandlers={{click:(e)=>setPopupData(e.propagatedFrom.feature)}} >
                  <Popup >
                  <div className="flex">
                      <div>
                        <Bold class="text-white">{popupData.properties?.name}</Bold>
                        <Text className="my-2 text-white" style={{margin:"8px 0"}}>{popupData.properties?.population}</Text>
                      </div>
                      <hr style={{width:1,height:"inherit",margin:"0 16px",backgroundColor:"gray"}}/> 
                      <div className="flex flex-col gap-y-2">
                      <Text className="text-white">{Math.round((popupData.properties?.population*100)/fetchData.totalResults)}% de empleos totales</Text>
                      <ProgressBar percentageValue={Math.round((popupData.properties?.population*100)/fetchData.totalResults)} color="blue"/>
                      </div>
                    </div>
                  </Popup>

                </GeoJSON> )
}
  
