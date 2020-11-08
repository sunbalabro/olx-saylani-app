import {combineReducers} from 'redux'
let products = [
    { 
        image:"dkahkd",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    },
    {
        image:"",
        title:"Aquos Sharp SH-04H /506sh Xx3",
        price:"Rs 9,999"
    }
]

const ProductReducer = (state={
    product:products
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


const UserRedicer = (state={
    product:"nahi hai"
},action) =>{
    switch(action.type){
        case 'ADD_USER':
            return{
                ...state,
                product:action.payload
            }
            default:
                return state
    }
}

const rootReducer = combineReducers({ProductReducer,UserRedicer})
export default rootReducer