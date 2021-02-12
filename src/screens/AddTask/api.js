import {api} from '../../utils';

const post = async (task) => {    
    api({
        method: 'post',
        url: '/tasks.json',
        data: task        
    });
    
}

  
export const tasksApi = { post };
