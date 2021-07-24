import { useRouter } from "next/router";
import ActionPlanIcon from "../icons/action-plan-icon";
import HomeIcon from "../icons/home-icon";
import InsightsIcon from "../icons/insights-icon";
import ProfileIcon from "../icons/profile";
import Link from 'next/link'
import SettingIcon from "../icons/setting-icon";
import LogoutIcon from "../icons/logout-icon";
import React from "react";

export default function SideNav(props: {open: boolean, close: any}) {
  const router = useRouter();
  const route = router.route.split("/")[1];

  return (
    <React.Fragment>
      {props.open && <div className="side-nav__overlay" onClick={props.close}></div>}
      <div className={`side-nav ${props.open ? "side-nav--open" : ""}`} onClick={props.close}>
        <div className="side-nav__section">
          <img className="side-nav__logo" src="/images/elevate.png" alt="elevate"/>

          <ul className="side-nav__list side-nav__list--1">
            <li className="side-nav__item">
              <Link href="/">
                <a className="side-nav__item--link">
                  <HomeIcon className={`side-nav__item--icon ${!route ? "side-nav__item--icon--selected" : ""}`}/>
                  <span className={`side-nav__item--text ${!route ? "side-nav__item--text--selected" : ""}`}>Home</span>
                </a>
              </Link>
              {!route && <div className="side-nav__item--line"></div>}
            </li>
            <li className="side-nav__item">
              <Link href="/insights">
                <a className="side-nav__item--link">
                  <InsightsIcon className={`side-nav__item--icon ${route === "insights" ? "side-nav__item--icon--selected" : ""}`}/>
                  <span className={`side-nav__item--text ${route === "insights" ? "side-nav__item--text--selected" : ""}`}>Insights</span>
                </a>
              </Link>
              {route === "insights" && <div className="side-nav__item--line"></div>}
            </li>
            <li className="side-nav__item">
              <Link href="/action">
                <a className="side-nav__item--link">
                  <ActionPlanIcon className={`side-nav__item--icon ${route === "action" ? "side-nav__item--icon--selected" : ""}`}/>
                  <span className={`side-nav__item--text ${route === "action" ? "side-nav__item--text--selected" : ""}`}>Action Plan</span>
                </a>
              </Link>
              {route === "action" && <div className="side-nav__item--line"></div>}
            </li>
            <li className="side-nav__item">
              <Link href="/account">
                <a className="side-nav__item--link">
                  <ProfileIcon className={`side-nav__item--icon ${route === "account" ? "side-nav__item--icon--selected" : ""}`}/>
                  <span className={`side-nav__item--text ${route === "account" ? "side-nav__item--text--selected" : ""}`}>Profile</span>
                </a>
              </Link>
              {route === "account" && <div className="side-nav__item--line"></div>}
            </li>
          </ul>
        </div>
        {route === "settings" ? "dkljgfkgj" : ""}
        <div className="side-nav__section">
          <ul className="side-nav__list">
            <li className="side-nav__item">
              <Link href="/settings">
                <a className="side-nav__item--link">
                  <SettingIcon className={`side-nav__item--icon side-nav__item--icon--1 ${route === "settings" ? "side-nav__item--icon--1--selected" : ""}`}/>
                  <span className={`side-nav__item--text ${route === "settings" ? "side-nav__item--text--selected" : ""}`}>Settings</span>
                </a>
              </Link>
              {route === "settings" && <div className="side-nav__item--line"></div>}
            </li>
            <li className="side-nav__item">
              <Link href="/signup">
                <a className="side-nav__item--link">
                  <LogoutIcon className={`side-nav__item--icon side-nav__item--icon--1`}/>
                  <span className={`side-nav__item--text`}>Logout</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}