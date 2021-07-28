import { connect } from 'react-redux';
import { actionCreatorAddMessage, actionCreatorUpdateTextMessage } from '../../redux/dialogs-reduce';
import Dialogs from './Dialogs';


/* const DialogsContainer = (props) => { 
console.log(props.store.getState());
  const updateTextMessegeContainer = (textMessage) => {    
  props.store.dispatch(actionCreatorUpdateTextMessage(textMessage));

  }
  const addMessageContainer = () => {
    props.store.dispatch(actionCreatorAddMessage()); 
  }  
  return <Dialogs 
  dialogsPage={props.store.getState().dialogsPage}
  updateTextMessegeContainer={updateTextMessegeContainer}
  addMessageContainer={addMessageContainer}
  />
} */
let mapStateToProps=(state)=>{
  return{
   dialogsPage:state.dialogsPage
  }
};
let mapDispachToProps=(dispatch)=>{
  return{
    updateTextMessegeContainer:(textMessage) => {    
      dispatch(actionCreatorUpdateTextMessage(textMessage))
    },
    addMessageContainer : () => {
     dispatch(actionCreatorAddMessage());   
    }, 
  }
}

const DialogsContainer=connect(mapStateToProps,mapDispachToProps)(Dialogs);

export default DialogsContainer;