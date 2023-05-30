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
			<footer className="mt-6 bg-slate-100 flex items-center px-4"style={{height:120}}>
			   <Text className="text-slate-400">— Hecho por NightmareLullaby ♥</Text>

			</footer>	
		</>
		)
}