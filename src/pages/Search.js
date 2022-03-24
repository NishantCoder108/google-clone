import { Button } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { action } from "../reducer";
import { useStateValue } from "../StateProvider";

import "./Search.css";
function Search({ hidebuttons }) {
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const [{}, dispatch] = useStateValue()
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type:action.SET_SEARCH_TERM,
      term:input
    })


    navigate("/search");
  };

  return (
    <form className="search" onSubmit={search}>
      <div className="search-input">
        <SearchOutlined className="searchIcon" />
        <input type="text" value={input} onChange={(e) =>setInput(e.target.value) } />
        <Mic />
      </div>
      {!hidebuttons && (
        <div className="search-buttons">
          <Button  type="submit" variant="outline">
            {" "}
            Search Button
          </Button>
          <Button variant="outline">I am Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
