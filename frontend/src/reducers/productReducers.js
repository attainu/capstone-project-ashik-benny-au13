import{ ALL_PRODUCTS_REQUEST,
        ALL_PRODUCTS_SUCCESS,
        ALL_PRODUCTS_FAIL,
        CLEAR_ERRORS
    } from '../constants/productConstants'


export const productsReducer =( state = {proudcts:[] } ,action) =>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading:true,
                product:[]
            }
        case ALL_PRODUCTS_SUCCESS:
                return {
                    loading:false,
                    product:action.payload.products,
                    productCount:action.payload.productsCount
                }
        case ALL_PRODUCTS_FAIL:
                    return {
                        loading:false,
                        error:action.payload
                    }
        case CLEAR_ERRORS:
                        return {
                            ...state,
                            error:null
                        }
        default:
            return state;
    }
}