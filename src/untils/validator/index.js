const requiredField = value =>{
    if(value){
        return undefined
    }else{
        return 'error is required'
    }    
}