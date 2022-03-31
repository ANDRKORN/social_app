import { SubmissionError } from 'redux-form'

async function submit (values, action, data) {    
    console.log(values, action, data)
    if (values.password && values.password.length < 8) {
        throw new SubmissionError({ login: 'User does not exist', _error: 'Incorrect login or password' })       
    }     
  const res = await data.onSubmit(values)
  console.log(res) 
  if (res.data.resultCode === 1) {
    throw new SubmissionError({ login: 'User does not exist', _error: 'Некорректный логин или пароль' })
  } else {
     action((dispatch, getState, extraArgument)=>{console.log(dispatch, getState, extraArgument)})
  }   
}
export default submit