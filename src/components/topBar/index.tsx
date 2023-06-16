import logo from '../../../public/logo.svg'
import './index.css'



export const  TopBar = ()=>{
    return(<div className={'top-bar-container'}>
        <img  width={200} height={200} src={logo} className="App-logo" alt="logo" />
        <div style={{display:"flex",paddingRight:'3vw',width:'8vw',justifyContent:'space-between',alignItems:'center'}}>
        <p style={{fontSize:20}}>
            about us
        </p>
        <p style={{fontSize:20}}>
            help
        </p>
        </div>

    </div>)
}
