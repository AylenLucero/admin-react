import React,{useState, useEffect} from 'react';
import {Layout} from '../../../../components';
import { Link } from "react-router-dom";
import {task} from '../../../../utils';
import {Task} from './components/Task';

const List = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(async() => {
        setTasks(await task.get());
    }, []);
   
    console.log(tasks);
    return(
        <>
                <div className='row'>
                <h2 className="col-6">Agrgar tarea</h2>
                
                <Link to='/tasks/add' ><button type="button" className="btn btn-primary col-2">Left</button></Link>
                </div>
                <div className='row'>
                {                    
                    tasks.map(task=><Task data={task} /> )                    
                }
                </div>
        </>
    );
}

export {List};