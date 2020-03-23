import React, { useState } from "react";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import classNames from "classnames";

import "./ChatInput.scss";
import { Input, Icon, Button } from "antd";

const ChatInput = props => {
  const [value, setValue] = useState("");
  const [emojiVisable, setImojiVissable] = useState(false);

  const toogleemojiVissable = () => {
    setImojiVissable(!emojiVisable);
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile_btn">
        {emojiVisable && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}
        <Button
          type="link"
          shape="circle"
          icon="smile"
          onClick={toogleemojiVissable}
        />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder="Введите текст сообщений"
        size="large" /* 
        onSearch={value => console.log(value)} */
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={files => console.log("file")}
          containerProps={{
            className: "chat-input__actions-upload-btn"
          }}
          uploadProps={{
            accept: ".jpg,.png,.jpeg,.gif",
            multiple: " multiple"
          }}
        >
          <Button type="link" shape="circle" icon="camera" />
        </UploadField>
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
