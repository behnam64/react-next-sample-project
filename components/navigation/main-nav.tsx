import React from "react";
import { useState } from "react";
import SideNav from "./side-nav";
import TopNav from "./top-nav";

export default function MainNav(props: {title: string}) {
  const [sideNav, setSideNav] = useState(false);
  const openSidenav = () => {
    setSideNav(true);
  } 
  const closeSidenav = () => {
    setSideNav(false);
  } 
  return (
    <React.Fragment>
      <SideNav open={sideNav} close={closeSidenav}/>
      <TopNav title={props.title} openSideNav={openSidenav}/>
    </React.Fragment>
  )
}