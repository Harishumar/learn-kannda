import React,{useEffect, useState} from 'react';
import Link from "../../re-useable/link"
import {mapping,mappHindi } from "../../../images";
function App() {
const [pic,setPIC]=useState(mapping[0]);
const [show,setShow]=useState(false);
let key=Object.keys(pic)[0];
let question=(<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
  <h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'9px 20px'}}>{key}</h1>
  <h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'0px 32px'}}>{mappHindi[key]}</h1>
</div>)
let answer=(<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'9px 20px'}}>{pic[key]}</h1>
<h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'0px 32px'}}>{mappHindi[key]}</h1>
</div>)
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row" style={{ marginTop: "15%" }}>
            <div className="col s12 m2"></div>
            <div className="col s12 m8 ">
              <div className="card">
                <div className="card-content">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems:'center'
                    }}
                  >
                    {
                      show?
                      answer
                    :question
}
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m2"></div>
          </div>
          <br />
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "5%",
            }}
          >
            <Link className="waves-effect waves-light btn-large  indigo z-depth-5" onClick={()=>{
              let num=Math.floor(Math.random()*mapping.length);
              setPIC(mapping[num])
            }} url="/">
              Next Question <i className="material-icons right">arrow_forward</i>
            </Link>
           
          </div>
        </div>
      </div>
      <FloatingButton state={show} showPic={setShow}/>
    </>
  );
}

export default App;
