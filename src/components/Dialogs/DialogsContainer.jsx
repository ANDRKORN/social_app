import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirectComponent } from '../../HOC/AuthRedirect';
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
export default compose(
  AuthRedirectComponent,
  connect(mapStateToProps,mapDispachToProps)
  )(Dialog)