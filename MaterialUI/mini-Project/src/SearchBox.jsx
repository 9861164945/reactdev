import './SearchBox.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox(){
    let[city,setCity]=useState("");
    const API_URL="http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY="ae9cba459bdbb70c8723ea41e3120903";

    let getWeatherInfo= async( ) =>{
    let response=    await fetch(`&{API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        weather:jsonResponse.weather[0].description,
        
    }
    }


let handleChange = (evt)=>{
    setCity(evt.target.value);
}
let handleSubmit =(evt)=>{
    evt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();

}


    return(
        <>
        <h3>Search For The Weather</h3>
        <form className='form'  onSubmit={handleSubmit}>
        <TextField 
         id="city" 
         label="City Name" 
         variant="outlined"
         onChange={handleChange}
          required />
          <br />
    <TextField id="state" variant="outlined" label="State Name" 
    onChange={handleChange} required/>
    <br />
    <TextField id="country"
variant="outlined" label="country" onChange={handleChange} required/>
        <br /> <br />
        <Button variant="contained" 
        type='submit'>Search</Button>


 










        </form>
        
        </>

    )
}