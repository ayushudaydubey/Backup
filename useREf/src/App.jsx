import React, { useRef, useState } from 'react'

const App = () => {
  const inputRef  =  useRef();
  const [text, setText] = useState("")
  
  const handleFoucs  = ()=>{
    inputRef.current.focus()
  }
  const handleClear = ()=>{
    setText("")
    inputRef.current.focus()
  }
  return (
    <div style={{padding:"20px"}}>
      <h2>UseRef.......</h2>

      <input style={{padding:"10px"}} type="text" ref={inputRef} value={text} onChange={(e)=>setText(e.target.value)}  placeholder='Type.........'/>

  
<div style={{marginTop:"10px"}}>
  <button  onClick={handleFoucs}>focus </button>
 <br />
 <button onClick={handleClear}> Clear </button>

 <p>character :{ text.length}</p>


</div>

    </div>
  )
}

export default App