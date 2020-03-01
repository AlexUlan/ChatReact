import { dialogsApi } from "../../utils/api/index";

const actions = {
  setDialogs: items => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
  setCurrentDialogsId: id => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: id
  }),

  fetchDialogs: () => dispatch => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(actions.setDialogs(data));
    });
  }
};

export default actions;
