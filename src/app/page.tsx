import React from "react";

import Hero from "./hero";
import Card from "./Card";
import Running from "./running";
import Gear from "./gear";
import Stan from "./stan";
import Essentials from "./Essentials";


export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">

      <Hero/>
      <Card/>
      <Running/>
      <Gear/>
      <Stan/>
      <Essentials/>
    </main>
  );
}