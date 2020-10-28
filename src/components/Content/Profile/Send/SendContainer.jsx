import { connect } from 'react-redux';
import { actionOnChangePostText, actionSendPost } from '../../../../redux/profileReducer';
import Send from './Send';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePostText: (e) => {
      const text = e.target.value;
      dispatch(actionOnChangePostText(text));
    },
    sendPost: (e) => {
      e.preventDefault();
      dispatch(actionSendPost());
    }
  }
};

const SendContainer = connect(mapStateToProps, mapDispatchToProps)(Send);

export default SendContainer;
