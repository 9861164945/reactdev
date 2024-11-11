
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App(){
  
  let foodItem=['dal','roti','salad','milk'];
    
  //let foodItem=[];
  if(foodItem===0){
    return(
      <h3>I am Hungry Give Me Food</h3>
    )
  }
    
      
    
  
  return(
   
<>
  <h1>Sambit list</h1>
  
  <ul class="list_group">
    {foodItem.map((item)=>(
      <li class="list-group-item">{item}

      </li>
    ))}
  </ul>
</>
  )
}
export default App;