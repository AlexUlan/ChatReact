import React from "react";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import Massage from "../Message";
import "./Messages.scss";

const Messages = ({ items, isLoading, blockRef }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", { "messages--isLoad": isLoading })}
    >
      {isLoading && items.length === 0 ? (
        <Spin tip="Загруза Сообщений..." size="large"></Spin>
      ) : items && items.length > 0 ? (
        <div>
          {items.map(item => {
            return <Massage {...item} key={item._id} />;
          })}
        </div>
      ) : items !== undefined ? (
        <div>
          <Empty description="Нет сообщений" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Messages;

{
  /*   <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        date={new Date()}
        audio="https://notificationsounds.com/soundfiles/298f95e1bf9136124592c8d4825a06fc/file-sounds-1105-rush.mp3"
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74AatNIZDPcwzh_EiaMPyECyYCnqcFDDoW83RrNM49YpiuB0uhQ&s"
        text="Это текст сообщения "
        date={new Date()}
        isMe={true}
        isRead={false}
        attachments={[
          {
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          },
          {
            url: "https://source.unsplash.com/100x100/?random=2&nature,water"
          },
          {
            url: "https://source.unsplash.com/100x100/?random=3&nature,water"
          }
        ]}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        attachments={[
          {
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          }
        ]}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
        isRead={false}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
        isRead={false}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
        isRead={false}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
        isRead={false}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
        isRead={false}
      />{" "} */
}
