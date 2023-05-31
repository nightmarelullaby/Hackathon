"use client"

import { 
   BarList, 
   BarChart,
   Card, 
   Title, 
   Flex, 
   Metric, 
   Button,
   Subtitle, 
   Bold, 
   Italic, 
   Text, 
   TabList, 
   Tab,
   ProgressBar,
   TextInput  } from "@tremor/react";
import { SearchIcon,BriefcaseIcon,GlobeAltIcon } from "@heroicons/react/solid";
//SelectBox
import { SelectBox, SelectBoxItem } from "@tremor/react";
//MultiSelectBox
import { MultiSelectBox, MultiSelectBoxItem } from "@tremor/react";
import {useEffect,useState} from "react"
import {geoJSONState} from "@/atoms/geoJSON"
import {offersState} from "@/atoms/offersState"
import {fetchDataState} from "@/atoms/fetchData"
import {PopupState} from "@/atoms/PopupState"
import {useRecoilState} from "recoil"
const categories = [
   {
      "id": 20,
      "value": "Administración Pública",
      "order": 1,
      "key": "administracion-publica"
   },
   {
      "id": 10,
      "value": "Administración de empresas",
      "order": 2,
      "key": "administracion-empresas"
   },
   {
      "id": 170,
      "value": "Atención a clientes",
      "order": 3,
      "key": "atencion-a-cliente"
   },
   {
      "id": 30,
      "value": "Calidad, producción e I+D",
      "order": 4,
      "key": "calidad-produccion-id"
   },
   {
      "id": 190,
      "value": "Comercial y ventas",
      "order": 5,
      "key": "comercial-ventas"
   },
   {
      "id": 40,
      "value": "Compras, logística y almacén",
      "order": 6,
      "key": "compras-logistica-almacen"
   },
   {
      "id": 50,
      "value": "Diseño y artes gráficas",
      "order": 7,
      "key": "diseno-artes-graficas"
   },
   {
      "id": 60,
      "value": "Educación y formación",
      "order": 8,
      "key": "educacion-formacion"
   },
   {
      "id": 70,
      "value": "Finanzas y banca",
      "order": 9,
      "key": "finanzas-banca"
   },
   {
      "id": 150,
      "value": "Informática y telecomunicaciones",
      "order": 10,
      "key": "informatica-telecomunicaciones"
   },
   {
      "id": 80,
      "value": "Ingenieros y técnicos",
      "order": 11,
      "key": "ingenieros-tecnicos"
   },
   {
      "id": 90,
      "value": "Inmobiliario y construcción",
      "order": 12,
      "key": "inmobiliario-construccion"
   },
   {
      "id": 100,
      "value": "Legal",
      "order": 13,
      "key": "legal"
   },
   {
      "id": 110,
      "value": "Marketing y comunicación",
      "order": 14,
      "key": "marketing-comunicacion"
   },
   {
      "id": 120,
      "value": "Profesiones, artes y oficios",
      "order": 15,
      "key": "profesiones-artes-oficios"
   },
   {
      "id": 130,
      "value": "Recursos humanos",
      "order": 16,
      "key": "recursos-humanos"
   },
   {
      "id": 140,
      "value": "Sanidad y salud",
      "order": 17,
      "key": "sanidad-salud"
   },
   {
      "id": 210,
      "value": "Sector Farmacéutico",
      "order": 18,
      "key": "sector-farmaceutico"
   },
   {
      "id": 160,
      "value": "Turismo y restauración",
      "order": 19,
      "key": "turismo-restauracion"
   },
   {
      "id": 200,
      "value": "Ventas al detalle",
      "order": 20,
      "key": "venta-detalle"
   },
   {
      "id": 180,
      "value": "Otros",
      "order": 21,
      "key": "otros"
   }
]
const provincesA = [
{
"parent": 17,
"key": "a-coruna",
"order": 1,
"value": "A Coruña",
"id": 28
},
{
"parent": 17,
"key": "alava",
"order": 2,
"value": "Álava",
"id": 2
},
{
"parent": 17,
"key": "albacete",
"order": 3,
"value": "Albacete",
"id": 3
},
{
"parent": 17,
"key": "alicante-alacant",
"order": 4,
"value": "Alicante/Alacant",
"id": 4
},
{
"parent": 17,
"key": "almeria",
"order": 5,
"value": "Almería",
"id": 5
},
{
"parent": 17,
"key": "asturias",
"order": 6,
"value": "Asturias",
"id": 6
},
{
"parent": 17,
"key": "avila",
"order": 7,
"value": "Ávila",
"id": 7
},
{
"parent": 17,
"key": "badajoz",
"order": 8,
"value": "Badajoz",
"id": 8
},
{
"parent": 17,
"key": "barcelona",
"order": 9,
"value": "Barcelona",
"id": 9
},
{
"parent": 17,
"key": "burgos",
"order": 10,
"value": "Burgos",
"id": 10
},
{
"parent": 17,
"key": "caceres",
"order": 11,
"value": "Cáceres",
"id": 11
},
{
"parent": 17,
"key": "cadiz",
"order": 12,
"value": "Cádiz",
"id": 12
},
{
"parent": 17,
"key": "cantabria",
"order": 13,
"value": "Cantabria",
"id": 13
},
{
"parent": 17,
"key": "castellon-castello",
"order": 14,
"value": "Castellón/Castelló",
"id": 14
},
{
"parent": 17,
"key": "ceuta",
"order": 15,
"value": "Ceuta",
"id": 15
},
{
"parent": 17,
"key": "ciudad-real",
"order": 16,
"value": "Ciudad Real",
"id": 16
},
{
"parent": 17,
"key": "cordoba",
"order": 17,
"value": "Córdoba",
"id": 17
},
{
"parent": 17,
"key": "cuenca",
"order": 18,
"value": "Cuenca",
"id": 18
},
{
"parent": 17,
"key": "girona",
"order": 19,
"value": "Girona",
"id": 19
},
{
"parent": 17,
"key": "granada",
"order": 20,
"value": "Granada",
"id": 21
},
{
"parent": 17,
"key": "guadalajara",
"order": 21,
"value": "Guadalajara",
"id": 22
},
{
"parent": 17,
"key": "guipuzcoa",
"order": 22,
"value": "Guipúzcoa",
"id": 23
},
{
"parent": 17,
"key": "huelva",
"order": 23,
"value": "Huelva",
"id": 24
},
{
"parent": 17,
"key": "huesca",
"order": 24,
"value": "Huesca",
"id": 25
},
{
"parent": 17,
"key": "illes-balears",
"order": 25,
"value": "Illes Balears",
"id": 26
},
{
"parent": 17,
"key": "jaen",
"order": 26,
"value": "Jaén",
"id": 27
},
{
"parent": 17,
"key": "la-rioja",
"order": 27,
"value": "La Rioja",
"id": 29
},
{
"parent": 17,
"key": "las-palmas",
"order": 28,
"value": "Las Palmas",
"id": 20
},
{
"parent": 17,
"key": "leon",
"order": 29,
"value": "León",
"id": 30
},
{
"parent": 17,
"key": "lleida",
"order": 30,
"value": "Lleida",
"id": 31
},
{
"parent": 17,
"key": "lugo",
"order": 31,
"value": "Lugo",
"id": 32
},
{
"parent": 17,
"key": "madrid",
"order": 32,
"value": "Madrid",
"id": 33
},
{
"parent": 17,
"key": "malaga",
"order": 33,
"value": "Málaga",
"id": 34
},
{
"parent": 17,
"key": "melilla",
"order": 34,
"value": "Melilla",
"id": 35
},
{
"parent": 17,
"key": "murcia",
"order": 35,
"value": "Murcia",
"id": 36
},
{
"parent": 17,
"key": "navarra",
"order": 36,
"value": "Navarra",
"id": 37
},
{
"parent": 17,
"key": "ourense",
"order": 37,
"value": "Ourense",
"id": 38
},
{
"parent": 17,
"key": "palencia",
"order": 38,
"value": "Palencia",
"id": 39
},
{
"parent": 17,
"key": "pontevedra",
"order": 39,
"value": "Pontevedra",
"id": 40
},
{
"parent": 17,
"key": "salamanca",
"order": 40,
"value": "Salamanca",
"id": 41
},
{
"parent": 17,
"key": "santa-cruz-de-tenerife",
"order": 41,
"value": "Santa Cruz de Tenerife",
"id": 46
},
{
"parent": 17,
"key": "segovia",
"order": 42,
"value": "Segovia",
"id": 42
},
{
"parent": 17,
"key": "sevilla",
"order": 43,
"value": "Sevilla",
"id": 43
},
{
"parent": 17,
"key": "soria",
"order": 44,
"value": "Soria",
"id": 44
},
{
"parent": 17,
"key": "tarragona",
"order": 45,
"value": "Tarragona",
"id": 45
},
{
"parent": 17,
"key": "teruel",
"order": 46,
"value": "Teruel",
"id": 47
},
{
"parent": 17,
"key": "toledo",
"order": 47,
"value": "Toledo",
"id": 48
},
{
"parent": 17,
"key": "valencia-valencia",
"order": 48,
"value": "Valencia/València",
"id": 49
},
{
"parent": 17,
"key": "valladolid",
"order": 49,
"value": "Valladolid",
"id": 50
},
{
"parent": 17,
"key": "vizcaya",
"order": 50,
"value": "Vizcaya",
"id": 51
},
{
"parent": 17,
"key": "zamora",
"order": 51,
"value": "Zamora",
"id": 52
},
{
"parent": 17,
"key": "zaragoza",
"order": 52,
"value": "Zaragoza",
"id": 53
}
]
export default function FilteringSection(){
   const [popupState,setPopupState] = useRecoilState(PopupState) 
   const [geoJSON,setgeoJSON] = useRecoilState(geoJSONState)
   const [offers,setOffers] = useRecoilState(offersState)
   const [totalResultsInCategory,setTotalResultsInCategory] = useState()
	const [currentCategory,setCurrentCategory] = useState({value:"",key:""})
	const [currentProvince,setCurrentProvince] = useState({value:"",key:""})
   const [currentQuery,setCurrentQuery] = useState("")
	const [currentData,setCurrentData] = useState(null)
   const [loading,setLoading] = useState(false)
   const [fetchData,setFetchData] = useRecoilState(fetchDataState)

   const searchDataAndSet = async (category,province,q) => {
      try{
         setLoading(true)
         setPopupState({isVisible:true,state:"loading",title:"Recalculando el mapa",description:"Aguarda un momento..."})
         const requestData = await fetch(`api/getData?category=${category}&q=${q}&province=${province}&facets=true`,{
            mode:"no-cors"
         })  
         const formatedData = await requestData.json() 

         const {facets} = await formatedData.requestData
         setFetchData(formatedData.requestData)

         const [provincesCount]= facets.filter(facet => facet.key === "province")

         const newFeatures = geoJSON.features.map((feature,index) => {
            const [provinceData] = provincesCount.values.filter(e => e.value === feature.properties.name)
            return {...feature,properties:{...feature.properties,population:provinceData?.count}}
         })
         let prevgeo = {...geoJSON}
         prevgeo.features = newFeatures

         setgeoJSON(prevgeo)
         setOffers(formatedData.requestData.offers)
         setPopupState({isVisible:true,state:"success",title:"Todo salió bien",description:"Los resultados se renderizaron correctamente"})
         return setLoading(false)

      }catch(e){
         setPopupState({isVisible:true,state:"error",title:"Algo salió mal",description:"No se pudo completar la acción..."})
         return setLoading(false)
         
      }
      
      
      
      
   }
      
	return(<div className="flex flex-col">
		
      <Flex>
      <TextInput className="rounded-l-full " onChange={(e)=>setCurrentQuery(e.target.value)}  icon={BriefcaseIcon} placeholder="Desarrollador web, Contador, Gerente de ventas..."/> 
      <SelectBox 
         icon={GlobeAltIcon}
         placeholder="Valencia, Madrid, Barcelona..."
         defaultValue={currentProvince?.key}
         style={{borderRadius:0}}
         className="[&>.tremor-SelectBox-root]:rounded-none [&>.tremor-SelectBox-root]:border-l-0 [&>.tremor-SelectBox-root]:border-r-0"
         onValueChange={(value) => {
            const [filter] = provincesA.filter(e => e.key === value)
            return setCurrentProvince({
            value:filter.value,
            key:filter.key})}}>
            <SelectBoxItem  value="" text={`Toda España`}></SelectBoxItem>
            {provincesA.map(e => (<SelectBoxItem  key={e.key}  value={e.key} text={`${e.value}`}></SelectBoxItem>))}
      </SelectBox>
      <Button 
               className="bg-blue-500 rounded-l-none rounded-r-full"
               // style={{marginLeft:"8px"}} 
               loading={loading} 
               // disabled={!currentProvince.key & !currentCategory.key }
               onClick={()=>searchDataAndSet(currentCategory.key,currentProvince.key,currentQuery)}>
                  Buscar
            </Button>
  </Flex>
<div style={{alignSelf:"end"}}>
  <Text className="mt-3 mb-2 text-start">Categoría</Text>
  <SelectBox 

  className="ml-auto"
  // icon={AdjustmentsVerticalIcon}
  onValueChange={(value) => {
  	const [filter] = categories.filter(e => e.key === value)
  	return setCurrentCategory({
      value:filter.value,
      key:filter.key})
  }}

  defaultValue={currentCategory.key}>
   <SelectBoxItem  value="" text="Ninguno"></SelectBoxItem>
  {categories.map(e => <SelectBoxItem key={e.key} value={e.key} text={`${e.value}`}></SelectBoxItem>)}
  </SelectBox>
  </div>
</div>
)}