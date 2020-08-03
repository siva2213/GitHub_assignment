import React from "react";
import "./index.css";

export default (props) => {
  function dateFormat(dateInput) {
    let date = new Date(dateInput);
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(date);
    let formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  }

  const anchorStyling = {
    textDecoration: "none",
    color: "#0366D6"
  }
  return (
    <div className="repo_container">
      {props.repoDetails.map((repo, i) => {
        return (
          <div key={repo.id}>
            <div className="repo_details">
              <div className="repo_detail">
                <div className="repo_name">
                  <a
                    href={repo.html_url}
                    style={anchorStyling}
                  >
                    {repo.name}
                  </a>
                </div>
                {repo.fork ? (
                  <small className="sub_info_padding">
                    Forked from{" "}
                    <a href={repo.forks_url} style={anchorStyling}>
                      {repo.name}
                    </a>
                  </small>
                ) : null}
                {repo.description ? (
                  <div className="sub_info_padding">{repo.description}</div>
                ) : null}
                <div className="sub_info_section">
                  {repo.language ? (
                    <div className="sub_info_padding sub_info_font_size">{repo.language}</div>
                  ) : null}

                  {repo.stargazers_count ? (
                    <div className="sub_info_padding sub_info_font_size">
                      <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      {repo.stargazers_count}
                    </div>
                  ) : null}

                  {repo.fork ? (
                    <div className="sub_info_padding sub_info_font_size">
                      <i className="fa fa-code-fork" aria-hidden="true"></i>
                      {repo.forks_count}
                    </div>
                  ) : null}

                  {repo.license ? (
                    <div className="sub_info_padding sub_info_font_size">{repo.license.name}</div>
                  ) : null}

                  <div className="sub_info_padding sub_info_font_size">
                    Updated on {dateFormat(repo.pushed_at)}
                  </div>
                </div>
              </div>
              <div className="repos_activity"></div>
            </div>
            <hr style={{border: "1px solid #e6e4e4"}}/>
          </div>
        );
      })}
    </div>
  );
};
