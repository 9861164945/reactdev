import React, { useRef, useEffect } from 'react';
import '../Syyles/LoginPage.css';

export default function RegistrationPage(){

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
  // Auto-focus the Name field 
    useEffect(() => {
      nameRef.current.focus();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        //Printing the value in the console
    
        console.log(`Name:${name}`);
    
          console.log(`Email:${email}`);
          console.log(`Password${password}`);
        
    
        if (!name) {
          nameRef.current.focus();
        } else if (!email) {
          emailRef.current.focus();
        } else if (!password) {
          passwordRef.current.focus();
        } else {
          alert('Form Submitted Successfully!');
          }
      };


return(
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" ref={nameRef} id="name" />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" ref={emailRef} id="email" />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" ref={passwordRef} id="password" />
      </div>

      <button type="submit">Submit</button>
    </form>
)


}