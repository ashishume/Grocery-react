import React, { Fragment, useState, useRef } from "react";
import _ from "lodash";
import { Input, Dropdown, Segment, List, Divider } from "semantic-ui-react";
import HttpService from "../API/HttpService";
import history from "./../history";
import "./SearchBar.css";
const SearchBar = () => {
  const sendQuery = (query) => {
    const p = {
      search: query,
    };
    HttpService.get("search", {
      params: p,
    }).then((response) => {
      setOptions(response.data);
      if (query == "") setOptions([]);
    });
  };
  const [userQuery, setUserQuery] = useState("");
  const [options, setOptions] = useState([]);
  const delayedQuery = useRef(_.debounce((q) => sendQuery(q), 500)).current;
  const onChange = (e) => {
    setUserQuery(e.target.value);
    delayedQuery(e.target.value);
  };

  const onSearchResultsItemHandler = (e) => {
    console.log(e._id);
    history.push(`/grocery/${e._id}`);
  };

  return (
    <Fragment>
      <Input
        placeholder="Search essentials, groceries, and more …"
        className="nav-search-bar"
        onChange={onChange}
        value={userQuery}
      />

      {options.length ? (
        <div style={{ margin: "0 auto" }}>
          <ul className="list-group">
            {options.map((value, i) => {
              return (
                <Fragment key={i}>
                  <li
                    className="list-group-item"
                    onClick={() => onSearchResultsItemHandler(value)}
                  >
                    {value.name}
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

export default SearchBar;
