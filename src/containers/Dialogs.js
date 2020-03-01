import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Dialogs as BaseDialogs } from "../components/index";
import { dialogsActions } from "../redux/action/index";

const Dialogs = ({ fetchDialogs, items, setCurrentDialogsId, userId }) => {
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

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else setfiltred(items);
  }, [items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeinpute}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogsId}
    />
  );
};
export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
