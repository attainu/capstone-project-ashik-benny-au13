import axios from 'axios';
import{ ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL,
        PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
        ADMIN_PRODUCTS_REQUEST,ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAIL,
        NEW_PRODUCT_REQUEST,NEW_PRODUCT_SUCCESS,NEW_PRODUCT_FAIL,NEW_PRODUCT_RESET,
        CLEAR_ERRORS
} from '../constants/productConstants'


// GET ALL PRODUCTS
export const getProducts = ()=> async(dispatch) =>{
    try{
        dispatch( { type:ALL_PRODUCTS_REQUEST })

        const { data } =  await axios.get('/api/v1/products')
        dispatch({

            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message 
        })
    }
};

//GET PRODUCTS BY ADMIN

export const getAdminProducts = ()=> async(dispatch) =>{
    try{
        dispatch( { type:ADMIN_PRODUCTS_REQUEST })

        const { data } =  await axios.get('/api/v1/admin/products')
        dispatch({
            type:ADMIN_PRODUCTS_SUCCESS,
            payload:data.products
        })

    }catch(error){
        dispatch({
            type:ADMIN_PRODUCTS_FAIL,
            payload:error.response.data.message 
        })
    }
};


//ADD PRODUCT BY ADMIN

export const newProducts = (productData)=> async(dispatch) =>{
    try{
        dispatch( { type:NEW_PRODUCT_REQUEST })

        const config = {
            headers: { 'Content-Type': 'application/json' }
        }

        const { data } =  await axios.get('/api/v1/product/new', productData, config)
        dispatch({
            type:NEW_PRODUCT_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:NEW_PRODUCT_FAIL,
            payload:error.response.data.message 
        })
    }
};


//GET A PRODUCT
export const getProductDetails = (id)=> async(dispatch) =>{
    try{
        dispatch( { type:PRODUCT_DETAILS_REQUEST })

        const { data } =  await axios.get(`/api/v1/product/${id}`)
        dispatch({

            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product
        })

    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message 
        })
    }
}



// CLEAR ERRORS
export const ClearErrors = () =>async(disptach)=>{
    disptach({
        type:CLEAR_ERRORS
    })
}