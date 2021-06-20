import axios from 'axios'
import{ ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCTS_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
    PRODUCTS_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants'


export const getProducts = ()=> async(disptach) =>{
    try{
        disptach( { type:ALL_PRODUCTS_REQUEST })

        const { data } =  await axios.get('/api/v1/products')
        disptach({

            type:PRODUCTS_DETAILS_SUCCESS,
            payload:data.product
        })

    }catch(error){
        disptach({
            type:PRODUCTS_DETAILS_FAIL,
            payload:error.response.data.message 
        })
    }
}

export const getProductDetails = (id)=> async(disptach) =>{
    try{
        disptach( { type:PRODUCTS_DETAILS_REQUEST })

        const { data } =  await axios.get(`/api/v1/product/${id}`)
        disptach({

            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })

    }catch(error){
        disptach({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message 
        })
    }
}

export const clearErrors = () =>async(disptach)=>{
    disptach({
        type:CLEAR_ERRORS
    })
}