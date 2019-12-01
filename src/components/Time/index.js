import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from "date-fns/locale";
const Time = ({ date }) => {
  return (
    <div>{formatDistanceToNow(date, { addSuffix: true, locale: ru }, [])}</div>
  );
};

export default Time;
