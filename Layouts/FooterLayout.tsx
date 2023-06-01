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
export default function FooterLayout({children}){
	return(
		<>
			{children}
			<footer className="border border-1 border-slate-300 mt-6 bg-slate-50 flex items-center px-4"style={{height:120}}>
			   <Text className="text-slate-400">— Hecho por NightmareLullaby <mark className="bg-transparent text-red-400">♥</mark></Text>

			</footer>	
		</>
		)
}