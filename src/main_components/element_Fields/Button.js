import { React } from "react";

const ButtonFields = (props) => {
      return <div style={{ width: '100%' }}>
            <button {...props.data.input} className={props.el.className} type={props.el.type}>{props.el.textBtn}</button>
      </div>
}
export default ButtonFields;