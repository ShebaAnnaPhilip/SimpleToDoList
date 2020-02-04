import { ADD_TASK } from "./TaskConstants";
import { DELETE_TASK } from "./TaskConstants";

// export const addtask =(tasks)=>{

//     return {
//         type: ADD_TASK,
//         payload:tasks
//     }
// }

// export const deletetask =(taskid)=>{

//     return {
//         type: DELETE_TASK,
//         payload:taskid
//     }
// }

export const addtask =(tasks) =>{

    return{
        type:ADD_TASK,
        payload:tasks
    }
}
export const deletetask=(taskid)=>{
    return{
        type:DELETE_TASK,
        payload:taskid
    }
}