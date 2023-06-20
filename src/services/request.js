
import axios from "axios"
const url='https://648bf2a68620b8bae7ebf0dc.mockapi.io/api/v1/'
const request={
    postRequest:async (endpoint,data)=>{
        try {
            let response=await axios.post(`${url}${endpoint}`,data)
            if(response.status===201){
                return {status:'ok',data:response.data}
            }

        } catch (error) {
            if(error){
                return {err:error,status:'failed'}
            }
            
        }

    },
    getRequest:async (endpoint)=>{
        try {
            let response=await axios.get(`${url}${endpoint}`)
            if(response.status===200){
                return response.data
            }
        } catch (error) {
            if(error){
                return {err:error,status:'failed'}
            }
            
        }
    },
    deleteRequest:async (endpoint,id)=>{
        try {
            let response=await axios.delete(`${url}${endpoint}/${id}`)
            return response
            
        } catch (error) {
            if(error){
                return {err:error,status:'failed'}
            }
        }
       
    },
    putRequest:async (endpoint,id,data)=>{
        try {
            let response=await axios.put(`${url}${endpoint}/${id}`,data)
            return response
        } catch (error) {
            if(error){
                return {err:error,status:'failed'}
            }
        }
        
    }
    
}

export const {postRequest,getRequest,deleteRequest,putRequest}=request