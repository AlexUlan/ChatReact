import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Messages as BaseMessages } from "../components/index";
import { messagesActions } from "../redux/action/index";
import { message } from "antd";

const Messages = ({ currentDialogId, fetchMessages, messages, isLoading }) => {
  const messagesRef = useRef(null);
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);
  useEffect(() => {
    messagesRef.current.scrollTo(0, 10000);
  }, [messages]);
  return (
    <BaseMessages
      items={messages}
      isLoading={isLoading}
      blockRef={messagesRef}
    />
  );
};
export default connect(
  ({ messages, dialogs }) => ({
    messages: messages.items,
    currentDialogId: dialogs.currentDialogId,
    isLoading: messages.isLoading
  }),
  messagesActions
)(Messages);
