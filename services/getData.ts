export default async function getData(props,key){
	const BASE_URL = new URL("https://api.infojobs.net/api/9/offer")
	const array = Array.from(props)
	await array.forEach(e => {
		const query = e[0]
		const value = e[1]
		return BASE_URL.searchParams.append(query , value)})
	try{
	const req = await fetch(BASE_URL , {headers:{
        method:"GET",
        Authorization: `Basic ${key}`
      }
    })
    const toJson = await req.json()
    return toJson
	}catch(e){
		return e
	}
} 