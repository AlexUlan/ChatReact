import React from "react";
import "./Home.scss";
import Massage from "../../components/Message";
import { Dialogs } from "../../components";

const Home = props => {
  return (
    <section>
      <Dialogs
        userId={0}
        items={[
          {
            text:
              "Быть или не быть Быть или не бытьБыть или не быть Быть или не бытьБыть или не бытьБыть или не бытьБыть или не бытьБыть или не быть",
            isReaded: false,
            created_at: new Date(),
            user: {
              _id: "7d9e442saf451asfdwt41",
              fulname: "Федор",
              avatar: null,
              isOnline: false
            }
          },
          {
            text: "Привет че по чем",
            created_at: new Date(),
            user: {
              _id: "2dwe442saf451asfdwt41",
              fulname: "Дар вейдер",
              avatar:
                "https://avatarko.ru/img/avatar/6/Star_Wars_Darth_Vader_5300.jpg",
              isOnline: false
            }
          },
          {
            text: "Hell",
            created_at: new Date(),
            user: {
              _id: "2dwe442saf451asfdwt412",
              fulname: "Дар вейдер",
              avatar:
                "https://avatarko.ru/img/avatar/6/Star_Wars_Darth_Vader_5300.jpg",
              /*   "https://avatarko.ru/img/avatar/6/Star_Wars_Darth_Vader_5300.jpg", */
              isOnline: false
            }
          }
        ]}
      />

      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        date={new Date()}
        audio="https://notificationsounds.com/soundfiles/298f95e1bf9136124592c8d4825a06fc/file-sounds-1105-rush.mp3"
      />

      {/*      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
        Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
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
      />{" "}
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        isTyping
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        attachments={[
          {
            url: "https://source.unsplash.com/100x100/?random=1&nature,water"
          }
        ]}
      /> */}
    </section>
  );
};

export default Home;
