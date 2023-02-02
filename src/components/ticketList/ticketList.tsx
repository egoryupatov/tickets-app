import React from "react";
import "./ticketList.scss";
import { Ticket } from "../ticket/Ticket";
import { ITicket } from "../../pages/homepage/homepage.types";

interface TicketListProps {
  searchQuery: string;
  filteredTickets: ITicket[];
}

export const TicketList: React.FC<TicketListProps> = (
  props: TicketListProps
) => {
  return (
    <div className="ticketList">
      {props.filteredTickets.map((ticket: ITicket) => (
        <Ticket
          title={ticket.title}
          date={ticket.date}
          day={ticket.day}
          price={ticket.price}
          genre={ticket.genre}
          duration={ticket.duration}
        />
      ))}
    </div>
  );
};
