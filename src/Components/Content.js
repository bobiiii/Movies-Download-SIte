import react from "react"
import Hollywood from "./Hollywood"
import DubbedMov from "./DubbedMov"
import DubbedTVS from "./DubbedTVS"
import Bollywood from "./Bollywood"
import "./Content.css"
const Content =()=>{
return(<div className="content">

<Hollywood/>
<DubbedMov/>
<DubbedTVS/>
<Bollywood/>

</div>)
}
export default Content;