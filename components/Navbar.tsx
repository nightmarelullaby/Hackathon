export function NavbarElement (props){
	return(<li {...props}>{props.children}</li>)
}

export default function Navbar(props){
	return(
		<header {...props}>
			<nav className="shadow-sm w-full z-50 ">
				<ul style={{margin:"0 130px 0 130px"}}className=" flex py-5 items-center gap-x-4">
					{props.children}
				</ul>
			</nav>
		</header>)
}
