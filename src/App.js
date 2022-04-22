import React,{useState} from "react";
import "./style.css";

export default function App() {
const [add,setAdd]=useState()
const [one,setOne]=useState()
const [two,setTwo]=useState()
const [result,setResult]=useState()
const [sign,setSign]=useState('')
console.log(sign)

  const handleAdd=()=>{
    setResult(Number(one)+Number(two))
    setSign('+')
  }

 
  const handleSub=()=>{
    setResult(one-two)
    setSign('-')
  }
  const handleMul=()=>{
    setResult(one*two)
    setSign('*')
  }
  const handleDiv=()=>{
    setResult(one/two)
    setSign('/')
  }
  const handleReset=()=>{
    setResult()
    setOne('')
    setTwo('')
  }
 

 

  return (
    <>
    <div>
      <>
      <h1>{result}</h1>
     <button onClick={handleAdd}> Add</button>
     <button onClick={handleSub}> SUB</button>
     <button onClick={handleMul}> Mul</button>
     <button onClick={handleDiv}> Div</button>
     <button onClick={handleReset}> Reset</button>
     </>
    </div>
    

    
    
     <input  
     style={{ width: '120px',
      height: '56px',
      border: 'none',
  borderRadius: '4px',
marginTop:'50px',
padding:'10px'
    
    
    }}
     placeholder="First Number" type="text" value={one} onChange={(e)=>setOne(e.target.value)}/>
     <h2>{sign}</h2>

     <input 
     style={{ width: '120px',
     height: '56px',
     border: 'none',
     borderRadius: '4px',
    // marginLeft:'30px'
    }}
     placeholder="Second Number"  type="text"value={two} onChange={(e)=>setTwo(e.target.value)}/>
</>
  );
}
