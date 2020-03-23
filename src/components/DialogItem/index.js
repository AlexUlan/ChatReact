import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import { isToday } from "date-fns";
import { generaiteAvatarFromHesh } from "./../../utils/index";

import IconReaded from "../Messages";
import { Avatar } from "./../index";

const getAvatar = avatar => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
    return <div></div>;
  }
};
/* Проверям когда было создано сообщения, если сегодня возврощаем олько минуты и часы, если нето то полную дату */
const getMassageTimes = massate_at => {
  massate_at = new Date(massate_at);
  if (isToday(massate_at)) {
    return format(massate_at, "hh:ss");
  } else {
    return format(massate_at, "dd.mm.yyyy");
  }
};

const DialogItem = ({
  user,
  message,
  unReaded,
  isMe,
  created_at,
  text,
  onSelect,
  currentDialogId,
  _id
}) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline,
        "dialogs__item--selected": currentDialogId === _id
      })}
      onClick={onSelect.bind(this, user._id)}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>

      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>{getMassageTimes(created_at)}</span>
        </div>

        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe && <IconReaded isMe={true} isRead={true} />}
          {unReaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unReaded > 9 ? "+9" : unReaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
