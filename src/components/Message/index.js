import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import readed from "../../assets/img/readed.svg";
import noReaded from "../../assets/img/noReaded.svg";
import { ru } from "date-fns/locale";
import { converCurrentTime } from "../../utils/index";

import { Massage as BaseMassage } from "antd";
import classNames from "classnames";

import "./Massage.scss";
import Time from "../Time";
import IconReaded from "../IconReaded";
import DialogItem from "../DialogItem";
import waveSvg from "../../assets/wave.svg";
import PlaySvg from "../../assets/img/play.svg";
import PauseSvg from "../../assets/img/pause.svg";

const MessageAudio = ({ audio }) => {
  const [isplaing, setIsPlaing] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioElem = useRef(null);
  const tooglePlay = () => {
    audioElem.current.volume = "0.1";
    if (!isplaing) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };
  useEffect(() => {
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPlaing(true);
      },
      false
    );
    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPlaing(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPlaing(false);
      },
      false
    );

    audioElem.current.addEventListener(
      "timeupdate",
      () => {
        /* Полоса загрузки на сообщении */
        const duration = audioElem.current.duration || 0;

        setCurrentTime(audioElem.current.currentTime);

        setProgress((audioElem.current.currentTime / duration) * 100);
      },
      false
    );
  }, []);
  return (
    <div className="massage__audio">
      <audio ref={audioElem} src={audio} preload="auto" />
      <div
        className="massage__audio-progress"
        style={{ width: progress + "%" }}
      ></div>
      <div className="massage__audio-info">
        <div className="massage__audio-btn">
          <button onClick={tooglePlay}>
            {isplaing ? (
              <img src={PauseSvg} alt="pause" />
            ) : (
              <img src={PlaySvg} alt="play" />
            )}
          </button>
        </div>
        <div className="massage__audio-wave">
          <img src={waveSvg} alt="wave svg" />
        </div>
        <span className="massage__audio-duration">
          {converCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

const Massage = ({
  avatar,
  user = {},
  text,
  date,
  audio,
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
        " massage--image": attachments && attachments.length === 1,
        " massage--is-audio": audio
      })}
    >
      <div className="massage__content">
        <IconReaded isMe={isMe} isRead={isRead} />
        <div className="massage__avatar">
          <img
            src={avatar}
            // alt={`Avatar ${user.fullName}`
          />
        </div>

        <div className="massage__info">
          <div>
            {(audio || text || isTyping) && (
              <div className="massage__bable">
                {text && <p className="massage__text">{text}</p>}
                {isTyping && (
                  <div className="massage__typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                {audio && <MessageAudio audio={audio} />}
              </div>
            )}
          </div>

          {attachments && (
            <div className="massage__attachments">
              {attachments.map((item, index) => {
                return (
                  <div key={index} className="massage__attachments--items">
                    <img src={item.url} alt="img_massage" />
                  </div>
                );
              })}
            </div>
          )}

          {date && (
            <span className="massage__date">
              <Time date={date} />
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
