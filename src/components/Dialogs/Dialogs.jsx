import React from 'react';
import dialogs_style from './Dialogs.module.css'
import DialogsMessegs from './DialogsMessegs/DialogsMessegs'
import DialogsItems from './DialogsItems/DialogsItems'
 
const Dialogs = (props) => {
  let newTextMessege = React.createRef();
  const updateTextMessege = () => {
    let textMessage = newTextMessege.current.value
    props.updateTextMessegeContainer(textMessage);   
  }
  const addMessage = () => {
    props.addMessageContainer();
  }
  let arrDialogsItems = props.dialogsPage.dialogItems.map((el) => <DialogsItems name={el.name} key={el.id} />);
  let arrMessegeItems = props.dialogsPage.messegeItems.map((el) => <DialogsMessegs messege={el.messege} key={el.id} />);

  return <>
    <div className={dialogs_style.dialogs_block}>
      <div className={dialogs_style.dialogs_block__items}>
        {arrDialogsItems}
      </div>
      <div className={dialogs_style.dialogs_messege}>
        <div>
          {arrMessegeItems}
        </div>
        <div>
          <div>
            <textarea name="" id="" cols="15" rows="1"
             ref={newTextMessege} 
            onChange={updateTextMessege} 
            value={props.dialogsPage.textMessage} />
          </div>
          <div>
            <button onClick={addMessage}>add messege</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Dialogs;