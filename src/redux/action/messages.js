import { messagesApi } from "../../utils/api/index";

const actions = {
  setMessages: items => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items
  }),
  fetchMessages: dialogId => dispatch => {
    dispatch(actions.setIsLoading(true));
    messagesApi
      .getAllByDialogId(dialogId)
      .then(({ data }) => {
        dispatch(actions.setMessages(data));
      })
      .catch(() => {
        dispatch(actions.setIsLoading(false));
      });
  },
  setIsLoading: loading => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: loading
  })
};

export default actions;
