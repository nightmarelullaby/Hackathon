"use client"
import Image from 'next/image'
import {MapContainer,TileLayer,Marker,Popup,ZoomControl,GeoJSON,FeatureGroup} from "react-leaflet"
import {useState,useRef,useEffect} from "react"
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import style from "@/utils/style"
import ProvincesLayer from "@/components/ProvincesLayer"
import "./Legend.css"
import {RecoilRoot} from "recoil"

import { 
  BarList, 
  BarChart,
  Divider,
  Card, 
  Title, 
  Flex, 
  Metric, 
  Badge,
  Subtitle, 
  Bold, 
  Italic, 
  Text, 
  TabList, 
  Tab,
  ProgressBar } from "@tremor/react";
import FilteringCard from "@/components/FilteringCard"
import HeroImage from "public/HeroImage.png"
import {Plus_Jakarta_Sans} from 'next/font/google'
import Button from "@/components/Button"
import BgBlur from "public/BgBlur.png"
import ListOffers from "@/components/ListOffers"
import CustomMarker from "@/components/CustomMarker"
const PlusJakartaSans = Plus_Jakarta_Sans({subsets: ['latin'], weight: ['400','200','300','500','600'],})
import {geoJSONState} from "@/atoms/geoJSON"
import {useRecoilState} from "recoil"
import {offersState} from "@/atoms/offersState"
import Legend from "../components/Legend"

const companies = [
  {
    name:"Coca Cola Europacif Partners",
    location:"Madrid, España",
    logo:"https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/f8/f8f0ca78-5798-40b9-aa6a-f6c2c830b506?rule=largeDevice155&rule=smallDevice95",
    description:"Una marca icónica con un sinfín de oportunidades.",
    offers:4,
    href:"https://cocacola.ofertas-trabajo.infojobs.net/"
},
 {
    name:"Grupo Santander",
    location:"Madrid, España",
    logo:"https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/db/dba86288-18af-400f-8d78-3784128713cf?rule=largeDevice155&rule=smallDevice95",
    description:"Nuestra misión: Contribuir al progreso de las personas y de las empresas  ¿Nos ayudas a conseguirlo?",
    offers:2,
    href:"https://cocacola.ofertas-trabajo.infojobs.net/"
},
 {
    name:"Repsol",
    location:"Madrid, España",
    logo:"https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/5a/5a1bf6fd-1421-453f-b714-f1766bb76349?rule=default&rule=smallDevice95",
    description:"Compañía energética integrada y global que desarrolla actividades de Upstream y Downstream.",
    offers:2,
    href:"https://cocacola.ofertas-trabajo.infojobs.net/"
},
 {
    name:"OHLA",
    location:"Madrid, España",
    logo:"https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/4a/4a8791bf-dcdd-4f26-8c9f-12603b811b20?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjU1ODg5MTQsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy80YS80YTg3OTFiZi1kY2RkLTRmMjYtOGM5Zi0xMjYwM2I4MTFiMjAiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.PHostXu8xX3-Y62FQbGkA1KPzIR6ftODDOZzo6hxNp2NHpTCddP--CiJhL-jB7Ccklrp7lv0yEQ1evM3R18C53iqIhhG0wAg_wZDJ9031dpYYatxXI2RLOwlsbWTAHvbDLyrXwrExEvTG18Yf7AStZPTzN9WqBlQq5-uKmItsTvIvjGLwxYppFrOfuM3fZXqwfb5SGDsGuXmF-QIsqPiUE2EV2D_zOR4ihpx0ocveWBdWIve0feVzTlWF1kTDjRjdVEaA2iwP9llo6G5_8IpaNFLSWCThBJoWpOa0tAF5kyu_icdoJVoBbslUy5_qSosKUrVBIpIY8ILsDBfxG8mdw&AccessKeyId=d724d9a53d95a810",
    description:"Talento, innovación y excelencia definen cada uno de los proyectos que OHLA lleva a cabo.",
    offers:21,
    href:"https://grupo-ohl.ofertas-trabajo.infojobs.net/"
},]
import {Suspense} from "react"
import AutoZoom from "@/components/AutoZoom"


