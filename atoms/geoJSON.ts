import {atom} from "recoil"
import provicesGeoJSON from "../public/spain-provinces.metadata.json"

export const geoJSONState = atom({
	key:"geojson",
	default:provicesGeoJSON
})