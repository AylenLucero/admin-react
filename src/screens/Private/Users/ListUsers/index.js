import React, {useState, useEffect} from 'react';
import {Table} from './components/Table';
import {user} from '../../../../utils'

const ListUsers = () => {
    const [list, setList] = useState([]);

    useEffect(async() => {
        setList(await user.get())
    }, [])

    const removeItem = (id) => {
        setList(list.filter(item=>id!=item.id));
    }

    return (
        <Table rows={list} onRemoveItem={removeItem} />
    );
}

export {ListUsers}