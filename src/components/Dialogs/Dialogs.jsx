import React from 'react';
import dialogs_style from './Dialogs.module.css'
import DialogsMasseges from './DialogsMessegs/DialogsMessegs'
import DialogsItems from './DialogsItems/DialogsItems'
import { reduxForm, Field } from "redux-form";

const MassegeForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit} action="">
      <div>
        <Field placeholder="Masseges" name="masseges" component={"input"} />
      </div>      
      <div>
      <button type="submit" >Submit</button>
      </div>
    </form>
  );
};

const MassegeReduxForm = reduxForm({ form: "masseges" })(MassegeForm);


class Dialog extends React.Component{  
 
  addMassege = (FormData) => {
    this.props.addMessageContainer(FormData.masseges);
  }
  
  render(){
    let arrDialogsItems = this.props.dialogsPage.dialogItems.map((el) => <DialogsItems name={el.name} key={el.id} />);
    let arrMessegeItems = this.props.dialogsPage.massegeItems.map((el) => <DialogsMasseges massege={el.massege} key={el.id} />);
    return(
     <div className={dialogs_style.dialogs_block}>
      <div className={dialogs_style.dialogs_block__items}>
        {arrDialogsItems}
      </div>
      <div className={dialogs_style.dialogs_messege}>
        <div>
          {arrMessegeItems}
        </div>
        <div>
        <MassegeReduxForm onSubmit={this.addMassege}/>
        </div>
      </div>
    </div>
    ) 
  }
}
export default Dialog;