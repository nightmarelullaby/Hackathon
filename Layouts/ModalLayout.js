"use client"

import {modalState} from "@/atoms/modalState"
import {useRecoilState} from "recoil"
import {PopupState} from "@/atoms/PopupState"	
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
import Popup from "@/components/Popup"
export default function ModalLayout({children}){
	const [modal,setModal] = useRecoilState(modalState)
	const [popupState,setPopupState] = useRecoilState(PopupState) 
	const handleModalAndPopup = () => {
		setModal(!modal)
		return setPopupState({...popupState,isVisible:false})
	}
	const openModal = {padding:24,overflowY:"auto",zIndex:100000,transition:".15s ease",right:0,borderTopLeftRadius:16,borderBottomLeftRadius:16,boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",position:"fixed",width:"35%",height:"100vh",bottom:0}
	const closedModal = {padding:24,overflowY:"auto",transition:".15s ease",pointerEvents:"none",opacity:0,translate:"4px 0",right:0,borderTopLeftRadius:16,borderBottomLeftRadius:16,boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",position:"fixed",width:"35%",height:"100vh",bottom:0}

	const openBg = {transition:".15s ease",width:"100%",height:"100vh",position:"fixed",top:0,opacity:.2}
	const closedBg = {transition:".15s ease",width:"100%",height:"100vh",position:"fixed",top:0,opacity:0,pointerEvents:"none"}

	return(
		<>
			<div className="relative">
				{children}
				<div style={modal|| modal.length<=0?openBg:closedBg} className="bg-neutral-600"></div>
				<Popup />
				<div style={modal|| modal.length<=0?openModal:closedModal} className="bg-white">
			
				    <header style={{position:"fixed",}}className="top-0 w-full py-4 bg-white border-b-[1px] border-solid border-slate-100">
					    <button style={{cursor:"pointer"}} onClick={handleModalAndPopup}>
							<svg style={{width:32,height:32}} className="stroke-stone-500 transition hover:stroke-stone-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.7" >
						  		<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</header>

					<main style={{marginTop:48}}>
						{modal}
					</main>
					

				</div>
			</div>
		</>
		)
}