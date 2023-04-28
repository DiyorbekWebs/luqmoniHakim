import React, { Fragment } from "react";
import Servise from "../../components/Servise";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero";
import Hero2 from "../../components/hero2";

export default function Home() {
  return (
    <Fragment>
      <Hero2 />
      <Hero />
      <Servise />
      <Card />
    </Fragment>
  );
}
