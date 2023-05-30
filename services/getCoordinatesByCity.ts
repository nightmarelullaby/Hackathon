export default async function getCoordinatesByCity(city){

	try{
		const fetchData = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`,{headers:{'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJAS_KEY},
	})	
	const response = await fetchData.json()
	return response
}	catch(e){
	console.log(e)
}

}