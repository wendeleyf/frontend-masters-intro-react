import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  /*   return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" })
  ]); */

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Pepper" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Stray" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
