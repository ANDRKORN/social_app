import React from "react";
import { Redirect } from "react-router-dom";
import FormFields from "../../main_components/FormFields";
import s from "./Login.module.css";
import mainLogin from "../../accessories/login_img.svg";
import { NavLink } from "react-router-dom";

export const Login = (props) => {
  const itemForm = [
    {
      className: s.form__input,
      posLabel: "up",
      label: "Логин",
      placeholder: "Email",
      name: "email",
      component: "input",
    },
    {
      className: s.form__input,
      posLabel: "up",
      label: "Пароль",
      placeholder: "Password",
      name: "password",
      showBtn: true,
      component: "input",
      type: 'password',
    },
    {
      classNameFields: s.form__checkbox,
      label: "Запомни меня",
      name: "rememberMe",
      type: "checkbox",
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
  const onSubmit = (FormData) => {
    props.LoginThunkCreator(FormData);
  };
  return props.isAuth ? (
    <Redirect to={"/profile"} />
  ) : (
    <main className={s.login}>
      <div>
        <h1>Добро пожаловать в Small Talk</h1>
        <div className={s.login__img}>
          <img src={mainLogin} alt="" width={'421px'}/>
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
  );
};
export default Login;
