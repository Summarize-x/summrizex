import {TypeAnimation} from "react-type-animation";
import {Card,Typography,CircularProgress} from "@mui/material";

type Props ={
    children:string
    isLoading:boolean
}


export const Response =(props:Props)=>{
    return(<Card style={{minHeight:'20vh',width:'50vw',marginTop:60,marginBottom:60}}>
        <Typography color={'black'}>{props.children}</Typography>
        {props.isLoading&&<CircularProgress/>}
    </Card>)
}