import { useState } from "react";
import './Lotery.css';
import { genTicket ,sum} from "./helper"; // Ensure the file is named helper.js

export default function Lotery() {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning=sum(ticket)<=15;
    let buyTicket =()=>{
        setTicket(genTicket(3));
    }

    return (<>
        <div>
            <h1 className="dj">Lotery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy a ticket</button>
            <h3 className="winning">{isWinning && "Congratulation you won"||"Try Again "}</h3>
        </div>
        </>
    );
}
