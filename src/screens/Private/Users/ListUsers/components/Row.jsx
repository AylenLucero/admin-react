import React from 'react';
import {  CgPen, CgTrash } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { user} from '../../../../../utils';

const Row = ({info,onRemoveItem}) => {
    const deleteUsers = () => {
        user.deleteUser(info.id);
        onRemoveItem(info.id);
    }
    return(
        <>
            <tr>
            <td>{info.name}</td>
            <td>{info.lastname}</td>
            <td>{info.email}</td>
            <td>
                <Link to={`/users/edit/${info.id}`}>
                    <CgPen />
                </Link> 
            </td>
            <td>
                <CgTrash onClick={deleteUsers} />
            </td>
            </tr>
        </>
    );
}
export {Row}
