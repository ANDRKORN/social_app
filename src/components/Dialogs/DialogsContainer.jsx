import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirectComponent } from '../../HOC/AuthRedirect';
import { actionCreatorAddMessage } from '../../redux/dialogs-reduce';
import Dialog from './Dialogs';

let mapStateToProps=(state)=>{
  return{
   dialogsPage:state.dialogsPage,  
  }
};

let mapDispachToProps=(dispatch)=>{
  return{
    addMessageContainer : (textMassage) => {
     dispatch(actionCreatorAddMessage(textMassage));   
    }, 
  }
}
export default compose(
  AuthRedirectComponent,
  connect(mapStateToProps,mapDispachToProps)
  )(Dialog)