import {createStore} from 'redux'
import RootReducer from './store/reducer'
const ProductReducer = (state={
    product:"nahi hai"
},action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return{
                ...state,
                product:action.payload
            }
            default:
                return state
    }
}


const Store = createStore(RootReducer);
export default Store;