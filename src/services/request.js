
import axios from "axios"
const url='https://648bf2a68620b8bae7ebf0dc.mockapi.io/api/v1/'
const request={
    postRequest:async (endpoint,data)=>{
        try {
            let response=await axios.post(`${url}${endpoint}`,data)
            if(response.status===201){
                return response.data
            }

        } catch (error) {
            return error
            
        }


    }
}

export const {postRequest}=request