import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Messages as BaseMessages } from "../components/index";
import { messagesActions } from "../redux/action/index";

const Messages = ({ currentDialogId, fetchDialogs, items }) => {
  useEffect(() => {
    fetchDialogs(currentDialogId);
  }, [currentDialogId]);

  return <BaseMessages items={items} />;
};
export default connect(({ messages }) => messages, messagesActions)(Messages);
