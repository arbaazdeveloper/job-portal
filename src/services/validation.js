
const validate=(formData,step)=>{

  let err={}
    if(formData['job-title'].length===0){
        err['title']=true
        err['message']='This field is required'
       
       
    }
    if(formData['remote-type'].length===0){
        err['jobType']=true
        err['message']='This field is required'
    }
    if(formData['location'].length===0){
        err['location']=true
        err['message']='This field is required'
      
    }
    if(formData['industry'].length===0){
        err['industry']=true
        err['message']='This field is required'
        
    }
    if(formData['company-name'].length===0){
        err['company']=true
        err['message']='This field is required'
        
    }
    if(step===2){

    if(formData['apply-type'].length===0 && step===2){
        err['apply-type']=true
        err['message']='Apply type is required'
        
    }

    if(formData['salary-min']!==''){
        let reg=/^[0-9]+$/
        let result=reg.test(formData['salary-min'])
        if(!result ){
            err['salary-min']=true
            err['message']='Invalid input'
        }

    }
    if(formData['salary-max']!==''){
        let reg=/^[0-9]+$/
        let result=reg.test(formData['salary-max'])
        if(!result){
            err['salary-max']=true
            err['message']='Invalid input'
        }

    }
    if(formData['experience-min']!==''){
        let reg=/^[0-9]+$/
        let result=reg.test(formData['experience-max'])
        if(!result){
            err['experience-min']=true
            err['message']='Invalid input'
        }

    }
    if(formData['experience-max']!==''){
        let reg=/^[0-9]+$/
        let result=reg.test(formData['experience-max'])
        if(!result){
            err['experience-max']=true
            err['message']='Invalid input'
        }

    }
    if(formData['total-employee']!==''){
        let reg=/^[0-9]+$/
        let result=reg.test(formData['total-employee'])
        if(!result){
            err['total-employee']=true
            err['message']='Invalid input'
        }

    }
}
    return err
}
export default validate