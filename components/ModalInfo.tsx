import {useRecoilState} from "recoil"
import {modalState} from "@/atoms/modalState"
import {ZoomState} from "@/atoms/ZoomState"
import { 
   BarList, 
   BarChart,
   Card, 
   Title, 
   Flex, 
   Metric, 
   Divider,
   Subtitle, 
   Legend,
   Bold, 
   Italic, 
   Text, 
   TabList, 
   Tab,
   ProgressBar,
   TextInput,
   Badge,
   BadgeDelta  } from "@tremor/react";
import Skeleton from 'react-loading-skeleton'
import Button from "@/components/Button"
import 'react-loading-skeleton/dist/skeleton.css'
import {useEffect,useState} from "react"
import useSWR from "swr"
import Image from "next/image"

const logoFallback = "https://components.infojobs.com/statics/images/pic-company-logo.png"
export const SkeletonStructure = () => {
	return(
		<>
			<Skeleton height={100}/>
			<Skeleton count={3}height={50}/>
			<Skeleton height={400}/>
		</>
		)
}
export const DataOfferStructure = ({data}) => {
	const [btn,setBtn] = useState(false)
	return(
		<div className="mb-[48px]">
			<header className="flex items-center">
	
		   	<div className="flex flex gap-x-4">
		   		<Image alt={data.profile.name}
		   		src={data.profile?.logoUrl? data.profile?.logoUrl:logoFallback} 
		   		width="80" 
		   		height="80" 
		   		quality={100}
		   		style={{objectFit:"cover",borderRadius:6,overflow:"hidden"}} /> 
		   		<div>
		   			<Bold>{data.profile.name}</Bold>
		   			<div className="flex gap-x-[2px] items-center ">
               		<svg style={{width:16,height:16,display:"flex",alignItems:"center"}} className="stroke-stone-500"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0">
	                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
	                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  	</svg>
	               <Text className="whitespace-nowrap text-stone-400 font-regular">
	                  {data.profile.province.value}
	               </Text> 
	               		
	     
            	</div>
            	<div className="flex gap-x-[2px] items-center ">
	               	<svg style={{width:16,height:16,display:"flex",alignItems:"center"}} className="stroke-stone-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" >
					  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
					</svg>
        			  <Text className="whitespace-nowrap text-stone-400 font-regular">Número de trabajadores: {data.profile.numberWorkers}</Text> 
	               </div>
		   		</div>
		   		
		   	</div>
		   
			</header>

			 <Divider className="my-[16px] h-px"/>
			 <div >
			 	<div className="flex gap-x-2">
					<Title>{data.title}</Title> 	
					<Badge className="self-start">{data.category.value}</Badge>
			 	</div>
			 	{/*<Legend/>*/}
				<Text className="mt-[6px]">{data.description}</Text>
				<Title className="mt-[6px]">Requisitos</Title>
				
				<Text> {data.minRequirements}</Text>
			</div>

			<div className=" fixed bottom-0 bg-white w-[30vw] px-4 py-4 flex items-center justify-center">
				<Button style={{width:"100%"}} onClick={()=>setBtn(!btn)}>{btn ? "CV Enviado ✓":"Enviar mi CV"}</Button>
			</div>
		</div>
	
		)
}
import getCoordinatesByCity from "@/services/getCoordinatesByCity"
export default function ModalInfo(props){

	const fetcher = (args):any => fetch(args,{mode:"no-cors"}).then(res => res.json())
	const { data, error, isLoading } = useSWR(`/api/getDataByID?id=${props.id}`, fetcher)
	const [zoom,setZoom] = useRecoilState(ZoomState)
	const [modal,setModal] = useRecoilState(modalState)

	useEffect(()=>{
		(async ()=> {
			if(isLoading) return;
			const city = await data.requestData.city
			const fetchData = await getCoordinatesByCity(city)
			const latitude = await fetchData[0].latitude 
			const longitude = await fetchData[0].longitude 
			return setZoom([latitude,longitude])
		})()
	},[isLoading])
	return(
		<div>
			{isLoading && <SkeletonStructure /> }
			{data && <DataOfferStructure data={data.requestData}/> }
		</div>
		)
}