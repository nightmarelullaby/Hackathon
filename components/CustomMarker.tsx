import {useRecoilState} from "recoil"
import {ZoomState} from "@/atoms/ZoomState"
import L from "leaflet"
import {Marker,Popup} from "react-leaflet"
const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

export default function CustomMarker(){
	const [zoomState,setZoomState] = useRecoilState(ZoomState)

	return (<>
		{zoomState === null ? null
		:(<Marker position={zoomState.values} icon={icon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>)}
		</>)
}