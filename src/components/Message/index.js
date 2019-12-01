import React from "react";
import propTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import readed from "../../assets/img/readed.svg";
import noReaded from "../../assets/img/noReaded.svg";
import { ru } from "date-fns/locale";

import { Massage as BaseMassage } from "antd";
import classNames from "classnames";

import "./Massage.scss";
import Time from "../Time";
import IconReaded from "../IconReaded";
import DialogItem from "../DialogItem";

const Massage = ({
  avatar,
  user = {},
  text,
  date,
  isMe,
  isRead,
  attachments,
  isTyping
}) => {
  return (
    <div
      className={classNames("massage", {
        "massage--isme": isMe,
        " massage--is-typing": isTyping,
        " massage--image": attachments && attachments.length === 1
      })}
    >
      <div className="dialogs">
        <DialogItem user={{}} message={{ time: new Date(), text: "aaasd" }} />
      </div>
      <div className="massage__content">
        <IconReaded isMe={isMe} isRead={isRead} />
        {/*  {isMe && isRead && (
          <img
            className="massage__icon-readed"
            src={isRead ? readed : noReaded}
            alt="chekedSvg"
          />
        )} */}

        <div className="massage__avatar">
          <img src={avatar} alt={`Avatar ${user.fullName}`} />
        </div>

        <div className="massage__info">
          <div>
            {(text || isTyping) && (
              <div className="massage__bable">
                {text && <p className="massage__text">{text}</p>}
                {isTyping && (
                  <div className="massage__typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="massage__attachments">
            {attachments &&
              attachments.map((item, index) => {
                return (
                  <div key={index} className="massage__attachments--items">
                    <img src={item.url} alt="img_massage" />
                  </div>
                );
              })}
          </div>
          {date && (
            <span className="massage__date">
              <Time date={date} />
              {/* 
              {formatDistanceToNow(date, { addSuffix: true, locale: ru }, [])} */}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Massage.propTypes = {
  avatar: propTypes.string,
  user: propTypes.object,
  date: propTypes.string,
  text: propTypes.string,
  attachments: propTypes.array,
  isTyping: propTypes.bool
};

export default Massage;
