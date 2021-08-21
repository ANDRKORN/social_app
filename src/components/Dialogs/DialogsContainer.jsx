import { connect } from 'react-redux';
import { actionCreatorAddMessage, actionCreatorUpdateTextMessage } from '../../redux/dialogs-reduce';
import Dialog from './Dialogs';



let mapStateToProps=(state)=>{
  return{
   dialogsPage:state.dialogsPage,
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

const DialogsContainer=connect(mapStateToProps,mapDispachToProps)(Dialog);

export default DialogsContainer;