import React from "react";
import "./ticket.scss";
import { getDuration } from "../../utils/getDuration";
import { ITicket } from "../../pages/homepage/homepage.types";

export const Ticket: React.FC<ITicket> = (props: ITicket) => {
  return (
    <div className="ticket">
      <div className="date_info">
        <div className="date">{props.date}</div>
        <div className="info">
          <div className="info_title">{props.title}</div>
          <div className="info_genre">
            <div className="genre">{props.genre}</div>
            <div className="duration">{getDuration(props.duration)}</div>
          </div>
        </div>
      </div>
      <div className="price">{props.price} руб.</div>
    </div>
  );
};
