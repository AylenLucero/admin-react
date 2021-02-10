import React from 'react';
import {Layout} from '../../components';
import { Link } from "react-router-dom";

const Tasks = () => {
    return(
        <>
            <Layout >
                <div className='row'>
                <h2 className="col-6">Agrgar tarea</h2>
                
                <Link to='/add-task' ><button type="button" className="btn btn-primary col-2">Left</button></Link>
                </div>
            </Layout>
        </>
    );
}

export {Tasks};