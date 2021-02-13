import React, { useState } from 'react';
import {Layout, Main} from '../../components';
import { task } from "../../utils";
import {Link} from 'react-router-dom';

const AddTask = () => {
    const [title, setTitle] = useState(' ');
    const [date, setDate] = useState(' ');
    const [assigned, setAssigned] = useState(' ');
    const [info, setInfo] = useState(' ');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await task.post({title, date, assigned, info});  
        exito()   
        setTitle('');
        setDate('');
        setAssigned('');
        setInfo('');   
    }
    const exito = () => {   
        alert('Tu tarea se cargo exitosamente');
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
                <input type="date" name="date" className="form-control" id="exampleFormControlInput1" value={date} onChange={(event) => setDate(event.target.value)} placeholder="Date Task" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Asignado</label>
                <input type="text" name="assigned" className="form-control" id="exampleFormControlInput1" value={assigned} onChange={(event) => setAssigned(event.target.value)} placeholder="Asignado" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Info. Task</label>
                <textarea className="form-control" name="info" id="exampleFormControlTextarea1" value={info} onChange={(event) => setInfo(event.target.value)} placeholder="Description" rows="3"></textarea>
                <button type="submit" className="btn btn-primary col-2">Add</button>
                
                </div>
                </form>
                </Main>
            </Layout>
        </>
    );
}

export {AddTask};