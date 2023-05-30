"use client"
import Navbar,{NavbarElement} from "@/components/Navbar"
import Image from "next/image"

import {Title, Flex, Metric, Subtitle, Bold, Italic, Text, TabList, Tab,ProgressBar } from "@tremor/react";
import Button from "@/components/Button"
export default function NavbarLayout({children}){
	return(<div>
		<Navbar>
			<NavbarElement style={{flexGrow:1,flexBasis:0}}className="grow basis-0">
					<Image alt="InfoJobs Logo" width="100" height="100" src="https://media.infojobs.net/portales/ij/appgrade/svgs/ij-logo-default_primary.svg"/>
			</NavbarElement>

			<NavbarElement>
				<Text>Buscar empleo</Text>
			</NavbarElement>
			<NavbarElement>
				<Text>Buscar empresas</Text>
			</NavbarElement>
			<NavbarElement>
				<Text>Salarios</Text>
			</NavbarElement>
			<NavbarElement>
				<Text>Salarios</Text>
			</NavbarElement>
			<div style={{flexGrow:1,flexBasis:0,gap:8,display:"flex",justifyContent:"end"}}>
				<NavbarElement>
					<Button rounded>
						Empresas
					</Button>
				</NavbarElement>
				<NavbarElement>
					<Button>
						Candidatos
					</Button>
				</NavbarElement>
			</div>
		</Navbar>
		{children}
	</div>
		
		)
}