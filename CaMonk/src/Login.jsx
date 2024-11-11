import './Login.css'
export default function Login(){
    return(
        <>
        <div>
            <h1 className='an'>Login Page</h1>
            <form action="login">
                <label htmlFor="username">Enter your UserName</label>
                <input type="text" placeholder="Username" id="username" name="username" />

                <label htmlFor="password"> Enter your Password       </label>
                <input type="text"  placeholder="Password" id="password" name="password"/>

                <button type="Submit">Login</button>
                </form> 

        </div>
        /</>
    )

}