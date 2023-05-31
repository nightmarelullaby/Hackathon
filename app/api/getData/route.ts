import getData from "@/services/getData"
import { NextResponse } from 'next/server';

export async function GET(request: Request){
	const params = new URL(request.url).searchParams;
	const allParams = params.entries()
	const getEmptyParams = Array.from(allParams).filter(e => e[1] === "")

	getEmptyParams.forEach(param => {
		if(params.has(param[0])) params.delete(param[0])

	})
	const filteredParams = params.entries()
	const key = process.env.INFOJOBS_API_KEY
	console.log("inside api")
	try{

		const requestData = await getData(filteredParams,key)
		return NextResponse.json({requestData})	
	}catch(e){
		console.log(e)
		return NextResponse.json({"error":e})	
	}
	

}