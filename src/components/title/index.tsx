import {Typography} from "@mui/material";

type Props ={children:string}

export const Title = (props:Props)=>{
    return <Typography style={{width:'50vw'}} fontSize={60} >{props.children}</Typography>
}