import {useState} from "react";
import {Card, Button, Input} from "@mui/material";
import tripAdvisor from '../../../public/svgviewer-output.svg'
import hunger from '../../../public/HungerStationLog.svg'
import map from '../../../public/mapsLogo.svg'
import playStore from '../../../public/playstore-svgrepo-com.svg'
import apple from '../../../public/AppStoreLogo.svg'
import amazon from '../../../public/amazon.svg'
import zidApp from '../../../public/app-zid.svg'
import mosafer from '../../../public/alm-logo.svg'
import sallah from '../../../public/salla.svg'
type Props ={
    action:(url:string)=>void,
}



export const SearchBar = (props:Props)=>{
const [url,setURL]=useState('')
    return <div style={{width:'50vw',display:'flex',flexDirection:'column',marginTop:60}}>
        <Card style={{padding:20,display:'flex',}}>

        <Input fullWidth={true}
            disableUnderline={true}
                 placeholder={'Text Here'}
                 style={{borderWidth:0,borderColor:'transparent',flex:1}} onChange={(event)=>setURL(event.target.value)}/>
            <Button style={{width:'10vw'}} variant="contained" onClick={()=>props.action(url)}>search</Button>

        </Card>
        <div  style={{display:'flex',justifyContent:'space-between',width:'20vw',alignSelf:'end',marginTop:20}}>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center'}}><img style={{width:35,height:35}} src={tripAdvisor} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}>  <img style={{width:25,height:25}} src={hunger} className="App-logo" alt="logo" />    </Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}><img style={{width:25,height:25}} src={map} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}> <img style={{width:25,height:25}} src={playStore} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}><img style={{width:25,height:25}} src={apple} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}> <img style={{width:25,height:25}} src={amazon} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}> <img style={{width:35,height:35}} src={zidApp} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}> <img style={{width:25,height:25}} src={mosafer} className="App-logo" alt="logo" /></Card>
            <Card style={{height:35,width:35,display:'flex',justifyContent:'center',alignItems:'center'}}> <img style={{width:25,height:25}} src={sallah} className="App-logo" alt="logo" /></Card>

        </div>
        </div>




}