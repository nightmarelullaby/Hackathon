import getColor from "./getColor"

const style = (feature)=>{
    console.log("executed")
    return {
        fillColor: getColor(feature.properties.population),
        weight: .5,
        opacity: 1,
        color: 'orangered',
        dashArray: '3',
        fillOpacity: 0.4
    };}
export default style