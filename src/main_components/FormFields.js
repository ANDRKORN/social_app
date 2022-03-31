import { Field, reduxForm } from "redux-form";
import { React } from "react";
import s from './FormFields.module.css';
import Button from '../main_components/element_Fields/Button'
import Input from '../main_components/element_Fields/Input/Input'
import submit from "./submit/submit";

const required = value => value ? undefined : 'Обязательное поле'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
  value && value.length < min ? `Минимальная длнина пороля ${min}` : undefined  
const email = value =>{
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Некорректный email' : undefined }

const FormFields = (props) => {
  const field = props.field || [];    
  const itemForm = field.map((el, i) => {    
    const val = []
    if (el.email) {
      val.push(email)
    }
    if (el.required) {
      val.push(required)
    }
    switch (el.visible) {
      case 'button': {
        el.component = ({ input, label, type, meta: { touched, error }, ...props }) => <Button el={el} data={{ input, label, type, meta: { touched, error }, ...props }} />
        break;
      }
      case 'input': {
        el.component = (props) => <Input el={el} data={props} />
        break;
      }
      case 'checkbox': {
        el.component = ({ input, label, type, meta: { touched, error } }) => <Input el={el} data={{ input, label, type, meta: { touched, error } }} />
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
      <Field
        props={{ className: el.className }}
        placeholder={el.placeholder}
        name={el.name}
        component={el.component}
        validate={val}
      />
    </div>
  })
  return <div style={{ position: 'relative' }}>
    {props.labelForm ? <h3 className={props.classLabelForm}>{props.labelForm}</h3>
      : <></>}
    <form onSubmit={props.handleSubmit(submit)} action="" className={props.classNameForm || s.form}>
      {itemForm}
    </form>
    {props.error ? <div
    style={{
      position: 'absolute',
      margin: '5px 10%',
      color: 'orangered',
      height: '10%',
      width: '80%',
      border: '2px solid rgb(255, 184, 0)',
    }}
  >
    <span style={{
      display: 'block',
      margin: '0 auto',
      width: 'fit-content',
      letterSpacing: '1px',
      lineHeight: '200%',
    }}>{props.error}</span>
  </div>
    : <></>}    
  </div>
};
export default reduxForm()(FormFields);