import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { TicketList } from "../../components/ticketList/ticketList";
import "./homepage.scss";
import { IFilter, ITicket } from "./homepage.types";

export const Homepage: React.FC = () => {
  const tickets = require("../../ticketList.json");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [filter, setFilter] = useState<IFilter>({
    date: "",
    day: "",
    price: 0,
  });

  const filteredTickets = tickets.filter((ticket: ITicket) => {
    if (
      ticket.title.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1 ||
      (filter.date && ticket.date !== filter.date) ||
      (filter.day && ticket.day !== filter.day) ||
      (filter.price && ticket.price !== filter.price)
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="homepage">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filter={filter}
          setFilter={setFilter}
        />
        <TicketList
          searchQuery={searchQuery}
          filteredTickets={filteredTickets}
        />
      </div>
    </div>
  );
};
