import getCoordinatesByCity from "@/services/getCoordinatesByCity"

export default async function fetchAndSetZoom(city){
	const fetchData = await getCoordinatesByCity(city)
	const latitude = await fetchData[0].latitude 
	const longitude = await fetchData[0].longitude 
	console.log(longitude,latitude)
}