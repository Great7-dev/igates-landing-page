import React from "react"
import { Workedstyle } from "./workedStyle"
import Logo from "../../assets/Group1.svg"
import Logo2 from "../../assets/goe.svg"
import Logo3 from "../../assets/coa.svg"
import Logo4 from "../../assets/Group3.svg"
import Logo5 from "../../assets/eXMARKTECHNOLOGIES.svg"
import Logo6 from "../../assets/Group4.svg"
import Logo7 from "../../assets/npm.svg"
import Logo8 from "../../assets/Group5.svg"
import Logo9 from "../../assets/sapphire.svg"

const Worked = () => {
   return (
    <Workedstyle id="clients">
      <div >
        <h1 className="wrk-text">Who We’ve Worked For?</h1>
      </div>
      <div className="first-line">
      <img src={Logo} alt="uni"/>
      <div>
      <p className="text1">GODFREY OKOYE UNIVERSITY</p>
      <p className="text2">Deployment of the Payroll Officer for biometric verification and <br/>
      payment of staff.</p>
      </div>
      <img src={Logo2} alt="uni2"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      </div>
      <div className="first-line">
      <img src={Logo} alt="uni"/>
      <div>
      <p className="text1">ENUGU STATE GOVERNMENT</p>
      <p className="text2">Modified and Deployed iGates Payroll Officer for Enugu <br/> State Government Parastatals.</p>
      </div>
      <img src={Logo3} alt="uni2" className="coa"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      </div>
      <div className="first-line">
      <img src={Logo4} alt="uni"/>
      <div className="exmark">
      <p className="text1">EXMARK TECHNOLOGIES</p>
      <p className="text2">Design and Deployment of a Web based HR solution.</p>
      </div>
      <img src={Logo5} alt="uni2" className="coa2"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      </div>
      <div className="first-line">
      <img src={Logo6} alt="uni"/>
      <div>
      <p className="text1">NIGERIAN PRINTING AND MINTING</p>
      <p className="text2">Systems Architecture Design for NSPM Procurement System.</p>
      </div>
      <img src={Logo7} alt="uni2" className="coa3"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      </div>
      <div className="first-line">
      <img src={Logo8} alt="uni"/>
      <div>
      <p className="text1">SAPPHIRE MEDICALS</p>
      <p className="text2">Systems Architecture Design for NSPM Procurement System.</p>
      </div>
      <img src={Logo9} alt="uni2" className="coa4"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
      </div>
    </Workedstyle>
   )
}

export default Worked