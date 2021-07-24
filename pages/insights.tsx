import React from "react";
import MainNav from "../components/navigation/main-nav";
import SideNav from "../components/side-nav";

export default function Insights() {
  return (
    <React.Fragment>
    <MainNav title="Dashboard"/>
    <div className="home"></div>
  </React.Fragment>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  }
}