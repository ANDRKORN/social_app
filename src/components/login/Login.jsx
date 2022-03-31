import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Loader from "../LoaderGif/Loader";
import FormFields from "../../main_components/FormFields";
import s from "./Login.module.css";
import mainLogin from "../../accessories/login_img.svg";
import { NavLink } from "react-router-dom";

export const Login = (props) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function auth(){
      await props.authThunkCreator();
    }
    auth()
    setLoader(false)
  }, []);

  const itemForm = [
    {
      className: s.form__input,
      posLabel: "up",
      label: "Логин",
      placeholder: "Email",
      name: "email",
      visible: "input",
      required: true,
      email: true
    },
    {
      className: s.form__input,
      posLabel: "up",
      label: "Пароль",
      placeholder: "Password",
      name: "password",
      showBtn: true,
      visible: "input",
      type: "password",
      required: true,
      minLength: 8, 
    },
    {
      classNameFields: s.form__checkbox,
      label: "Запомни меня",
      name: "rememberMe",
      type: "checkbox",
      visible: "checkbox",
      component: "input",
    },
    {
      name: "submit",
      visible: "button",
      textBtn: "Войти",
      type: "submit",
      className: s.form__btn_submit,
    },
  ];
  function onSubmit() {
   return props.LoginThunkCreator(arguments[0]);
  }
  return (
    <>
     {loader ? <Loader show={loader}/> 
     :  props.isAuth ? (
        <Redirect to={"/profile"} />
      ) : (
        <main className={s.login}>
          <div>
            <h1 className={s.login__title}>Добро пожаловать в Small Talk</h1>
            <div className={s.login__img}>
              <img src={mainLogin} alt="" width={"421px"} />
            </div>
          </div>
          <div className={s.form}>
            {
              <FormFields
                form={"login"}
                labelForm={"Войдите в свой акканут!"}
                onSubmit={onSubmit}
                field={itemForm}
                textSubmit={"Войти"}
                classLabelForm={s.form__label}
              />
            }
            <div className={s.login__link}>
              <NavLink to="/registration">Забыли пароль?</NavLink>
              <div>
                <p>У Вас нет аккаунта?</p>
                <NavLink to="/registration">Зарегистрируйтесь</NavLink>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Login;
