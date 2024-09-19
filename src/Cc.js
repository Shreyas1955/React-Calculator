import * as math from "mathjs"
import {useState,useRef, useEffect} from "react"
export default function Cc()
{
    const [input,setInput]=useState("")
    const [result,setResult]=useState("")
    const rInput=useRef()
    const hInput=(event)=>{

       setInput((input).concat(event.target.value))
        if(isNaN(input.slice(-1)) && isNaN(input.slice(input.length-2,input.length-1))){
            alert("Enter valid input")
           setInput("")
            return;
        }
        }
    

   // const calculate=(event)=>{
     //   setResult(math.evaluate(input))
    //}
    const clr=(event)=>{
        setInput("")
        setResult("")
    }
    
    const focus=(event)=>{
        rInput.current.focus()
    
    }
    useEffect(()=>{
        focus();
    })

    const sqrt=(event)=>{
        let n=parseFloat(input)
        let r=n**0.5
        setResult(r)
        
    }

    const calculate=()=>{
        if(input=="")
        {
            alert("input cannot be empty")
            

        }
        if(isNaN(input.slice(-1))){
            alert("Enter valid input")
            setInput("")
            setResult("")
        }
        
        
    //     let data={inp:input}
    //     let urlAdd="http://localhost:9000/post"
    //     axios.post(urlAdd,data)
    //     .then(res=>{
    //         if(res.data.data=="Infinity"){
    //             setResult("")
    //             alert("Number cannot be divided by Zero")
    //             setInput("")

    //         }
    //         else{
    //         setResult(res.data.data)
    //         }
            
    //     })
    //     .catch(err=>console.log(err))
    // }
    try {
        let evaluatedResult = math.evaluate(input); // Directly evaluate the input
        setResult(evaluatedResult);
      } catch (error) {
        alert('Invalid input');
        setInput('');
        setResult('');
      }
    };
    
    return(
        <>
        <center>
            <div className="container" >
                <div className="content">
                    <div className="screen">
                        <h1>{result}</h1>
                    <input type="text" value={input} ref={rInput} />
                    </div>
                    <div className="first row">
                    <button onClick={clr} >AC</button>
                    <button onClick={sqrt} value="√">√</button>
                    <button onClick={hInput} value="%">%</button>
                    <button onClick={hInput} value="/">÷</button><br/>
                    <button onClick={hInput} value="7">7</button>
                    <button onClick={hInput} value="8">8</button>
                    <button onClick={hInput} value="9">9</button>
                    <button onClick={hInput} value="*">X</button><br/>
                    <button onClick={hInput} value="4">4</button>
                    <button onClick={hInput} value="5">5</button>
                    <button onClick={hInput} value="6">6</button>
                    <button onClick={hInput} value="-">-</button><br/>
                    <button onClick={hInput} value="1">1</button>
                    <button onClick={hInput} value="2">2</button>
                    <button onClick={hInput} value="3">3</button>
                    <button onClick={hInput} value="+">+</button><br/>
                    <button onClick={hInput} value="0">0</button>
                    <button onClick={hInput} value=".">.</button>
                    <button id="ez" value="=" onClick={calculate}>=</button> 
                    
                     </div>

                </div>
            </div>
        </center>
        </>
    );
}