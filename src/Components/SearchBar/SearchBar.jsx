import React from "react";
import "./style.css"

import Menu from "../MaterialSymbolsOutlined/Menu";
import SearchIcon from "../MaterialSymbolsRounded/SearchIcon";

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input type="text" name="SearchBarInput" className="SearchBarInput" />
            <SearchIcon />
        </div>
    )
}
export default SearchBar
