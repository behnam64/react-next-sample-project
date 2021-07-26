import React from "react";
import ColorSchemeNav from "../color-scheme-nav";
import ArrowIcon from "../icons/arrow-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import NotificationIcon from "../icons/notification-icon";

export default function TopNav(props: {title: string, openSideNav: any}) {
  return (
    <React.Fragment>
      <div className="top-nav">
        <div className="top-nav__container top-nav__container--desktop">
          <div className="top-nav__section top-nav__section--desktop">
            <img className="top-nav__image" src="/images/profile-image.png" alt="profile-image" />
            <div className="top-nav__notification">
              <NotificationIcon className="top-nav__notification--icon"/>
              <span className="top-nav__notification--count">2</span>
            </div>
            <ColorSchemeNav/>
          </div>

          <div className="top-nav__section top-nav__section--tablet">
            <button className="top-nav__menu" onClick={props.openSideNav}><HamburgerIcon className="top-nav__menu--icon"/></button>
            <img className="top-nav__image" src="/images/profile-image.png" alt="profile-image" />
            <div className="top-nav__notification">
              <NotificationIcon className="top-nav__notification--icon"/>
              <span className="top-nav__notification--count">2</span>
            </div>
          </div>

          <div className="top-nav__section top-nav__section--desktop">
            <div className="top-nav__latest">
              <span className="top-nav__latest--text">Latest test: Feb 12, 2021</span>
              <ArrowIcon className="top-nav__latest--icon"/>
              </div>
            <h2 className="top-nav__title">{props.title}</h2>
          </div>

          <div className="top-nav__section top-nav__section--tablet">
            <img className="top-nav__logo top-nav__logo--light" src="/images/elevate.png" alt="elevate"/>
            <img className="top-nav__logo top-nav__logo--dark" src="/images/elevate-dark.png" alt="elevate"/>
          </div>
        </div>

        <div className="top-nav__container top-nav__container--tablet">
          <div className="top-nav__section top-nav__section--tablet">
            <div className="top-nav__latest">
              <span className="top-nav__latest--text">Latest test: Feb 12, 2021</span>
              <ArrowIcon className="top-nav__latest--icon"/>
              </div>
            <h2 className="top-nav__title">{props.title}</h2>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}