import React from "react";
import DialogItem from "../DialogItem";
import orderBy from "lodash/orderBy";

import "./Dialogs.scss";
import { Input, Empty } from "antd";

const Dialogs = ({
  items,
  userId,
  onSearch,
  inputValue,
  onSelectDialog,
  currentDialogId
}) => {
  return (
    <div className="dialogs">
      <div className="dialogs-search">
        <Input.Search
          value={inputValue}
          placeholder="Поиск среди контактов"
          onChange={e => onSearch(e)}
        />
      </div>

      {items.length ? (
        orderBy(items, ["created_at"], ["desc"]).map((item, index) => {
          return (
            <DialogItem
              key={index}
              user={item.user}
              {...item}
              unReaded="2"
              isMe={item.user._id === userId}
              onSelect={onSelectDialog}
              currentDialogId={currentDialogId}
            />
          );
        })
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Ничего не найдено"
        />
      )}
    </div>
  );
};

export default Dialogs;
