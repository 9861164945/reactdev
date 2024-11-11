import React, { useState } from 'react'

export const Menu = (addNewComment) => {


  let [formData,setFormData]=useState({
    username:"",
    remarks:"",
    ratings:"",
  });
  let handleInputChange=(event)=>{
    setFormData((currData)=>{
      return{
        ...currData,[event.target.name]:event.target.value
      };
    })
  };
  let handleSubmit=(event)=>{
    console.log(formData);
    addNewComment(formData);
    event.preventDefault();
  };

  return (
    <div>
      <h4>Give A comments</h4>
      <form  onSubmit={handleSubmit}>
        <label htmlFor='username' >Username</label>
        <input type="text" placeholder='username'  value={formData.username }
        onChange={handleInputChange} name='username' />
        <br />
        <label  htmlFor='remark'>Remark</label>
        <textarea value={formData.remarks} onChange={handleInputChange} name='remark'> Remarks</textarea>
        <br />
        <label htmlFor='rating'>Rating</label>
        <input type="number" placeholder='rating' min={1} max={5}  value={formData.ratings}  onChange={handleInputChange} name='rating'/>
        <button> Add comment</button>
      </form>

    </div>
  )
}
