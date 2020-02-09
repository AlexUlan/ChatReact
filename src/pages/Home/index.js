import React from "react";
import { Icon, Input, Button } from "antd";
import "./Home.scss";
import Massage from "../../components/Message";
import { Status, ChatInput } from "../../components";
import { Dialogs } from "../../containers/index";

const Home = props => {
  return (
    <main className="home">
      <div className="chat">
        <div className="chat__sidbar">
          <div className="chat__sidbar-header">
            <div>
              <Icon type="team" />
              <span>Список Диалогов</span>
            </div>
            <Button type="link" shape="circle" icon="form" />
          </div>
          <div className="chat__sidbar-dialogs">
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
                      "https://avatarko.ru/img/avatar/6/Star_Wars_Darth_Vader_5300.jpg"
                  }
                }
              ]}
            />
          </div>
        </div>
        <div className="chat__dialogs">
          <div className="chat__dialogs-header">
            <div />
            <div className="chat__dialogs-center">
              <b className="chat__dialogs-header-userName">Вейдер Юрьевич</b>
              <div className="chat__dialogs-status">
                <Status online={false} />
              </div>
            </div>
            <Button type="link" shape="circle" icon="ellipsis" />
          </div>

          <div className="chat__dialogs-messag">
            <Massage
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
                  url:
                    "https://source.unsplash.com/100x100/?random=1&nature,water"
                },
                {
                  url:
                    "https://source.unsplash.com/100x100/?random=2&nature,water"
                },
                {
                  url:
                    "https://source.unsplash.com/100x100/?random=3&nature,water"
                }
              ]}
            />
            <Massage
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
              attachments={[
                {
                  url:
                    "https://source.unsplash.com/100x100/?random=1&nature,water"
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
            />
          </div>
          <div className="chat__dialogs-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
