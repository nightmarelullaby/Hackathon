import getDataByID from "@/services/getDataByID"
import { NextResponse } from 'next/server';

export async function GET(request: Request){
	const params = new URL(request.url).searchParams;

	const id = await params.get("id")
	const key = process.env.INFOJOBS_API_KEY
	try{
		const requestData = await getDataByID(id,key)
		return NextResponse.json({requestData})	
	}catch(e){
		return NextResponse.json({e})	
	}
	

}