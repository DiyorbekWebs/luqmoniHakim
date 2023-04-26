import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <Fragment>
      <Header/>
      {
        <main>
          <Outlet/>
        </main>
      }
      <Footer/>
    </Fragment>
  );
}