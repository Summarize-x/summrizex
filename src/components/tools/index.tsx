import { CardActions, Typography} from "@mui/material";
import whattsup from '../../../public/WhatsApp-Logo.wine.svg'
import extension from '../../../public/extensition.svg'


export const Tools= ()=>{

    return (<div style={{alignSelf:'center',borderRadius:15,paddingTop:20,marginTop:60}}>
        <Typography  style={{fontSize:40}}>Download</Typography>
        <CardActions style={{justifyContent:'center'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <img style={{width:130,height:130}} src={whattsup} className="App-logo" alt="logo" />

            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <img style={{width:100,height:100}} src={extension} className="App-logo" alt="logo" />

        </div>
        </CardActions>

    </div>)
}
