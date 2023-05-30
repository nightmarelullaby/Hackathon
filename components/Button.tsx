export default function Button (props:any){
	return(<>
		{props.rounded ? (<button className="bg-[#2088C2] flex items-center justify-center gap-x-[2px] px-4 py-2 rounded-full" {...props}>
			{props.icon? props.icon:null}
			<small className="text-white  font-medium" >{props.children}</small>
		
		</button>):
		(<button  className="group/btn transition flex items-center justify-center gap-x-[2px] hover:bg-black border px-4 py-2 rounded-full border-gray-300" {...props}>
			{props.icon? props.icon:null}
			<small className="text-gray-800 font-semibold transition group-hover/btn:text-white">{props.children}</small>
		</button>)}
		</>)
}