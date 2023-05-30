import {useEffect} from "react"
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import {useMapEvents,useMap} from "react-leaflet"
import getColor from "@/utils/getColor"
import style from "@/utils/style"

export default function Legend (props){
	const mapHook = useMap()
	var legend = L.control({position:"bottomright"})
	useEffect(():any => {
		legend.onAdd = function (map){
		     var div = L.DomUtil.create('div', "legend"),
		        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
		        labels = [];

		         for (var i = 0; i < grades.length; i++) {
		            div.innerHTML +=
		            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
		            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		    }

		    return div;
		  }
		  legend.addTo(mapHook)
		//  const events = useMapEvents({
    	// 	load: ()=> 
  		// })
		  
		  return () => mapHook.removeLayer(legend)
	},[])
	  

	return null
}