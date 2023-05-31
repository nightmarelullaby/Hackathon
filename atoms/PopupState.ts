import {atom} from "recoil"

export const PopupState = atom({
	key:"popup",
	default:{isVisible:false,state:"success",title:"",description:"default"}
})