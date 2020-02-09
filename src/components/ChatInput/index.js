import React, { useState } from "react";

import classNames from "classnames";

import "./ChatInput.scss";
import { Input, Icon, Button } from "antd";

const ChatInput = props => {
  const [value, setValue] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile_btn">
        <Button type="link" shape="circle" icon="smile" />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder="Введите текст сообщений"
        size="large"
        onSearch={value => console.log(value)}
      />
      <div className="chat-input__actions">
        <Button type="link" shape="circle" icon="camera" />
        {!value ? (
          <Button type="link" shape="circle" icon="audio" />
        ) : (
          <Button type="link" shape="circle" icon="check-circle" />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
