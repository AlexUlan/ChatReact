import React from "react";
import classNames from "classnames";

import "./DialogItem.scss";
import Time from "../Time";
import IconReaded from "../IconReaded";

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
  }
};

const DialogItem = ({ user, message }) => {
  return (
    <div className="dialogs__item">
      <div className="dialogs__item-avatar">
        {getAvatar(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        )}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Федор</b>
          <span>
            {/* <Time date={new Date()} /> */}
            13:03
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>NtrcnNtrcnNtrc...</p>
          <IconReaded isMe={true} isRead={false} />
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
