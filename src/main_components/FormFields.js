import { Field, reduxForm } from "redux-form";
import { React, useEffect, useState } from "react";
import s from './FormFields.module.css';
import show from "../accessories/show_psw.svg";
import hiden from "../accessories/hiden_psw.svg";

const FormFields = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const imageList = [show, hiden]
  useEffect(() => {
    imageList.forEach((image) => {
      new Image().src = image
    });
  })

  const field = props.field || [];
  const itemForm = field.map((el, i) => {
    switch (el.visible) {
      case 'button': {
        el.component = () => <button
          type={el.type}
          className={el.className}
        >
          {el.textBtn}
        </button>
        break;
      }
      default: {
        break;
      }
    }
    return <div key={i}
      style={el.posLabel === 'up' ? { flexDirection: 'column' } : {}}
      className={el.classNameFields || s.form__items}>
      {el.label ? <label>
        {el.label}
      </label>
        : <></>}
      <div style={el.visible === 'button' ? { width: '100%' } : { position: 'relative'}}>
        <Field type={el.type === 'password' ? showPassword ? 'text' : 'password' : el.type}
          props={{ className: el.className }}
          placeholder={el.placeholder}
          name={el.name}
          component={el.component}
        />
        {el.showBtn ? <img className={s.form__password_btn} src={showPassword ? imageList[1] : imageList[0]} alt="" width={'40px'} onClick={() => { setShowPassword(!showPassword) }} /> : <></>}
      </div>
    </div>
  })
  return <div>
    {props.labelForm ? <h3 className={props.classLabelForm}>{props.labelForm}</h3>
      : <></>}
    <form onSubmit={props.handleSubmit} action="" className={props.classNameForm || s.form}>
      {itemForm}
    </form>
  </div>
};
export default reduxForm()(FormFields);