import {useMapEvent,useMap} from "react-leaflet"
import {useRecoilState} from "recoil"
import {ZoomState} from "@/atoms/ZoomState"
import {useEffect} from "react"

export default function AutoZoom(){
	const [zoomState,setZoomState] = useRecoilState(ZoomState)
	let map = useMap()
	const coordinates = zoomState.values
	const setZoom = (values) =>{
		return map.setView(values, 13, {animate: true,duration:4.1,easeLinearty:0.15})
	}

	useEffect(()=>{
		// if(zoomState === null) return map.setView([50,50], 4, {animate: true,duration:4.1,easeLinearty:0.3})
		if(zoomState.values === null) return;
		if(!zoomState.state) return;
		setZoom(coordinates)
	},[zoomState])
	return null
}