
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
            return {err:error,status:'failed'}
            
        }


    },
    getRequest:async (endpoint)=>{
        try {
            let response=await axios.get(`${url}${endpoint}`)
            if(response.status===200){
                return response.data
            }
        } catch (error) {
            let err={}
            if (error.response) {
                err['status']='failed'
                err['message']=error.response.data
              } else if (error.request) {
                err['request']=error.request
                return err
              } else {
                 err['message']=error.message
              }
            
        }
    },
    deleteRequest:async (endpoint,id)=>{
        let response=await axios.delete(`${url}${endpoint}/${id}`)
        return response
    },
    putRequest:async (endpoint,id,data)=>{
        let response=await axios.put(`${url}${endpoint}/${id}`,data)
        return response
    }
    
}

export const {postRequest,getRequest,deleteRequest,putRequest}=request