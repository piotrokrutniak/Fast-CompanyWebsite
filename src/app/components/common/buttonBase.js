export default function ButtonBase({...props}){
    return(
        <button className={`${props.className} ${props.color ?? "bg-sky-500"} py-3 px-4 rounded-lg font-semibold active:opacity-80 flex items-center gap-2 whitespace-nowrap transition-all`} 
            onClick={props.onClick}>
            {props.text} {props.icon ?? ""}
        </button>
    )
}