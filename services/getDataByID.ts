export default async function getDataByID(id,key){
	const BASE_URL = new URL("https://api.infojobs.net/api/9/offer/"+id)
	try{
	const req = await fetch(BASE_URL , {headers:{
        method:"GET",
        Authorization: `Basic ${key}`
      }
    })
    const toJson = await req.json()
    return toJson
	}catch(e){
		console.log("inside function",e)
	}
} 