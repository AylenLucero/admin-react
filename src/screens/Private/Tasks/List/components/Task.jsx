import React, { useState } from 'react';
import './index.css';
import {task} from '../../../../../utils/api/task';
import { CgSandClock, CgCheckO, CgCloseO } from "react-icons/cg";

const Task = ({data:{title,assigned,date,info,id, status}}) => {
    const [state ,setState] = useState(status);
    const updateStatus = (status) =>{
        setState(status);
        task.patch(id,{status})
    }
    return (
        <div className={`card col-3 ms-3 ${state}`} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{assigned}</p>
                <p className="card-text">{date}</p>
                <p className="card-text">{info}</p>
                <CgSandClock onClick={()=>updateStatus("pendiente")} />
                <CgCheckO onClick={()=>updateStatus("realizada")} />
                <CgCloseO onClick={()=>updateStatus("cancelada")} />
                <span className='ms-5'>
                    {state}
                </span>
            </div>
        </div>
    )
}

export { Task }
