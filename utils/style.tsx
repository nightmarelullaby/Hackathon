import getColor from "./getColor"

const style = (feature)=>{
    return {
        fillColor: getColor(feature.properties.population),
        weight: .5,
        opacity: 1,
        color: 'orangered',
        dashArray: '3',
        fillOpacity: .3
    };}
export default style