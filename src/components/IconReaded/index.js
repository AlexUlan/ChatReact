import React from "react";
import readed from "../../assets/img/readed.svg";
import noReaded from "../../assets/img/noReaded.svg";
/* 
import "./Block.scss"; */

const IconReaded = ({ isMe, isRead }) => {
  return (
    <>
      {isMe && (
        <img
          className="massage__icon-readed"
          src={isRead ? readed : noReaded}
          alt="chekedSvg"
        />
      )}
    </>
  );
};

export default IconReaded;
