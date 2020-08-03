import React from "react";
import "./index.css";

export default (props) => {
  return (
    <div className="left_panel_container">
      <div className="content_padding profile_picture">
        <img
          src={props.userDetails.avatar_url}
          alt="User"
          height="250"
          width="250"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="content_padding profile_name">
        {props.userDetails.name}
      </div>
      <div className="content_padding profile_username">
        {props.userDetails.login}
      </div>
      <div className="content_padding profile_position_exp">
        {props.userDetails.bio}
      </div>
      <div className="content_padding profile_follow_button">
        <button className="follow_button">Follow</button>
      </div>
      <div className="content_padding profile_rating_followers_ing">
        <div>{props.userDetails.followers} followers . </div>
        <div> &nbsp; {props.userDetails.following} following . </div>
        <div> &nbsp; {props.userDetails.followers}</div>
      </div>
      <div className="content_padding font_14">
        {props.userDetails.company}
      </div>
      <div className="content_padding font_14">
        {props.userDetails.location}
      </div>
      <div className="content_padding font_14">
        <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsupreetsingh247%3Ftab%3Drepositories">
          Sign in to view email
        </a>
      </div>
    </div>
  );
};
