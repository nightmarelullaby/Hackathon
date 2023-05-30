import {useMapEvent,useMap} from "react-leaflet"
import {useRecoilState} from "recoil"
import {ZoomState} from "@/atoms/ZoomState"
import {useEffect} from "react"

export default function AutoZoom(){
	const [zoomState,setZoomState] = useRecoilState(ZoomState)
	let map = useMap()

	const setZoom = () =>{
		return map.setView(zoomState, 13, {animate: true,duration:4.1,easeLinearty:0.15})
	}

	useEffect(()=>{
		// if(zoomState === null) return map.setView([50,50], 4, {animate: true,duration:4.1,easeLinearty:0.3})
		if(zoomState === null) return;
		setZoom()
	},[zoomState])
	return null
}