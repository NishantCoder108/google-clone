import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogle";
import Search from "./Search";
import "./SearchPage.css";
function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
            alt="logo"
          />
        </Link>

        <div className="searchPage-headerBody">
          <Search hidebuttons />
          <div className="searchPage-options">
            <div className="searchPage-optionLeft">
             
             
              <div className="searchPage-option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
            </div>

            <div className="searchPage-optionRight">
              <div className="searchPage-option">
                <Link to="/setting">Setting</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

{term && 
      <div className="searchPage-results">
        <p className="searchPage-resultCount">
          {" "}
          About {data?.searchInformation.formattedTotalResults} results shown in
          ({data?.searchInformation.formattedSearchTime} secs) for {term}
        </p>
        {data?.items?.map((item) => (
          <div className="searchPage-result">
            <a href={item.link} target="_blank">
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0].src && (
                  <img
                    className="searchPage-resultImage"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0].src
                    }
                    alt ='image'
                  />
                )}

              <span> {item.displayLink}</span>
            </a>
            <a href={item.link} target="_blank">
              <h2>{item.title}</h2>
            </a>
            <div href="" target="_blank">
              <p>{item.snippet}</p>
            </div> <br/>
          <br/>
          <br/>
          </div>
         
        ))}
      </div>}
    </div>
  );
}

export default SearchPage;
