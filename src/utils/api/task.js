import {api} from './api';
import {objectToArray} from '../../helpers';

const post = async (task) => {    
  await api({
        method: 'post',
        url: '/tasks.json',
        data: task        
    });
    
}


const get = async () => {    
    const data =  await api({
          method: 'get',
          url: '/tasks.json'        
    }); 
    return objectToArray(data.data);     
}


  
export const task = { post, get };
