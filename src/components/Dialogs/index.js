import React from "react";
import DialogItem from "../DialogItem";
import orderBy from "lodash/orderBy";

const Dialogs = ({ items, userId }) => {
  return (
    <div className="dialogs">
      {orderBy(items, ["created_at"], ["desc"]).map((item, index) => {
        return (
          <DialogItem
            key={index}
            user={item.user}
            {...item} /* 
            message={item} */
            unReaded="2"
            isMe={item.user._id === userId}
          />
        );
      })}
    </div>
  );
};

export default Dialogs;
