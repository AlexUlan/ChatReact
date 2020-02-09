import React from "react";
import classNames from "classnames";
import "./Status.scss";

const Status = ({ online }) => (
  <div className={classNames("status", { "status--online": online })}>
    {online ? "онлайн" : "офлайн"}
  </div>
);

export default Status;
