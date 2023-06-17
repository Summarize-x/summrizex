import {Card,Typography,CircularProgress,List,ListItem,ListItemText} from "@mui/material";

type Props ={
    summary:string
    isLoading:boolean
    pros:string[]
    cons:string[]
}


export const Response =(props:Props)=>{

    return(<Card style={{minHeight:'20vh',width:'50vw',marginTop:60,marginBottom:60,padding:20}}>
        {props.isLoading? <>
            <Typography  color={'black'}>{props.summary}</Typography>
            <CircularProgress/>

        </>:
        <>

        <Typography  style={{fontSize:25,marginBottom:30}} color={'black'}>Summary</Typography>
        <Typography  color={'black'}>{props.summary}</Typography>
        {props.pros.length!==0&&<>
            <Typography style={{fontSize:25,marginTop:20}} color={'black'}>Advantages</Typography>
                 <List >
                     {props.pros.map(element=><ListItem>
                    <ListItemText
                        primary={element}
                    />
                </ListItem>)}
        </List></>}
        {props.cons.length!==0&&<>
            <Typography  style={{fontSize:25,}} color={'black'}>Disadvantages</Typography>
            <List >
                {props.cons.map(element=><ListItem>
                    <ListItemText
                        primary={element}
                    />
                </ListItem>)}
            </List></>}
        </>}
    </Card>)
}