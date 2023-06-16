import { useState } from 'react'
import './App.css'
import {TopBar} from './components/topBar'
import {Title} from './components/title'
import {SearchBar} from './components/serchBar'
import {Response} from './components/response'
import {Plan} from './components/plan'
import axios from "axios";
import mySvg from '../public/background.svg'
import {Typography} from "@mui/material";
import {Tools} from "./components/tools";

const plans=[
    {price:'0 SAR',paymentType:'MONTHLY', name:'Free',features:[{feet:'3 Summary Requests',enabled:true},{feet:'Access to Amazon',enabled:true},{feet:'Data Visualization',enabled:false},{feet:'Suggesting Alternatives',enabled: false},{feet:'Exporting Data to Your Email',enabled:false}]},
    {price:'49 SAR',paymentType:'MONTHLY', name:'Professional',features:[{feet:'10 Summary Requests',enabled:true},{feet:'Access to Amazon',enabled:true},{feet:'Data Visualization',enabled:false},{feet:'Suggesting Alternatives',enabled: false},{feet:'Exporting Data to Your Email',enabled:false}]},
    {price:'Contact US',paymentType:'', name:'Enterprise',features:[{feet:'Ultimate Summary Requests',enabled:true},{feet:'Access to All Resources',enabled:true},{feet:'Data Visualization',enabled:true},{feet:'Suggesting Alternatives',enabled: true},{feet:'Exporting Data to Your Email',enabled:true}]}]
function App() {
  const [response, setResponse] = useState('')
  const [loading,setLoading]=useState(false)
    const getEvaluation = async (url:string) => {
    try {
        console.log('here is the url ',url)
        setLoading(true)
        if (!url.includes("amazon.com") || !url.includes("/dp/")) {
          setResponse("Please Enter A Valid URL");
          return;
        }
        setResponse("analyzing the product...");
        const results = await axios.post(
            "https://summarizex.herokuapp.com/summarize_ex",
            {
              url: url,
              other_param: "",
            },
            {
              headers: {
                "Access-Control-Allow-Headers": "*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              },
            }
        );
        console.log("here response", results);
        setLoading(false)
        setResponse(results.data?.summary);

    } catch (e) {
        setLoading(false)
      setResponse(JSON.stringify(e));
    }
  };

  return (
    <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundImage: `url(${mySvg})`,backgroundSize:'cover',paddingBottom:'10vh'}}>
      <TopBar/>
        <Title>Insert The Product Link Below then Click Send!</Title>
      <SearchBar action={getEvaluation}/>
        { response!==''&&<Response isLoading={loading}>
            {response}
        </Response>}
      <div>
          <Tools/>
        <Typography style={{marginBottom:'7vh',marginTop:'5vh'}} fontSize={'50px'} color={'whit'}>Plans</Typography>
<div style={{display:"flex",width:'65vw',justifyContent:'space-between',}}>
          {plans.map(element=><Plan paymentType={element.paymentType} name={element.name} price={element.price} features={element.features} action={()=>console.log('You Selected : '+element.name+' package')}/>)}
</div>
      </div>
    </div>
  )
}

export default App
