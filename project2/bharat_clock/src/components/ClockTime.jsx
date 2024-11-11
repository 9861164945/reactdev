function ClockTime(){
    let time=new Date();;
    return (
        <div>
            <p>
                This is the current date and time:{time.toLocaleDateString()}---{time.toLocaleTimeString()}
            </p>
        </div>
    )
}
export default  ClockTime;