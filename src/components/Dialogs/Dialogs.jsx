import React from 'react';
import dialogs_style from './Dialogs.module.css'
import DialogsMessegs from './DialogsMessegs/DialogsMessegs'
import DialogsItems from './DialogsItems/DialogsItems'

class Dialog extends React.Component{  
  arrDialogsItems = this.props.dialogsPage.dialogItems.map((el) => <DialogsItems name={el.name} key={el.id} />);
  arrMessegeItems = this.props.dialogsPage.messegeItems.map((el) => <DialogsMessegs messege={el.messege} key={el.id} />);
  newTextMessege = React.createRef();
 updateTextMessege = () => {
    let textMessage = this.newTextMessege.current.value
    this.props.updateTextMessegeContainer(textMessage);   
  }
  addMessage = () => {
    this.props.addMessageContainer();
  }
  
  render(){
    console.log(this.props)
    return(
     <div className={dialogs_style.dialogs_block}>
      <div className={dialogs_style.dialogs_block__items}>
        {this.arrDialogsItems}
      </div>
      <div className={dialogs_style.dialogs_messege}>
        <div>
          {this.arrMessegeItems}
        </div>
        <div>
          <div>
            <textarea name="" id="" cols="15" rows="1"
             ref={this.newTextMessege} 
            onChange={this.updateTextMessege} 
            value={this.props.dialogsPage.textMessage} />
          </div>
          <div>
            <button onClick={this.addMessage}>add messege</button>
          </div>
        </div>
      </div>
    </div>
    ) 
  }
}
export default Dialog;