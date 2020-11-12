import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ProductsReducer from './ProductsReducer'
 


const rootReducer = combineReducers({ProductsReducer,AuthReducer})
export default rootReducer