import React, { useState } from 'react';
import './index.css';
import { CgSandClock, CgCheckO, CgCloseO } from "react-icons/cg";

const Task = ({data:{title,assigned,date,info}}) => {
    const [state ,setState] = useState("pendiente");
    const close = () => {

    }
    return (
        <div className={`card col-3 ms-3 ${state}`} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{assigned}</p>
                <p className="card-text">{date}</p>
                <p className="card-text">{info}</p>
                < CgSandClock onClick={()=>setState("pendiente")} />
                <CgCheckO onClick={()=>setState("realizada")} />
                <CgCloseO onClick={()=>setState("cancelada")} />
            </div>
        </div>
    )
}

export { Task }
