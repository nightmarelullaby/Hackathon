import {PopupState} from "@/atoms/PopupState"
import { Ring } from '@uiball/loaders'
import {useRecoilState} from "recoil"
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
import {useEffect} from "react"
export function LoadingState(){
	const [popupState,setPopupState] = useRecoilState(PopupState) 
		useEffect(() =>{
		const timer = setTimeout(() => {
			return setPopupState({...popupState,description:"Está tardando más de lo normal..."})
		},6000)
		return ()=> clearTimeout(timer)
	},[popupState])
	return(
		<div className="flex gap-x-2 items-center">

        	<Ring 
			 size={35}
			 lineWeight={1}
			 speed={2} 
			 color="#f1f5f9"/>	
			 <div className="flex flex-col ">
				 <Bold 
				  	className="text-slate-200">{popupState.title}
			  	</Bold>
				<Text 
					className="text-slate-300">{popupState.description}
				</Text>
			</div>
		</div>)
}
export function Succesfull(){
	const [popupState,setPopupState] = useRecoilState(PopupState) 
	useEffect(() =>{
		const timer = setTimeout(() => {
			return setPopupState({...popupState,isVisible:false})
		},3000)
		return ()=> clearTimeout(timer)
	},[popupState])
	return(
			<div className="flex gap-x-2 items-center">

        	<svg className="stroke-slate-300 stroke-[.8]" style={{height:32,width:32}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
  			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
		</svg>
			 <div className="flex flex-col ">
				 <Bold 
				  	className="text-slate-200">{popupState.title}
			  	</Bold>
				<Text 
					className="text-slate-300">{popupState.description}
				</Text>
			</div>
		</div>
		
)
}
export function Error(){
	const [popupState,setPopupState] = useRecoilState(PopupState) 
	useEffect(() =>{
		const timer = setTimeout(() => {
			return setPopupState({...popupState,isVisible:false})
		},3000)
		return ()=> clearTimeout(timer)
	},[popupState])
	return(
			<div className="flex gap-x-2 items-center">
		<svg className="stroke-slate-300 stroke-[.9]" style={{height:32,width:32}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
		</svg>

			 <div className="flex flex-col ">
				 <Bold 
				  	className="text-slate-200">{popupState.title}
			  	</Bold>
				<Text 
					className="text-slate-300">{popupState.description}
				</Text>
			</div>
		</div>
		
)
}
export default function Popup(){
	const [popupState,setPopupState] = useRecoilState(PopupState) 
	const PopUpVisibleClass = "fixed duration-200 transition opacity-100 shadow-2xl left-8 translate-y-0 rounded-md bottom-8 w-fit bg-slate-900/[.8] backdrop-blur-sm " 
	const PopUpNoVisibleClass = "transition duration-200 opacity-0 pointer-events-none fixed shadow-2xl left-8 translate-y-[4px] rounded-md bottom-8 w-fit bg-slate-900/[.8] backdrop-blur-sm " 

	return(
		<div className={popupState.isVisible? PopUpVisibleClass:PopUpNoVisibleClass} style={{padding:"16px 24px",zIndex:2000000}}>
			 {popupState.state === "loading" && <LoadingState/>}
			 {popupState.state === "success" && <Succesfull/>}
			 {popupState.state === "error" && <Error/>}
		</div>
		)
}