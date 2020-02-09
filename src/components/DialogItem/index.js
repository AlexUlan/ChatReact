import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import { isToday } from "date-fns";
import { generaiteAvatarFromHesh } from "./../../utils/index";

import IconReaded from "../IconReaded";
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
  if (isToday(massate_at)) {
    return format(massate_at, "HH:ss");
  } else {
    return format(massate_at, "DD.MM.YYYY");
  }
};

const DialogItem = ({ user, message, unReaded, isMe, created_at, text }) => {
  return (
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>

      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fulname}</b>
          <span>
            {getMassageTimes(created_at)}
            {/*   <Time date={message.created_at} /> */}
          </span>
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
