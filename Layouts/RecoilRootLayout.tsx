"use client"
import {RecoilRoot} from "recoil"
export default function RecoilRootLayout({children}){
	return(<div>
		<RecoilRoot>
			{children}
		</RecoilRoot>
	</div>)
}