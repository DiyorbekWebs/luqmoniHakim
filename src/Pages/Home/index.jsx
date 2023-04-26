import React, { Fragment } from "react";
import Servise from "../../components/Servise";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <Fragment>
      <Servise/>
      <Card/>
      <Hero/>
    </Fragment>
  );
}
