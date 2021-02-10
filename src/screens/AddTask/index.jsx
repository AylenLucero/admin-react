import React from 'react';
import {Layout, Main} from '../../components';

const AddTask = () => {
    return(
        <>
            <Layout >
                <Main>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Title Task</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title Task" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Date Task" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Asignado</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Asignado" />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Info. Task</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="3"></textarea>
                </div>
                </Main>
            </Layout>
        </>
    );
}

export {AddTask};