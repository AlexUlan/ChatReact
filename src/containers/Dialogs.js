import React, { useState } from "react";

import { Dialogs as BaseDialogs } from "../components/index";

const Dialogs = ({ items, userId }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setfiltred] = useState(Array.from(items));

  /* let filtred = Array.from(items); */

  const onChangeinpute = e => {
    const value = e.target.value;
    setfiltred(
      items.filter(
        dialog =>
          dialog.user.fulname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(e.target.value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeinpute}
      inputValue={inputValue}
    />
  );
};
export default Dialogs;
