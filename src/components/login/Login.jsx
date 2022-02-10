import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} action="">
      <div>
        <Field placeholder="Login" name='login' component={"input"} />
      </div>
      <div>
        <Field placeholder="Password" name="password" component={"input"} />
      </div>
      <div>
        <Field placeholder="Login" name='rememberMe' type="checkbox" component={"input"} />
      </div>
      <div>
      <button type="submit" >Submit</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

export const Login = (props) => {
    const onSubmit = (FormData)=>{
        console.log(FormData)
    }
    return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