export default function Home() {
  const [offers,setOffers] = useRecoilState(offersState)
  const [geoJSON,setgeoJSON] = useRecoilState(geoJSONState)

  const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString();
  };
  return (
          <main style={{position:"relative"}} className="mt-8 flex flex-col items-center gap-x-4" >
           <section style={{margin:"48px 130px 48px 130px"}} className="flex gap-x-6 items-center">
              <h1 style={PlusJakartaSans.style} className="text-[#181B1E] text-6xl leading-13 font-black">Encuentra los mejores <mark style={{background:"none",fontFamily:"inherit"}} className="text-blue-600">empleos.</mark> Contrata a los candidatos ideales</h1>
              <Image src={HeroImage} alt="Girl with laptop"width="350" height="350"/>
              <Image src={BgBlur} alt="Blur background" width="502" height="788" style={{position:"absolute",left:-80,top:-100,zIndex:-1}}/> 
            </section>

            <section  style={{margin:"48px 0 48px 0",padding:"0 130px"}} className="w-full py-8">
              <FilteringCard />
              <div className="mt-4">
                <div className="flex gap-x-[4px]">
                  <Title>Búsqueda con geolocalización</Title>
                  <Badge size="xs" color="green">Nuevo</Badge>
                </div>
                <Text>Busca empleos y localizalos en el mapa.</Text>
              </div>
              <div className="mt-4 gap-x-4" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                <MapContainer 
                  zoomControl={false}
                  style={{borderRadius:6,overflow:"hidden",minWidth:"100%",height:600}} 
                  center={[40.2085, -3.713]} 
                  zoom={4.8} 
                  scrollWheelZoom={true}>
                  <AutoZoom /> 
                  <CustomMarker/>
                <TileLayer
                  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                />

   
                <ZoomControl 
                  zoomInText={`<div style="display:flex;align-items:center;justify-content:center;height:100%;"><svg style="width:16px;height:16px;"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></div>`} 
                  zoomOutText={`<div style="display:flex;align-items:center;justify-content:center;height:100%;"><svg style="width:16px;height:16px;"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" /></svg></div>`}/>
           

                <Legend />
                <ProvincesLayer /> 
                </MapContainer>
                <Suspense fallback={<p>Loading...</p>}>
                  <ListOffers className="grow h-[600px] overflow-scroll p-[4px]" data={offers}/> 
                </Suspense>
              </div>

          </section>
          <Divider style={{margin:"48px 130px 0 130px"}} className="h-px"/>
        <section style={{margin:"48px 130px 0 130px"}} >
            <Metric className="text-center">Trabaja con empresas líder en el mercado</Metric>
            <Subtitle className="text-center">Revisa los perfiles de las empresas top de España</Subtitle>
            <div className="flex gap-x-4 mt-6">
              {companies.map(company => 
                (<Card className=" group/card cursor-pointer hover:shadow overflow-hidden px-6">
                  <a target="_BLANK">
                  <div className="flex flex-col gap-x-6 items-start relative">
                    <Image alt={company.name}width="45" height="45" style={{borderRadius:4,overflow:"hidden"}} quality={100} src={company.logo}/>
                    <div>
                      <Title className="whitespace-nowrap">{company.name.length > 20 ? company.name.slice(0,18) + " ...":company.name}</Title>  
                      <Text>{company.location}</Text>
                    </div>
                     <svg  className="absolute right-0 w-4 h-4 stroke-gray-400 transition group-hover/card:stroke-black group-hover/card:translate-x-[3px] group-hover/card:translate-y-[-3px]"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                  </div>
                  <Divider className="mt-4 mb-4 h-px" /> 
                  <Text >{company.description.slice(0,60)}...</Text>
                  <Button style={{width:"100%",marginTop:16}}>{company.offers} ofertas disponibles</Button>
                  </a>
                </Card>)
                )}  
              </div>
            </section>
          </main>

  )
}
