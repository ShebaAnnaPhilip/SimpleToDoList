import {combineReducers} from 'redux'

// const addtaskreducer = (state=[], action)=>{
//     switch (action.type) {
//         case 'ADD_TASK':
//             return state = state.concat(action.payload);
//         case 'DELETE_TASK':
            
//                 state = state.slice()
//                 state = state.splice(action.payload,1);
//                 return state
                
//         default:
//             return state
//     }
// },
// reducers = combineReducers({
//     tasks:addtaskreducer
// });

// export default reducers;

const addtaskreducer =(state =[], action)=>{
    switch (action.type) {
        case 'ADD_TASK':
                return state = state.concat(action.payload);
        case 'DELETE_TASK':
                state = state.slice()
                state = state.splice(action.payload,1);
                return state
    
        default:
            return state
    }
},
 reducers = combineReducers({
     tasks:addtaskreducer
 })

 export default reducers;