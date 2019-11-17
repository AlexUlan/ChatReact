import React from "react";
import propTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import readed from "../../assets/img/readed.svg";
import noReaded from "../../assets/img/noReaded.svg";
import { ru } from "date-fns/locale";

import { Massage as BaseMassage } from "antd";
import classNames from "classnames";

import "./Massage.scss";

const Massage = ({ avatar, user = {}, text, date, isMe, isRead }) => {
  return (
    <div className={classNames("massage", { "massage--isme": isMe })}>
      <div className="massage__content">
        {isMe && (
          <img
            className="massage__icon-readed"
            src={isRead ? readed : noReaded}
            alt="chekedSvg"
          />
        )}

        <div className="massage__avatar">
          <img src={avatar} alt={`Avatar ${user.fullName}`} />
        </div>

        <div className="massage__info">
          <div className="massage__bable">
            <p className="massage__text">{text}</p>
          </div>
          <span className="massage__date">
            {formatDistanceToNow(date, { addSuffix: true, locale: ru }, [])}
          </span>
        </div>
      </div>
    </div>
  );
};

Massage.propTypes = {
  avatar: propTypes.string,
  user: propTypes.object,
  date: propTypes.string,
  text: propTypes.string
};

export default Massage;
