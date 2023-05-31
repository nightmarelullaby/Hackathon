import {useRecoilState} from "recoil"
import {offersState} from "@/atoms/offersState"
import Button from "@/components/Button"
import { 
   BarList, 
   BarChart,
   Card, 
   Title, 
   Flex, 
   Metric, 
   Divider,
   Subtitle, 
   Bold, 
   Italic, 
   Text, 
   TabList, 
   Tab,
   ProgressBar,
   TextInput,
   Badge,
   BadgeDelta, Button as ButtonTremor  } from "@tremor/react";

import {MapIcon} from "@heroicons/react/solid";
import Image from "next/image"
const logoFallback = "https://components.infojobs.com/statics/images/pic-company-logo.png"
import {modalState} from "@/atoms/modalState"
import {fetchDataState} from "@/atoms/fetchData"
import ModalInfo from "@/components/ModalInfo"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ListOffers(props){
   const [modal,setModal] = useRecoilState(modalState)
   const [fetchData,setFetchData] = useRecoilState(fetchDataState)
	return(
      <section style={{minWidth:700}}>
      {/*{fetchData.queryParameters?.query !== "" ? <Metric className="mb-4">Resultados para "{fetchData.queryParameters.query}"</Metric>:null}*/}
      <Title>Resultados para: <mark className="bg-transparent text-gray-400">{fetchData.queryParameters?.query}</mark></Title>
      <Badge className="mb-4" size="sm"color="gray"><Text className="text-neutral-500">{"Mostrando "+ fetchData.currentResults +" de "+fetchData.totalResults+ " resultados"}</Text></Badge>
      {console.log(fetchData)}
      <div style={{width:"100%",display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))"}} {...props} >
      {props.data.map(e =>(
      // <div >
      <Card key={e.key} className="shadow-[rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px] border-4 border-neutral-50 ">

      <a href={e.author.uri} target="_BLANK">
          <div className="group/card relative flex justify-between items-start mb-2">
               <Image alt={e.author.name}src={e.author.logoUrl? e.author.logoUrl:logoFallback}width="60" height="60" quality={100}style={{objectFit:"cover",borderRadius:6,overflow:"hidden"}} /> 
                  {e.urgent ? 
                     (<Badge size="xs" icon={MapIcon}>
                        Urgente
                     </Badge>) 
                  : null}
                  <svg  className="absolute right-0 w-4 h-4 stroke-gray-400 transition group-hover/card:stroke-black group-hover/card:translate-x-[3px] group-hover/card:translate-y-[-3px]"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
               
          </div>
          </a>
         <Text className="text-[#666] whitespace-nowrap mb-[2px]">{e.author.name.slice(0,25)}</Text>
         <div className="group/info cursor-poiner">
		    <Title className="text-stone-800 group-hover/info:underline">{e.title}</Title>

         <Divider className="h-px my-3" /> 
         <div className="flex gap-x-4 mb-2 items-center">
            <div className="flex gap-x-[2px] items-center ">
               <svg style={{width:16,height:16,display:"flex",alignItems:"center"}} className="stroke-stone-500"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
               <Text className="whitespace-nowrap text-stone-500 font-semibold">
                  {e.province.value}
               </Text>  
            </div>
            <div className="flex gap-x-[2px] items-center" >
               <svg style={{width:16,height:16,display:"flex",alignItems:"center"}} className="stroke-stone-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" >
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <Text className="whitespace-nowrap text-stone-500 font-semibold">{e.contractType.value}</Text>
            </div>
         </div>
          <div className="mb-2 flex gap-x-[2px] items-center">
            <svg style={{width:16,height:16,display:"flex",alignItems:"center"}} className="stroke-stone-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" >
               <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>   
            <Bold className="text-stone-800">{e.salaryDescription}</Bold>
         </div>
         <ul className="mb-[2px] flex gap-x-2">
            <li>
               
            </li>
            <li>
               <Text className="whitespace-nowrap mb-2">{e.teleworking?.value}</Text>
            </li>
         </ul>
        </div>
        <div className="flex gap-x-[4px]">
         <Button style={{width:"100%",marginTop:"auto"}} onClick={()=>setModal(<ModalInfo id={e.id}/>)}>Aplicar</Button>
         </div>
       </Card>
       // </div>
       ))}

	</div>
   </section>
)}