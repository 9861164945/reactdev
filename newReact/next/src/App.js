import react ,{useState} from "react";
const App=()=>{
const[input,setInput]=useState("");
const  [message,setMessage]=useState("");
const handleInput=(e)=>{
const value=e.target.value;
setInput(value);
const num=parseInt(value,10);
if(isNaN(num)){
setMessage("");
}
else if(num<0)
{
setMessage("Enter a positive value");

}
else if(num%2===0)
{
setMessage(`Next three Numbers:${num+2},${num+4},${num+6}`);

}
else
{
setMessage(`Next Three Odd Numbers: ${num+2},${num+4},${num+6}`);

}
};
return(
<div className="c1">
  <div className="c2">
  <h1 classNamw="h1">
   Number Input:
  </h1>
    <input type="text"
    value={input}
    onChange={handleInput}
    placeHolder="Enter a number"

/>
{message&&(
<div>
  {message}
</div>
)}
  
    
  </div >
  
</div>
)

};
export default App;
