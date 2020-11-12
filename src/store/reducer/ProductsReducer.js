const ProductReducer = (state={
    product:[]
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
export default ProductReducer;