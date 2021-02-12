import React, { useState } from 'react';
import {Layout, Main} from '../../components';
import { tasksApi } from "./api";
import {Link} from 'react-router-dom';

const AddTask = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const { title, date, assigned, info} = event.target 

        const task = {
            title: title.value,
            date: date.value,
            assigned: assigned.value,
            info: info.value
        }
        tasksApi.post(task);        
    }
    const exito = () => {    

        alert('Tu tarea se cargo exitosamente')
    }

    return(
        <>
            <Layout >
                <Main>
                <form onSubmit={handleSubmit}>   
                <div className="mb-3">                
                <label for="title" className="form-label">Title Task</label>
                <input type="text" name="title" className="form-control" id="title" placeholder="Title Task" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" name="date" className="form-control" id="exampleFormControlInput1" placeholder="Date Task" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Asignado</label>
                <input type="text" name="assigned" className="form-control" id="exampleFormControlInput1" placeholder="Asignado" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Info. Task</label>
                <textarea className="form-control" name="info" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                <button onClick={()=> exito()} type="submit" className="btn btn-primary col-2">Add</button>
                
                </div>
                </form>
                </Main>
            </Layout>
        </>
    );
}

export {AddTask};