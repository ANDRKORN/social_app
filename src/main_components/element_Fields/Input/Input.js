import { React, useEffect, useState } from "react";
import show from "../../../accessories/show_psw.svg";
import hiden from "../../../accessories/hiden_psw.svg";
import s from './Input.module.css';


const ErrorsCompanent = (props) => {
  let error = null;
  if (props.meta.error && (props.meta.touched || props.meta.active || props.meta.visited)) {
    error = <div
      style={{ display: 'block', transitionProperty: 'opacity', opacity: props.vis, transition: '1s linear', position: 'absolute', color: 'orangered', top: '-45%', left: '40%' }}>
      {props.meta.error}
    </div>
  }
  return <>
    {error}
  </>
}


const InputFields = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [vis, setVis] = useState(1)
  const imageList = [show, hiden]
  let idTime = null;
  useEffect(() => {
    imageList.forEach((image) => {
      new Image().src = image
    });
  });
  useEffect(() => {
    if (props.data.meta.error && 
      (props.data.meta.touched || props.data.meta.active || props.data.meta.visited)) {
      function time(){
        return setTimeout(() => {setVis(0)}, 5000); 
      }
      idTime = time()          
    }
    return () => clearTimeout(idTime);
  }, [vis]);
  return <>
    <div
      style={{ position: "relative" }}
      onMouseOver={() => {clearTimeout(idTime); setVis(1)}}
      onMouseOut={() => {clearTimeout(idTime); setVis(0)}}
    >
      <input
        {...props.data.input}
        type={props.el.type === 'password' ? (showPassword ? 'text' : 'password') : props.el.type}
        className={props.el.className}
        style={props.data.meta.error && (props.data.meta.touched || props.data.meta.active || props.data.meta.visited) ? { border: '1px solid red' } 
        : {}}
      />
      {
        props.el.showBtn ? <img
          className={s.input__password_btn}
          src={showPassword ? imageList[1] : imageList[0]} alt="" height={'20px'}
          onClick={() => { setShowPassword(!showPassword) }} />
          : <></>
      }
      <ErrorsCompanent vis={vis} meta={props.data.meta} />
    </div >
  </>
}
export default InputFields;