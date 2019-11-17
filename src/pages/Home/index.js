import React from "react";
import "./Home.scss";
import Massage from "../../components/Message";

const Home = props => {
  return (
    <section>
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFh3TkH5vx3dMBxbpG5VcoQbEhwjJu8JgJwDDRdggfHBVS6tS8g&s"
        text="Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения 
        Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения Это текст сообщения "
        date={new Date()}
        isRead={false}
      />
      <Massage
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74AatNIZDPcwzh_EiaMPyECyYCnqcFDDoW83RrNM49YpiuB0uhQ&s"
        text="Это текст сообщения "
        date={new Date()}
        isMe={true}
        isRead={true}
      />
    </section>
  );
};

export default Home;
