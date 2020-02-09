import React from "react";
import classNames from "classnames";
import { generaiteAvatarFromHesh } from "./../../utils/index";

import "./Avatar.scss";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return <img className="avatar" src={user.avatar} alt="" />;
  } else {
    const { color, colorLightem } = generaiteAvatarFromHesh(user._id);
    const firstCharName = user.fulname;
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLightem} 96.52%)`
        }}
        className="avatar avatar--symbol"
      >
        {firstCharName.charAt(0)}
      </div>
    );
  }
};

export default Avatar;
