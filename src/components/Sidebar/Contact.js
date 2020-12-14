import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadChat } from "../../redux/actions/chat";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";
import Avatar from "../Profile/Avatar";

function Contact({ contact: { _id, fullname } }) {
  const opened = useParams().id;
  const myId = useSelector((state) => state.profile.myId);
  const dispatch = useDispatch();

  const history = useHistory();

  const OpenedContact = () => {
    return _id === opened;
  };

  const handleClick = () => {
    if (!OpenedContact()) {
      dispatch(loadChat(myId, _id));
      history.push(_id);
    }
  };
  return (
      <div
        className={`contact ${opened === _id ? "active" : ""}`} onClick={handleClick}
      >
          <Avatar size={"medium"} name={fullname[0]} />
        {fullname}
        <div className="date">
          <div>{dayjs(fullname.time).format("hh:mm")}</div>
        </div>
      </div>
  );
}

export default Contact;