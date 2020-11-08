import {createStore} from "redux"
import rootReducer from "./reducer"

// const ProductReducer = (state={
//     product:products
// },action) =>{
//     switch(action.type){
//         case 'ADD_PRODUCT':
//             return{
//                 ...state,
//                 product:action.payload
//             }
//             default:
//                 return state
//     }
// }
const Store = createStore(rootReducer)
export default Store
