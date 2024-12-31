import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(15)
  const [inputvalue,sethandleInput]= useState("")
  const [strArr, setStrArr]= useState([])
 let [revStr, setRevStrArr]= useState("")
  const [idx,setIdx]=useState(0)

const handleInput = (event)=>{
  sethandleInput(event.target.value)
  console.log(inputvalue)
}

const addString =() =>{
if (inputvalue){
  const trinput=inputvalue.trim()
  setStrArr([...strArr , trinput])
  console.log([...strArr , trinput])
}
}

const revString =()=>{ 
  
if(strArr.length>idx){
  setRevStrArr("")
  revStr = ""
let getstr = strArr[idx];
getstr = getstr.split('').reverse().join('')
setRevStrArr(getstr);
setIdx(idx+ 1);
console.log(...revStr,getstr)
console.log(idx)

}

}



   

  const addCount = ()=>{
    setCount(count+2)
  }

  const remCount =()=>{
    setCount((counter)=>counter-1)
    setCount((counter)=>counter-2)
  }
  return (
    <>
      
        
      <h1>Counter App</h1>
      <div className="card">
        <button onClick={addCount}>
          count is {count}
        </button>
        <p>{"  "}</p>
        <button onClick={remCount}>
          count is {count}
        </button>
       
      </div>
      <div className="card">
        <h1> Enter a string</h1>
      <input type="text" 
        value={inputvalue} 
        onChange={handleInput}/>
      <button onClick={addString}> insert string</button>
      <p>{"  "}</p>
      <button onClick={revString}> Reverse string</button>
      <h2> Reversed string :{revStr}</h2>
      
      </div>
      
    </>
  )
}

export default App
