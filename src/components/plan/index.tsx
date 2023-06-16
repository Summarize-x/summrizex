import {
    Card,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    CardHeader,
    CardActions,
} from '@mui/material';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import './index.css'
export type Props = {
    name:string,
    price:string,
    features:Array<{feet:string,enabled:boolean}>
    action:()=>void,
    paymentType:string
}



export const Plan =(props:Props)=>{

    return <Card  className={'card'}>
        <CardHeader style={{marginBottom:0,paddingBottom:0}} title={props.name} color={'black'}>props.name</CardHeader>
        <CardHeader  style={{marginTop:0}} title={props.price}  subheader={props.paymentType} color={'black'}>props.name</CardHeader>

        <List>
            {props.features.map((element,index)=>
                <ListItem style={{backgroundColor:index%2!=0?'#dde4f0':'transparent',borderRadius:5}}>
                    <ListItemIcon style={{marginRight:0,paddingRight:0}}>
                        {element.enabled?  <DoneSharpIcon  color={'info'}/>:<CloseSharpIcon color={'error'}/>}
                    </ListItemIcon>
                    <ListItemText

                        color={'black'}
                        primary={element.feet}

                    />
                </ListItem>
            )}

        </List>

        <CardActions style={{ marginTop: "auto" }}>
            <Button fullWidth={true} variant="outlined" color={'primary'} onClick={props.action}>Choose</Button>
        </CardActions>
    </Card>
}