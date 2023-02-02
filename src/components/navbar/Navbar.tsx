import React from "react";
import "./navbar.scss";
import { SearchBar } from "../searchBar/SearchBar";
import "../searchBar/searchBar.scss";
import { IFilter } from "../../pages/homepage/homepage.types";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setFilter: (filter: IFilter) => void;
  filter: IFilter;
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <div className="navbar">
      <div className="filters">
        <select
          className="filter"
          value={props.filter.date}
          onChange={(e) =>
            props.setFilter({ ...props.filter, date: e.target.value })
          }
        >
          <option value="">Дата</option>
          <option value="1 февраля">1 февраля</option>
          <option value="2 февраля">2 февраля</option>
          <option value="3 февраля">3 февраля</option>
          <option value="4 февраля">4 февраля</option>
          <option value="5 февраля">5 февраля</option>
          <option value="6 февраля">6 февраля</option>
          <option value="7 февраля">7 февраля</option>
        </select>
        <select
          className="filter"
          value={props.filter.day}
          onChange={(e) =>
            props.setFilter({ ...props.filter, day: e.target.value })
          }
        >
          <option value="">День</option>
          <option value="Понедельник">Понедельник</option>
          <option value="Вторник">Среда</option>
          <option value="Среда">Среда</option>
          <option value="Четверг">Четверг</option>
          <option value="Пятница">Пятница</option>
          <option value="Суббота">Суббота</option>
          <option value="Воскресенье">Воскресенье</option>
        </select>
        <select
          className="filter"
          value={props.filter.price}
          onChange={(e) =>
            props.setFilter({ ...props.filter, price: Number(e.target.value) })
          }
        >
          <option value="">Цена</option>
          <option value="450">450 руб.</option>
          <option value="600">600 руб.</option>
          <option value="800">800 руб.</option>
        </select>
      </div>
      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
    </div>
  );
};
