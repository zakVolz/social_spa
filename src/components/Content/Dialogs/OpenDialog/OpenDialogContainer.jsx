import { actionOnChangeMessageText, actionSendMessage } from '../../../../redux/messagesReducer';
import OpenDialog from './OpenDialog';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeMessageText: (e) => {
      const text = e.target.value;
      dispatch(actionOnChangeMessageText(text));
    },
    sendMessage: (e) => {
      e.preventDefault();
      dispatch(actionSendMessage());
    }
  }
};

const OpenDialogContainer = connect(mapStateToProps, mapDispatchToProps)(OpenDialog);

export default OpenDialogContainer;
